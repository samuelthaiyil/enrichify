import { User } from "./user";

type Workbook = {
    name: string;
    _id: string;
    createdBy: User;
    _creationTime: string;
}

export type WorkbookTableRow = {
    contactName: string;
    companyUrl: string;
    workEmail: string;
};