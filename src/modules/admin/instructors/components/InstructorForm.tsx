"use client";
import ComponentCard from "@/components/common/ComponentCard";
import Label from "@/components/form/Label";
import Input from "@/components/form/input/InputField";
import TextArea from "@/components/form/input/TextArea";
import Select from "@/components/form/Select";
import FileInput from "@/components/form/input/FileInput";
import { instructorInitial, STATUS_OPTIONS } from "@/constants";
import Button from "@/components/ui/button/Button";
import Form from "@/components/form/Form";
import { BaseFormProps, CreateInstructorForm } from "@/types";

export default function InstructorForm({
  mode,
  initialData = instructorInitial,
}: BaseFormProps<CreateInstructorForm>) {
  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
      <ComponentCard
        title={mode === "create" ? "Create Instructor" : "Edit Instructor"}
      >
        <Form<CreateInstructorForm>
          className="space-y-6"
          initialData={initialData}
        >
          {({ form, handleChange }) => {
            return (
              <>
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="Enter first name"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Enter last name"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                  />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Enter password"
                  />
                </div>
                <div>
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    placeholder="Re-Enter password"
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
                <div>
                  <Label htmlFor="bio">Bio</Label>
                  <TextArea
                    id="bio"
                    onChange={handleChange}
                    name="bio"
                    value={form.bio}
                    placeholder="Enter bio"
                  />
                </div>
                <div className="flex items-center gap-5">
                  <Button>Submit</Button>
                </div>
              </>
            );
          }}
        </Form>
      </ComponentCard>
    </div>
  );
}
