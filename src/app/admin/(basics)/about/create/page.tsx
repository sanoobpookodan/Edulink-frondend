export const metadata = {
  title: "Create About",
};
("use client");

import { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Label from "@/components/form/Label";
import Input from "@/components/form/input/InputField";
import TextArea from "@/components/form/input/TextArea";
import Select from "@/components/form/Select";
import FileInput from "@/components/form/input/FileInput";
import { STATUS_OPTIONS, aboutInitial } from "@/constants";
import { slugify } from "@/lib/form";
import Button from "@/components/ui/button/Button";
import Form from "@/components/form/Form";
import { imageTypes } from "@/constants/fileTypes";

export default function CreateAbout() {
  const [form, setForm] = useState(aboutInitial);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      if (!imageTypes.includes(files[0].type)) {
        setForm((prev) => ({ ...prev, [name]: files[0] }));
      } else {
        alert("Please select a valid image file (jpg, png, jpeg)");
      }
    } else {
      if (name === "title") {
        setForm((prev) => ({ ...prev, title: value, slug: slugify(value) }));
      } else {
        setForm((prev) => ({ ...prev, [name]: value }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
    console.log(form);
  };

  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
      <ComponentCard title="Create About">
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
          <div>
            <Label htmlFor="status">Status</Label>
            <div className="relative">
              <Select
                id="status"
                options={STATUS_OPTIONS}
                onChange={handleChange}
                name="status"
                value={form.status}
                placeholder="Select status"
              />
            </div>
          </div>
          <div className="flex items-center gap-5">
            <Button>Submit</Button>
          </div>
        </Form>
      </ComponentCard>
    </div>
  );
}
