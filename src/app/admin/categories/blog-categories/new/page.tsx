"use client";
import ComponentCard from "@/components/common/ComponentCard";
import Label from "@/components/form/Label";
import Input from "@/components/form/input/InputField";

export default function CreateBlogCategory() {
  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
      <div className="space-y-6">
        <ComponentCard title="Create Blog Category">
          <div className="space-y-6">
            <div>
              <Label>Name</Label>
              <Input type="text" />
            </div>
            <div>
              <Label>Slug</Label>
              <Input type="text" />
            </div>
          </div>
        </ComponentCard>
      </div>
    </div>
  );
}
