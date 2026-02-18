import { PublishStatus } from "./";

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
