import { EducationType } from "./EducationType";
import { ExperienceType } from "./ExperienceType";

export interface ProfileType {
  _id?: string;
  user?: {
    _id: string;
    name: string;
    avatar: string;
  };
  bio?: string;
  githubusername?: string;
  company?: string;
  website?: string;
  location?: string;
  status?: string;
  skills: string[];
  social?: {
    twitter?: string;
    linkedIn?: string;
    youtube?: string;
    facebook?: string;
  };
  experience?: ExperienceType[];
  education?: EducationType[];
}
