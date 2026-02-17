"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import ComponentCard from "@/components/common/ComponentCard";
import Label from "@/components/form/Label";
import Select from "@/components/form/Select";
import TextArea from "@/components/form/input/TextArea";
import Button from "@/components/ui/button/Button";
import { BLOG_STATUS_OPTIONS, blogInitial } from "@/constants";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import Input from "@/components/form/input/InputField";
import FileInput from "@/components/form/input/FileInput";
import { imageTypes } from "@/constants/fileTypes";

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

  const handleTagsChange = (e) => {
    setForm((prev) => ({
      ...prev,
      tags: e.target.value.split(",").map((tag) => tag.trim()),
    }));
  };

  const handleSelectedChange = (value) => {
    setForm((prev) => ({ ...prev, status: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
    console.log(form);
  };

  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
      <div className="space-y-6">
        <ComponentCard title="Create Blog">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <Label>Title</Label>
              <Input name="title" value={form.title} onChange={handleChange} />
            </div>
            <div>
              <Label>Slug</Label>
              <Input name="slug" value={form.slug} onChange={handleChange} />
            </div>
            <div>
              <Label>Description</Label>
              <TextArea
                name="description"
                value={form.description}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label>Image</Label>
              <FileInput
                name="image"
                value={form.image}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label>Categories</Label>
              <Input
                name="categories"
                value={form.categories}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label>Status</Label>
              <Select
                options={BLOG_STATUS_OPTIONS}
                onChange={handleSelectedChange}
                defaultValue={form.status}
              />
            </div>
            <div>
              <Label>Tags (comma separated)</Label>
              <Input
                name="tags"
                value={form.tags.join(", ")}
                onChange={handleTagsChange}
              />
            </div>
            <div>
              <Label>Content</Label>
              {/* <ReactQuill value={blog.content} onChange={handleContentChange} /> */}
            </div>
            <div className="flex items-center gap-5">
              <Button>Create</Button>
            </div>
          </form>
        </ComponentCard>
      </div>
    </div>
  );
}
