import { Id } from "./_generated/dataModel";
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createWorkbook = mutation({
    args: { name: v.string(), createdBy: v.id("Users") },
    handler: async (ctx, args) => {
        const workbookId = await ctx.db.insert("Workbooks", { name: args.name, createdBy: args.createdBy });
        const activityId = await ctx.db.insert("Activities", { description: "created a workbook", workbookId, user: args.createdBy });
    },
});

export const getWorkbooks = query({
    args: {},
    handler: async (ctx, args) => {
        const tasks = await ctx.db
            .query("Workbooks").collect()
        return tasks;
    },
});

export const getWorkbookById = query({
    args: { id: v.id("Workbooks") },
    handler: async (ctx, args) => {
        const workbook = await ctx.db.get(args.id);
        return workbook;
    },
});