"use client";

import { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Label from "@/components/form/Label";
import Input from "@/components/form/input/InputField";
import FileInput from "@/components/form/input/FileInput";
import { courseCategoryInitial } from "@/constants";
import Button from "@/components/ui/button/Button";
import Form from "@/components/form/Form";
import { imageTypes } from "@/constants/fileTypes";

export default function CreateCourseCategory() {
  const [form, setForm] = useState(courseCategoryInitial);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      if (!imageTypes.includes(files[0].type)) {
        setForm((prev) => ({ ...prev, [name]: files[0] }));
      } else {
        alert("Please select a valid image file (jpg, png, jpeg)");
      }
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
      <ComponentCard title="Create Course Category">
        <Form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={form.name}
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
            <Label htmlFor="image">Image</Label>
            <FileInput id="image" name="image" onChange={handleChange} />
          </div>
          <div className="flex items-center gap-5">
            <Button>Submit</Button>
          </div>
        </Form>
      </ComponentCard>
    </div>
  );
}
