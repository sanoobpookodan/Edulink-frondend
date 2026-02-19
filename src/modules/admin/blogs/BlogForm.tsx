"use client";
import ComponentCard from "@/components/common/ComponentCard";
import Label from "@/components/form/Label";
import Select from "@/components/form/Select";
import TextArea from "@/components/form/input/TextArea";
import Button from "@/components/ui/button/Button";
import { BLOG_STATUS_OPTIONS, blogInitial } from "@/constants";
import Input from "@/components/form/input/InputField";
import FileInput from "@/components/form/input/FileInput";
import RichTextEditor from "@/components/form/input/RichTextEditor";
import Form from "@/components/form/Form";
import { ChevronDownIcon } from "@/icons";
import MultiSelect from "@/components/form/MultiSelect";
import { BaseFormProps, Blog } from "@/types";

export default function BlogForm({
  mode,
  initialData = blogInitial,
}: BaseFormProps<Blog>) {
  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
      <ComponentCard title={mode === "create" ? "Create Blog" : "Edit Blog"}>
        <Form<Blog> className="space-y-4" initialData={initialData}>
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
                    placeholder="Enter blog title"
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
                    placeholder="Enter blog description"
                  />
                </div>
                <div>
                  <Label htmlFor="image">Image</Label>
                  <FileInput
                    id="image"
                    name="image"
                    onChange={handleChange}
                    placeholder="Select an image"
                    file={form.image}
                  />
                </div>

                <div className="relative">
                  <Label>Categories</Label>
                  <MultiSelect
                    name="categories"
                    onChange={handleChange}
                    options={BLOG_STATUS_OPTIONS}
                    placeholder="Select categories"
                  />
                </div>

                <div className="relative">
                  <Label>Tags</Label>
                  <MultiSelect
                    name="tags"
                    onChange={handleChange}
                    placeholder="Select tags"
                  />
                </div>

                <div>
                  <Label htmlFor="content">Content</Label>
                  <RichTextEditor
                    id="content"
                    name={"content"}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="status">Status</Label>
                  <div className="relative">
                    <Select
                      id="status"
                      options={BLOG_STATUS_OPTIONS}
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
