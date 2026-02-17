"use client";
import { ChevronDownIcon } from "@/icons";
import ComponentCard from "@/components/common/ComponentCard";
import Label from "@/components/form/Label";
import TextArea from "@/components/form/input/TextArea";
import Select from "@/components/form/Select";
import Button from "@/components/ui/button/Button";

export default function CreateTestimonial() {
  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
      <div className="space-y-6">
        <ComponentCard title="Create Testimonial">
          <div className="space-y-6">
            <div>
              <Label>Student</Label>
              <div className="relative">
                <Select
                  options={[]}
                  onChange={() => {}}
                  className="dark:bg-dark-900"
                />
                <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                  <ChevronDownIcon />
                </span>
              </div>
            </div>
            <div>
              <Label>Description</Label>
              <TextArea />
            </div>
            <div className="flex items-center gap-5">
              <Button>Submit</Button>
            </div>
          </div>
        </ComponentCard>
      </div>
    </div>
  );
}
