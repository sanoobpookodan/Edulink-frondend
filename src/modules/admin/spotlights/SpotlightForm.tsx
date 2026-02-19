"use client";
import ComponentCard from "@/components/common/ComponentCard";
import Label from "@/components/form/Label";
import Input from "@/components/form/input/InputField";
import TextArea from "@/components/form/input/TextArea";
import Select from "@/components/form/Select";
import FileInput from "@/components/form/input/FileInput";
import { spotlightInitial, STATUS_OPTIONS } from "@/constants";
import Button from "@/components/ui/button/Button";
import Form from "@/components/form/Form";
import { BaseFormProps, Spotlight } from "@/types";

export default function SpotlightForm({
  mode,
  initialData = spotlightInitial,
}: BaseFormProps<Spotlight>) {
  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
      <ComponentCard
        title={mode === "create" ? "Create Spotlight" : "Edit Spotlight"}
      >
        <Form<Spotlight> className="space-y-6" initialData={initialData}>
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
                    placeholder="Enter title"
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
                  <Label htmlFor="status">Status</Label>
                  <Select
                    id="status"
                    options={STATUS_OPTIONS}
                    onChange={handleChange}
                    name="status"
                    value={form.status}
                    placeholder="Select status"
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
