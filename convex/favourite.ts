import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const addFavourite = mutation({
  args: { user: v.id("Users"), workbookId: v.id("Workbooks") },
  handler: async (args, ctx) => {

  },
});
