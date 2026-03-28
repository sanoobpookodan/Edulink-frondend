"use client";
import ComponentCard from "@/components/common/ComponentCard";
import Label from "@/components/form/Label";
import Select from "@/components/form/Select";
import TextArea from "@/components/form/input/TextArea";
import Button from "@/components/ui/button/Button";
import {
  BLOG_STATUS_OPTIONS,
  courseInitial,
  STATUS_OPTIONS,
} from "@/constants";
import Input from "@/components/form/input/InputField";
import FileInput from "@/components/form/input/FileInput";
import RichTextEditor from "@/components/form/input/RichTextEditor";
import Form from "@/components/form/Form";
import { ChevronDownIcon } from "@/icons";
import MultiSelect from "@/components/form/MultiSelect";
import { BaseFormProps, Blog, Course } from "@/types";

export default function CourseForm({
  mode,
  initialData = courseInitial,
}: BaseFormProps<Course>) {
  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
      <ComponentCard
        title={mode === "create" ? "Create Course" : "Edit Course"}
      >
        <Form<Course> className="space-y-4" initialData={initialData}>
          {({ form, handleChange }) => {
            return (
              <>
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    placeholder="Enter course title"
                  />
                </div>
                <div>
                  <Label htmlFor="slug">Slug</Label>
                  <Input
                    id="slug"
                    name="slug"
                    value={form.slug}
                    onChange={handleChange}
                    placeholder="Enter course slug"
                  />
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <TextArea
                    id="description"
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Enter course description"
                  />
                </div>

                <div>
                  <Label htmlFor="image">Image</Label>
                  <FileInput
                    id="image"
                    name="image"
                    onChange={handleChange}
                    file={form.image}
                    placeholder="Upload course image"
                  />
                </div>
                <div>
                  <Label htmlFor="instructor">Instructor</Label>
                  <div className="relative">
                    <Select
                      id="instructor"
                      name="instructor"
                      value={form.instructor}
                      onChange={handleChange}
                      placeholder="Enter course instructor"
                    />
                    <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                      {/* @ts-ignore */}
                      <ChevronDownIcon />
                    </span>
                  </div>
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <div className="relative">
                    <Select
                      id="category"
                      name="category"
                      value={form.category}
                      onChange={handleChange}
                      placeholder="Enter course category"
                    />
                    <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                      {/* @ts-ignore */}
                      <ChevronDownIcon />
                    </span>
                  </div>
                </div>
                <div>
                  <Label htmlFor="content">Content</Label>
                  <RichTextEditor
                    id="content"
                    name={"content"}
                    onChange={handleChange}
                    value={form.content}
                  />
                </div>
                <div>
                  <Label htmlFor="duration">Duration</Label>
                  <Input
                    id="duration"
                    name="duration"
                    value={form.duration}
                    onChange={handleChange}
                    placeholder="Calculated from curriculum"
                    disabled
                  />
                </div>
                <div className="flex items-center gap-5">
                  <Button>{mode === "create" ? "Create" : "Update"}</Button>
                </div>
              </>
            );
          }}
        </Form>
      </ComponentCard>
    </div>
  );
}
