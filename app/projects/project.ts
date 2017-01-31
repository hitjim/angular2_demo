import { IProjectHour } from './hours/project-hour'

export interface IProject {
    _id: string;
    project_name: string;
    customer_name: string;
    start_date: Date;
    end_date: Date;
    details: string;
    hours: IProjectHour[];
    customer_phone: string;
    customer_email: string;
}