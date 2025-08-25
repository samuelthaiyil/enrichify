import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getUsers = query({
    args: {},
    handler: async (ctx, args) => {
        const users = (await ctx.db.query("Users").collect()).map((user) => ({
            _id: user._id,
            name: user.name,
            email: user.email,
            _creationTime: user._creationTime,
        }))
        return JSON.parse(JSON.stringify(users));
    }
});