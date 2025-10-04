import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getFavourites = query({
  args: { userId: v.id("Users") },
  handler: async (ctx, args) => {
     const favourites = await ctx.db.query("Favourites").filter((q) => q.eq(q.field("user"), args.userId)).first();
     return favourites?.workbooks || [];
  }
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
          workbooks: [...existingFavourite.workbooks, args.workbookId]
        });
      }
    } else {
      await ctx.db.insert("Favourites", {
        user: args.userId,
        workbooks: [args.workbookId]
      });
    }
  },
});
