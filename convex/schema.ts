import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  Workbooks: defineTable({
    name: v.string(),
    createdBy: v.id("Users"),
  }).index("by_createdBy", ["createdBy"]),
  Favourites: defineTable({
    user: v.id("Users"),
    workbooks: v.array(v.id("Workbooks")),
  }),

  Users: defineTable({
    name: v.string(),
    email: v.string(),
    imageUrl: v.string(),
  }).index("by_email", ["email"]),

  Activities: defineTable({
    user: v.id("Users"),
    description: v.string(),
    workbookId: v.id("Workbooks"),
  })
    .index("by_user", ["user"])
    .index("by_workbookId", ["workbookId"]),
});
