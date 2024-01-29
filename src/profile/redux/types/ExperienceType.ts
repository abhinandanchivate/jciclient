export interface ExperienceType {
  _id?: string;
  jobTitle: string;
  company: string;
  location: string;
  from: Date;
  to?: Date;
  description?: string;
  current?: boolean;
}
