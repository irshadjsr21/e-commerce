import { z } from "zod";
import { publicProcedure } from "../../trpc";

const schema = z.object({
  categoryId: z.string(),
  liked: z.boolean().default(true),
});

export const likeProcedure = publicProcedure
  .input(schema)
  .mutation(async ({ input, ctx }) => {
    if (!ctx.user) throw new Error("Login to continue");

    const likedCategory = await ctx.db.likedCategory.findFirst({
      where: {
        userId: ctx.user.id,
        categoryId: input.categoryId,
      },
    });

    if (!likedCategory) {
      await ctx.db.likedCategory.create({
        data: {
          userId: ctx.user.id,
          categoryId: input.categoryId,
          liked: input.liked,
        },
      });
    } else {
      await ctx.db.likedCategory.update({
        where: {
          id: likedCategory.id,
        },
        data: {
          liked: input.liked,
        },
      });
    }

    return { isSuccess: true };
  });
