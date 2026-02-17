"use client";
import { ChevronDownIcon } from "@/icons";
import ComponentCard from "@/components/common/ComponentCard";
import Label from "@/components/form/Label";
import Input from "@/components/form/input/InputField";
import TextArea from "@/components/form/input/TextArea";
import Select from "@/components/form/Select";
import FileInput from "@/components/form/input/FileInput";
import { STATUS_OPTIONS } from "@/constants/selectOptions";

export default function CreateSpotlight() {
  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
      <div className="space-y-6">
        <ComponentCard title="Create Spotlight">
          <div className="space-y-6">
            <div>
              <Label>Title</Label>
              <Input type="text" />
            </div>
            <div>
              <Label>Description</Label>
              <TextArea />
            </div>
            <div>
              <Label>Image</Label>
              <FileInput />
            </div>
            <div>
              <Label>Status</Label>
              <div className="relative">
                <Select
                  options={STATUS_OPTIONS}
                  onChange={() => {}}
                  className="dark:bg-dark-900"
                  defaultValue={STATUS_OPTIONS[0].value}
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
