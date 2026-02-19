"use client";

import { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Label from "@/components/form/Label";
import Input from "@/components/form/input/InputField";
import TextArea from "@/components/form/input/TextArea";
import Select from "@/components/form/Select";
import FileInput from "@/components/form/input/FileInput";
import { STATUS_OPTIONS, aboutInitial } from "@/constants";
import Button from "@/components/ui/button/Button";
import Form from "@/components/form/Form";
import { About, BaseFormProps } from "@/types";
import { ChevronDownIcon } from "@/icons";

export const metadata = {
  title: "Create About",
};

export default function AboutForm({
  mode,
  initialData = aboutInitial,
}: BaseFormProps<About>) {
  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
      <ComponentCard title={mode === "edit" ? "Edit About" : "Create About"}>
        <Form<About> className="space-y-4" initialData={initialData}>
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
                  <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                    {/* @ts-ignore */}
                    <ChevronDownIcon />
                  </span>
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
