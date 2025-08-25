import { User } from "./user";

export type Activity = {
    _id: string;
    userId: string;
    description: string;
    _creationTime: string | Date;
    _workbookId: string;
}