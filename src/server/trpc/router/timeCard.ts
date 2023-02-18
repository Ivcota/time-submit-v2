import { z } from "zod";
import { publicProcedure, router } from "../trpc";

export const timeCardRouter = router({
  createTimeCard: publicProcedure
    .input(
      z.object({
        firstName: z.string(),
        lastName: z.string(),
        hours: z.number(),
        bibleStudies: z.number(),
        month: z.string(),
        placements: z.number(),
        returnVisits: z.number(),
        videos: z.number(),
        comment: z.string().nullable(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.timeCard.create({
        data: {
          firstName: input.firstName,
          lastName: input.lastName,
          hours: input.hours,
          bibleStudies: input.bibleStudies,
          month: input.month,
          placements: input.placements,
          returnVisits: input.returnVisits,
          videos: input.videos,
          comment: input?.comment,
        },
      });
    }),
  listAllCards: publicProcedure.query(async ({ ctx }) => {
    return {
      allCards: await ctx.prisma.timeCard.findMany(),
    };
  }),
});
