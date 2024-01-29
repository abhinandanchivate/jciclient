export interface EducationType {
  _id?: string;
  school: string;
  degree: string;
  fieldOfStudy: string;
  from: Date;
  to?: Date;
  description: string;
  current?: boolean;
}
