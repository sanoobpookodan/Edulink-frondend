import { PublishStatus } from "./";

export type Blog = {
  title: string;
  slug: string;
  description: string;
  image?: File | string;
  categories: string;
  tags: string[];
  status: PublishStatus;
  content: string;
};
