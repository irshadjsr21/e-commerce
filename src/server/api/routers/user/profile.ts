import { publicProcedure } from "../../trpc";

export const profileProcedure = publicProcedure.query(async ({ ctx }) => {
  if (!ctx.user) throw new Error("Login to continue");

  return {
    ...ctx.user,
  };
});
