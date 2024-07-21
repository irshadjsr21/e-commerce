import { createTRPCRouter } from "~/server/api/trpc";
import { listProcedure } from "./list";
import { likeProcedure } from "./like";

export const categoryRouter = createTRPCRouter({
  list: listProcedure,
  like: likeProcedure,
});
