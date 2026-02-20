import { PublishStatus, SelectOption, PublishStatusLabel } from "@/types";

const STATUS_OPTIONS: SelectOption[] = [
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
];
const GENDER_OPTIONS: SelectOption[] = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];

const BLOG_STATUS_OPTIONS: SelectOption<PublishStatus, PublishStatusLabel>[] = [
  { value: "draft", label: "Draft" },
  { value: "published", label: "Published" },
  { value: "archived", label: "Archived" },
];

export { STATUS_OPTIONS, GENDER_OPTIONS, BLOG_STATUS_OPTIONS };
