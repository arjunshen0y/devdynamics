import axios,{AxiosResponse} from 'axios'

export interface SampleData {
    data: Data;
}

export interface Data {
    AuthorWorklog: AuthorWorklog;
}

export interface AuthorWorklog {
    activityMeta: ActivityMeta[];
    rows:         Row[];
}

export interface ActivityMeta {
    label:     Label;
    fillColor: FillColor;
}

export enum FillColor {
    C2528B = "#C2528B",
    Ef6B6B = "#EF6B6B",
    Fac76E = "#FAC76E",
    The0396A6 = "#0396A6",
    The5F50A9 = "#5F50A9",
    The61Cdbb = "#61CDBB",
    The8F3519 = "#8F3519",
}

export enum Label {
    Commits = "Commits",
    IncidentAlerts = "Incident Alerts",
    IncidentsResolved = "Incidents Resolved",
    PRComments = "PR Comments",
    PRMerged = "PR Merged",
    PROpen = "PR Open",
    PRReviewed = "PR Reviewed",
}

export interface Row {
    name:            string;
    totalActivity:   TotalActivity[];
    dayWiseActivity: DayWiseActivity[];
    activeDays:      ActiveDays;
}

export interface ActiveDays {
    days:      number;
    isBurnOut: boolean;
    insight:   string[];
}

export interface DayWiseActivity {
    date:  string;
    items: Items;
}

export interface Items {
    children: Child[];
}

export interface Child {
    count:     string;
    label:    string;
    fillColor: string;
}

export interface TotalActivity {
    name:  string;
    value: number;
}

export const getDevDatafromApi = async ():Promise<AxiosResponse<SampleData>> => {
    const url = "./sample-data.json";//Fetch URL. Research Const, Let, Var
    return axios.get<SampleData>(url);
} 