"use client";
import ComponentCard from "@/components/common/ComponentCard";
import Label from "@/components/form/Label";
import Select from "@/components/form/Select";
import Button from "@/components/ui/button/Button";
import { courseInitial } from "@/constants";
import Input from "@/components/form/input/InputField";
import FileInput from "@/components/form/input/FileInput";
import RichTextEditor from "@/components/form/input/RichTextEditor";
import Form from "@/components/form/Form";
import { BaseFormProps, Course } from "@/types";
import { z } from "zod";
import { showError, showSuccess } from "@/utils/toast";
import { navigate } from "@/utils/navigation";
import { createCourse } from "../service/courses.service";
import { useEffect } from "react";
import { isRichTextEmpty, toSlug } from "@/utils/helpers";

export default function CourseForm({ mode, initialData = courseInitial }: BaseFormProps<Course>) {
  // Validation schema

  const schema = z.object({
    title: z.string().nonempty("Title is required"),
    slug: z.string().optional(),
    image: z.union([z.string().min(1, "Image is required"), z.instanceof(File)]),
    content: z.string().refine((val) => !isRichTextEmpty(val), {
      message: "Content is required",
    }),
    category: z.string().nonempty("Category is required"),
    instructor: z.string().nonempty("Instructor is required"),
  });

  type CourseForm = z.infer<typeof schema>;

  const onSubmit = async (formData) => {
    const { status, message, data } = await createCourse(formData);
    if (status) {
      showSuccess(message);
      navigate(`courses/${data.id}`);
    } else {
      showError(message);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
      <ComponentCard title={mode === "create" ? "Create Course" : "Edit Course"}>
        <Form<CourseForm> onSubmit={onSubmit} initialData={initialData} schema={schema}>
          {({ field, form, setFieldValue, errors }) => {
            useEffect(() => {
              if (form.title) {
                setFieldValue("slug", toSlug(form.title));
              }
            }, [form.title]);
            return (
              <>
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input placeholder="Enter course title" {...field("title")} />
                </div>
                <div>
                  <Label htmlFor="slug">Slug</Label>
                  <Input placeholder="Enter course slug" {...field("slug")} />
                </div>
                <div>
                  <Label htmlFor="image">Image</Label>
                  <FileInput {...field("image")} placeholder="Upload course image" />
                </div>
                <div>
                  <Label htmlFor="instructor">Instructor</Label>
                  <div className="relative">
                    <Select placeholder="Enter course instructor" {...field("instructor")} />
                  </div>
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select placeholder="Enter course category" {...field("category")} />
                </div>
                <div>
                  <Label htmlFor="content">Content</Label>
                  <RichTextEditor {...field("content")} />
                </div>
                <div className="flex items-center gap-5">
                  <Button type="submit">{mode === "create" ? "Create" : "Update"}</Button>
                </div>
              </>
            );
          }}
        </Form>
      </ComponentCard>
    </div>
  );
}
