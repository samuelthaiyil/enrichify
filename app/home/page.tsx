import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ActivityFeed } from "@/components/activityfeed";
import { User } from "../types/user";
import { Activity } from "../types/activity";

export default function HomePage() {

    const dummyUser: User = {
        _id: Math.random().toString(),
        name: "Sam Thaiyil",
        email: "samuelmathen@gmail.com",
        _creationTime: "08-23-2025",
        imageUrl: ""
    }

    const dummyActivities: Activity[] = [
        {
            user: dummyUser,
            description: "ran an enrichment",
            _id: "x",
            _creationTime: new Date(Date.now() - 2 * 60 * 60 * 1000) // 2 hours ago
        },
        {
            user: dummyUser,
            description: "deleted a workbook",
            _id: "y",
            _creationTime: new Date(Date.now() - 24 * 60 * 60 * 1000) // 1 day ago
        },
        {
            user: dummyUser,
            description: "created a new section",
            _id: "z",
            _creationTime: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000) // 3 days ago
        },
        {
            user: dummyUser,
            description: "updated workbook settings",
            _id: "a",
            _creationTime: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) // 1 week ago
        }
    ];

    return (
        <div className="p-6">
            <h1 className="text-2xl font-medium tracking-tighter mb-20">Recent Activity</h1>
            
            <div className="flex items-center space-x-4 mb-8">
                <ActivityFeed activities={dummyActivities} />
            </div>
            
        </div>
    );
}
