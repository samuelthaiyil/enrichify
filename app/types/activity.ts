import { User } from "./user";

export type Activity = {
    _id: string;
    user: User;
    description: string;
    _creationTime: string | Date;
    _workbookId: string;
}