import { ActiveStatus, PublishStatus } from "./";

export interface Spotlight {
  title: string;
  description: string;
  image?: File | string;
  status: ActiveStatus;
}

export interface Blog {
  title: string;
  slug: string;
  description: string;
  image?: File | string;
  categories: string[];
  tags: string[];
  status: PublishStatus;
  content: string;
}
