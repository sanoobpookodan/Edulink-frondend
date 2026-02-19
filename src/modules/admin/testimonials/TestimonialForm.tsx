"use client";
import ComponentCard from "@/components/common/ComponentCard";
import Label from "@/components/form/Label";
import Select from "@/components/form/Select";
import TextArea from "@/components/form/input/TextArea";
import Button from "@/components/ui/button/Button";
import { testimonialInitial } from "@/constants";
import Form from "@/components/form/Form";
import { BaseFormProps, Testimonial } from "@/types";

export default function TestimonialForm({
  mode,
  initialData = testimonialInitial,
}: BaseFormProps<Testimonial>) {
  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
      <ComponentCard
        title={mode === "create" ? "Create Testimonial" : "Edit Testimonial"}
      >
        <Form<Testimonial> className="space-y-4" initialData={initialData}>
          {({ form, handleChange }) => {
            return (
              <>
                <div>
                  <Label htmlFor="student">Student</Label>
                  <Select
                    id="student"
                    name="student"
                    value={form.student}
                    onChange={handleChange}
                    placeholder="Select student"
                  />
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <TextArea
                    id="description"
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Enter description"
                  />
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
