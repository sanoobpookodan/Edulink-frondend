"use client";
import ComponentCard from "@/components/common/ComponentCard";
import Label from "@/components/form/Label";
import Input from "@/components/form/input/InputField";
import { blogCategoryInitial } from "@/constants";
import Button from "@/components/ui/button/Button";
import Form from "@/components/form/Form";
import { BaseFormProps, BlogCategory } from "@/types";

export default function BlogCategoryForm({
  mode,
  initialData = blogCategoryInitial,
}: BaseFormProps<BlogCategory>) {
  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
      <ComponentCard
        title={
          mode === "create" ? "Create Blog Category" : "Edit Blog Category"
        }
      >
        <Form<BlogCategory> initialData={initialData} className="space-y-6">
          {({ form, handleChange }) => (
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
              <div className="flex items-center gap-5">
                <Button>Submit</Button>
              </div>
            </>
          )}
        </Form>
      </ComponentCard>
    </div>
  );
}
