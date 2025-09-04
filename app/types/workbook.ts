import { User } from "./user";

type Workbook = {
    name: string;
    _id: string;
    createdBy: User;
    _creationTime: string;
}

export type WorkbookTableRow = {
    name: string;
    email: string;
};