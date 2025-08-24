import { Id } from "./_generated/dataModel";
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createWorkbook = mutation({
    args: { name: v.string(), createdBy: v.id("Users") },
    handler: async (ctx, args) => {
      const workbookId = await ctx.db.insert("Workbooks", { name: args.name, createdBy: args.createdBy });
      
    },
  });