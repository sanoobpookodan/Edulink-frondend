"use client";
import { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Label from "@/components/form/Label";
import Select from "@/components/form/Select";
import TextArea from "@/components/form/input/TextArea";
import Button from "@/components/ui/button/Button";
import { BLOG_STATUS_OPTIONS, blogInitial } from "@/constants";

import Input from "@/components/form/input/InputField";
import FileInput from "@/components/form/input/FileInput";
import { imageTypes } from "@/constants/fileTypes";
import RichTextEditor from "@/components/form/input/RichTextEditor";
import Form from "@/components/form/Form";
import { ChevronDownIcon } from "@/icons";
import MultiSelect from "@/components/form/MultiSelect";

export default function BlogCreatePage() {
  const [form, setForm] = useState(blogInitial);

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

  const handleSelectedChange = (name: string, values: string[]) => {
    setForm((prev) => ({ ...prev, [name]: values }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
    console.log(form);
  };

  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
      <ComponentCard title="Create Blog">
        <Form onSubmit={handleSubmit} className="space-y-4">
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
            <TextArea
              id="description"
              name="description"
              value={form.description}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="image">Image</Label>
            <FileInput id="image" name="image" onChange={handleChange} />
          </div>

          <div className="relative">
            <Label>Categories</Label>
            <MultiSelect name="categories" onChange={handleSelectedChange} />
          </div>

          <div className="relative">
            <Label>Tags</Label>
            <MultiSelect
              name="tags"
              onChange={handleSelectedChange}
              placeholder="Select tags"
            />
          </div>

          <div>
            <Label htmlFor="content">Content</Label>
            <RichTextEditor
              id="content"
              name={"content"}
              onChange={(value) =>
                setForm((prev) => ({ ...prev, content: value }))
              }
            />
          </div>
          <div>
            <Label htmlFor="status">Status</Label>
            <Select
              id="status"
              options={BLOG_STATUS_OPTIONS}
              onChange={handleChange}
              name="status"
              value={form.status}
              placeholder="Select status"
            />
          </div>
          <div className="flex items-center gap-5">
            <Button>Create</Button>
          </div>
        </Form>
      </ComponentCard>
    </div>
  );
}
