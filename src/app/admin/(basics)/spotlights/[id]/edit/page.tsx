"use client";

import { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Label from "@/components/form/Label";
import Input from "@/components/form/input/InputField";
import TextArea from "@/components/form/input/TextArea";
import Select from "@/components/form/Select";
import FileInput from "@/components/form/input/FileInput";
import { STATUS_OPTIONS } from "@/constants";
import Button from "@/components/ui/button/Button";
import Form from "@/components/form/Form";
import { imageTypes } from "@/constants/fileTypes";

const spotlightInitial = {
  title: "",
  description: "",
  image: "",
  status: "active",
};

export default function EditSpotlight() {
  const [form, setForm] = useState(spotlightInitial);

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
      <ComponentCard title="Edit Spotlight">
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
              <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                {/* @ts-ignore */}
                <ChevronDownIcon />
              </span>
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
