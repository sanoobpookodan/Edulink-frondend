"use client";
export const metadata = {
  title: "Edit Course",
};

import { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Label from "@/components/form/Label";
import Input from "@/components/form/input/InputField";
import FileInput from "@/components/form/input/FileInput";
import Button from "@/components/ui/button/Button";
import Form from "@/components/form/Form";
import { courseInitial } from "@/constants";
import { EditCourseProps } from "@/types";

export default function EditCourse({ params }: EditCourseProps) {
  const [form, setForm] = useState(courseInitial);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      // Optionally validate image type here
      setForm((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
    console.log(form);
  };

  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
      <ComponentCard title={`Edit Course (ID: ${params.id})`}>
        <Form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              value={form.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="slug">Slug</Label>
            <Input
              id="slug"
              name="slug"
              value={form.slug}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              name="description"
              value={form.description}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="duration">Duration</Label>
            <Input
              id="duration"
              name="duration"
              value={form.duration}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="image">Image</Label>
            <FileInput
              id="image"
              name="image"
              onChange={handleChange}
              file={form.image}
            />
          </div>
          <div>
            <Label htmlFor="status">Status</Label>
            <select
              id="status"
              name="status"
              value={form.status}
              onChange={handleChange}
              className="input"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <div>
            <Label htmlFor="content">Content</Label>
            <Input
              id="content"
              name="content"
              value={form.content}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="category">Category</Label>
            <Input
              id="category"
              name="category"
              value={form.category}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="instructor">Instructor</Label>
            <Input
              id="instructor"
              name="instructor"
              value={form.instructor}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center gap-5">
            <Button>Update</Button>
          </div>
        </Form>
      </ComponentCard>
    </div>
  );
}
