"use client"

import { Activity } from "@/app/types/activity";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Description } from "@radix-ui/react-dialog";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { User } from "@/app/types/user";

export const ActivityFeed = () => {
    const activities = useQuery(api.activity.getActivities) as Activity[];
    const users = useQuery(api.user.getUsers) as User[];

    return (
        <div className="flex flex-col gap-2">
            {activities?.map((activity, index) => {
                const user = users.find((user) => user._id === activity.userId);
                console.log(user);
                return (
                    <div key={activity._id} className="flex flex-col m-0">
                        <div className="flex flex-row items-start gap-4 m-0">
                            <div className="flex flex-col items-center">
                                <Avatar className="w-12 h-12 rounded-full overflow-hidden">
                                    <AvatarImage src={user?.imageUrl} className="w-full h-full object-cover" />
                                    <AvatarFallback className="bg-red-200 text-red-800 text-2xl w-12 h-12 rounded-full flex items-center justify-center">{user?.name?.charAt(0) || "?"}</AvatarFallback>
                                </Avatar>
                                {index !== activities.length - 1 && <div className="w-1 h-20 bg-gray-300 mt-2">
                                </div>}
                            </div>
                            <div className="flex flex-col mt-2">
                                <div className="flex flex-row gap-1">
                                    <span className="tracking-tighter font-semibold">{user?.name || "Unknown User"}</span> <span className="text-gray-600 tracking-tighter">{activity.description}</span>
                                </div>
                                <span className="text-gray-500 text-sm">{new Date(activity._creationTime).toLocaleString()}</span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}