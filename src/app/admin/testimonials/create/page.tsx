"use client";

import { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Label from "@/components/form/Label";
import TextArea from "@/components/form/input/TextArea";
import Select from "@/components/form/Select";
import Button from "@/components/ui/button/Button";
import Form from "@/components/form/Form";
import { testimonialInitial } from "@/constants";

// TODO: Replace with real student options
const studentOptions = [
  { value: "student1", label: "Student 1" },
  { value: "student2", label: "Student 2" },
];

export default function CreateTestimonial() {
  const [form, setForm] = useState(testimonialInitial);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
    console.log(form);
  };

  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
      <ComponentCard title="Create Testimonial">
        <Form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="student">Student</Label>
            <Select
              id="student"
              name="student"
              options={studentOptions}
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
            />
          </div>
          <div className="flex items-center gap-5">
            <Button>Submit</Button>
          </div>
        </Form>
      </ComponentCard>
    </div>
  );
}
