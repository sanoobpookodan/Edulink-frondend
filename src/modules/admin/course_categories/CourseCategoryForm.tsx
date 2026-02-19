"use client";
import ComponentCard from "@/components/common/ComponentCard";
import Label from "@/components/form/Label";
import Button from "@/components/ui/button/Button";
import { courseCategoryInitial } from "@/constants";
import Input from "@/components/form/input/InputField";
import FileInput from "@/components/form/input/FileInput";
import Form from "@/components/form/Form";
import { BaseFormProps, CourseCategory } from "@/types";

export default function CourseCategoryForm({
  mode,
  initialData = courseCategoryInitial,
}: BaseFormProps<CourseCategory>) {
  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
      <ComponentCard
        title={
          mode === "create" ? "Create Course Category" : "Edit Course Category"
        }
      >
        <Form<CourseCategory> className="space-y-4" initialData={initialData}>
          {({ form, handleChange }) => {
            return (
              <>
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
