import { Id } from "./_generated/dataModel";
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createActivity = mutation({
  args: { description: v.string(), workbookId: v.id("Workbooks"), user: v.id("Users") },
  handler: async (ctx, args) => {
    const activityId = await ctx.db.insert("Activities", { description: args.description, workbookId: args.workbookId, user: args.user });
    return activityId;
  },
});

export const getActivities = query({
  args: {},
  handler: async (ctx, args) => {
    const activities = (await ctx.db
      .query("Activities").collect())?.map(activity => ({
        _id: activity._id,
        description: activity.description,
        workbookId: activity.workbookId,
        userId: activity.user,
        _creationTime: activity._creationTime,
      }))

    return JSON.parse(JSON.stringify(activities));
  },
})