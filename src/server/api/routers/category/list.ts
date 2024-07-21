import { z } from "zod";
import { publicProcedure } from "../../trpc";

const schema = z.object({
  page: z.number().default(1),
  limit: z.number().min(1).default(10),
});

export const listProcedure = publicProcedure
  .input(schema)
  .query(async ({ input, ctx }) => {
    if (!ctx.user) throw new Error("Login to continue");

    const categories = await ctx.db.category.findMany({
      select: {
        id: true,
        name: true,
        createdAt: true,
        likedBy: {
          where: {
            userId: ctx.user.id,
          },
        },
      },
      skip: (input.page - 1) * input.limit,
      take: input.limit,
    });
    const total = await ctx.db.category.count();

    return {
      currentPage: input.page,
      totalPages: Math.ceil(total / input.limit),
      categories: categories.map((category) => ({
        ...category,
        likedBy: undefined,
        isLiked: category.likedBy.some(
          (likedBy) => likedBy.userId === ctx.user.id
        ),
      })),
    };
  });
