import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { timeCardRouter } from "./timeCard";

export const appRouter = router({
  example: exampleRouter,
  timeCard: timeCardRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
