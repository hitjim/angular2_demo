import { IProjectHour } from './project-hour'

export interface IProject {
    _id: string;
    project_name: string;
    customer_name: string;
    start_date: Date;
    end_date: Date;
    details: string;
    hours: IProjectHour[]
}