"use client";
import { ChevronDownIcon } from "@/icons";
import ComponentCard from "@/components/common/ComponentCard";
import Label from "@/components/form/Label";
import Input from "@/components/form/input/InputField";
import FileInput from "@/components/form/input/FileInput";
import TextArea from "@/components/form/input/TextArea";
import Select from "@/components/form/Select";

export default function CreateCourseCategory() {
  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
      <div className="space-y-6">
        <ComponentCard title="Create Course Category">
          <div className="space-y-6">
            <div>
              <Label>Name</Label>
              <Input type="text" />
            </div>
            <div>
              <Label>Slug</Label>
              <Input type="text" />
            </div>
            <div>
              <Label>Image</Label>
              <FileInput />
            </div>
            <div>
              <Label>Category</Label>
              <div className="relative">
                <Select
                  options={[]}
                  onChange={() => {}}
                  className="dark:bg-dark-900"
                />
                <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                  {/* @ts-ignore */}
                  <ChevronDownIcon />
                </span>
              </div>
            </div>
          </div>
        </ComponentCard>
      </div>
    </div>
  );
}
