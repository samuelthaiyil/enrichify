
import { ActivityFeed } from "@/components/activityfeed";

export default function HomePage() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-medium tracking-tighter mb-20">Recent Activity</h1>
            
            <div className="flex items-center space-x-4 mb-8">
                <ActivityFeed />
            </div>
            
        </div>
    );
}
