"use client";
import ComponentCard from "@/components/common/ComponentCard";
import Label from "@/components/form/Label";
import Select from "@/components/form/Select";
import Button from "@/components/ui/button/Button";
import Input from "@/components/form/input/InputField";
import FileInput from "@/components/form/input/FileInput";
import RichTextEditor from "@/components/form/input/RichTextEditor";
import Form from "@/components/form/Form";
import { BaseFormProps, SelectOption } from "@/types";
import { z } from "zod";
import { showError, showSuccess } from "@/utils/toast";
import { navigate } from "@/utils/navigation";
import { createCourse, getCourseDetail, updateCourse } from "../service/courses.service";
import { useEffect, useState } from "react";
import { generateListData, isRichTextEmpty, toFormData, toSlug } from "@/utils/helpers";
import { getInstructors } from "../../instructors/service/instructor.service";
import { getCourseCategories } from "../../course_categories/service/course_category.service";
import { useParams } from "next/navigation";
import { Course } from "../types/courses.type";

// Validation schema
const schema = z.object({
  title: z.string().nonempty("Title is required"),
  slug: z.string().optional(),
  image: z.union([z.string().min(1, "Image is required"), z.instanceof(File)]),
  content: z.string().refine((val) => !isRichTextEmpty(val), {
    message: "Content is required",
  }),
  categoryId: z.string().nonempty("Category is required"),
  instructorId: z.string().nonempty("Instructor is required"),
});

const courseInitial: Course = {
  id: "",
  title: "",
  slug: "",
  image: "",
  content: "",
  categoryId: "",
  instructorId: "",
  status: "",
};

export type CourseForm = z.infer<typeof schema>;

export default function CourseForm({ mode }: BaseFormProps<CourseForm>) {
  const params = useParams();
  const [initialData, setInitialData] = useState<Course>(courseInitial);

  const [options, setOptions] = useState({
    instructors: [] as SelectOption[],
    categories: [] as SelectOption[],
  });

  const getData = async () => {
    const result = await Promise.allSettled([getInstructors(), getCourseCategories()]);
    const instructors = result[0].status === "fulfilled" ? result[0].value.data : [];
    const categories = result[1].status === "fulfilled" ? result[1].value.data : [];

    const instructorOptions = generateListData(instructors, "firstName");
    const categoryOptions = generateListData(categories, "name");
    setOptions({
      instructors: instructorOptions,
      categories: categoryOptions,
    });
  };

  useEffect(() => {
    getData();
  }, [mode]);

  const getCourseData = async () => {
    const response = await getCourseDetail(params?.id as string);
    try {
      if (response.status) {
        setInitialData(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCourseData();
  }, [params?.id]);

  const onSubmit = async (postData: CourseForm) => {
    const formData = toFormData(postData);
    if (mode === "create") {
      const { status, message, data, errors } = await createCourse(formData);

      if (status) {
        showSuccess(message);
        navigate(`/admin/courses/${data.id}`);
      } else {
        if (errors) {
          showError(errors[0].message);
        } else {
          showError(message);
        }
      }
    } else {
      // const { status, message, data, errors } = await updateCourse(initialData.id, formData);
      // if (status) {
      //   showSuccess(message);
      //   navigate(`/admin/courses/${data.id}`);
      // } else {
      //   showError(message);
      // }
    }
  };

  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
      <ComponentCard title={mode === "create" ? "Create Course" : "Edit Course"}>
        <Form<CourseForm> onSubmit={onSubmit} initialData={initialData} schema={schema}>
          {({ field, form, setFieldValue, errors }) => {
            console.log(form, "===");

            useEffect(() => {
              if (form.title) {
                setFieldValue("slug", toSlug(form.title));
              }
            }, [form.title]);
            return (
              <>
                <div>
                  <Label htmlFor="title">
                    Title<span className="text-error-500">*</span>
                  </Label>
                  <Input placeholder="Enter course title" {...field("title")} />
                </div>
                <div>
                  <Label htmlFor="slug">
                    Slug <span className="text-error-500">*</span>
                  </Label>
                  <Input placeholder="Enter course slug" {...field("slug")} />
                </div>
                <div>
                  <Label htmlFor="image">
                    Image<span className="text-error-500">*</span>
                  </Label>
                  <FileInput {...field("image")} placeholder="Upload course image" />
                </div>
                <div>
                  <Label htmlFor="instructor">
                    Instructor<span className="text-error-400">*</span>
                  </Label>
                  <div className="relative">
                    <Select
                      placeholder="Select a course instructor"
                      {...field("instructorId")}
                      options={options.instructors}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="category">
                    Category<span className="text-error-400">*</span>
                  </Label>
                  <Select
                    placeholder="Select a course category"
                    options={options.categories}
                    {...field("categoryId")}
                  />
                </div>
                <div>
                  <Label htmlFor="content">
                    Content<span className="text-error-400">*</span>
                  </Label>
                  <RichTextEditor {...field("content")} />
                </div>
                <div className="flex items-center gap-5">
                  <Button type="submit">{mode === "create" ? "Create" : "Update"}</Button>
                </div>
              </>
            );
          }}
        </Form>
      </ComponentCard>
    </div>
  );
}
