import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { Workbook } from "../app/types/workbook";

export const getFavourites = query({
  args: { userId: v.id("Users") },
  handler: async (ctx, args) => {
    const favourites = await ctx.db
      .query("Favourites")
      .filter((q) => q.eq(q.field("user"), args.userId))
      .first();
    let workbooks: Workbook[] | null = [];

    console.log("favourites", favourites);

    if (favourites?.workbooks.length) {
      console.log("favourites workbooks", favourites.workbooks);
      const workbookPromises = favourites.workbooks.map(async (workbookId) => {
        const workbook = await ctx.db
          .query("Workbooks")
          .filter((q) => q.eq(q.field("_id"), workbookId))
          .first();
        console.log("workbook", workbook);
        return workbook;
      });

      const workbookResults = await Promise.all(workbookPromises);
      workbooks = workbookResults.filter((workbook) => workbook !== null);
    }
    console.log("workbooksResults", workbooks);
    return workbooks;
  },
});

export const addFavourite = mutation({
  args: { userId: v.id("Users"), workbookId: v.id("Workbooks") },
  handler: async (ctx, args) => {
    const existingFavourite = await ctx.db
      .query("Favourites")
      .filter((q) => q.eq(q.field("user"), args.userId))
      .first();

    if (existingFavourite) {
      if (!existingFavourite.workbooks.includes(args.workbookId)) {
        await ctx.db.patch(existingFavourite._id, {
          workbooks: [...existingFavourite.workbooks, args.workbookId],
        });
      }
    } else {
      await ctx.db.insert("Favourites", {
        user: args.userId,
        workbooks: [args.workbookId],
      });
    }
  },
});
