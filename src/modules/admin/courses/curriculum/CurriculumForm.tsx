"use client";
import ComponentCard from "@/components/common/ComponentCard";
import Label from "@/components/form/Label";
import Select from "@/components/form/Select";
import TextArea from "@/components/form/input/TextArea";
import Button from "@/components/ui/button/Button";
import {
  BLOG_STATUS_OPTIONS,
  courseInitial,
  curriculumInitial,
  overviewInitial,
  STATUS_OPTIONS,
} from "@/constants";
import Input from "@/components/form/input/InputField";
import FileInput from "@/components/form/input/FileInput";
import RichTextEditor from "@/components/form/input/RichTextEditor";
import Form from "@/components/form/Form";
import { ChevronDownIcon } from "@/icons";
import MultiSelect from "@/components/form/MultiSelect";
import { BaseFormProps, Curriculum, Lesson } from "@/types";
import { useFieldArray } from "@/hooks/useFieldArray";

interface CurriculumFormProps {
  curriculum: Curriculum[];
  overview: string[];
}
export default function CurriculumForm({
  mode,
  initialData = { curriculum: curriculumInitial, overview: overviewInitial },
}: BaseFormProps<CurriculumFormProps>) {
  let title = mode === "create" ? "Create Curriculum" : "Edit Curriculum";
  let curriculum_title =
    mode === "create" ? "Create Chapters" : "Edit Chapters";
  let overview_title =
    mode === "create" ? "Create Overviews" : "Edit Overviews";

  const curriculum = useFieldArray<Curriculum>(initialData.curriculum);
  const overview = useFieldArray<string>(initialData.overview);

  // lesson crud functions
  const addLesson = (sectionIndex: number) => {
    const updated = curriculum.items.map((chapter, cIndex) => {
      if (cIndex !== sectionIndex) return chapter;
      return {
        ...chapter,
        lessons: [
          ...chapter.lessons,
          {
            title: "",
            duration: "",
            video_url: "",
          },
        ],
      };
    });
    curriculum.setItems(updated);
  };

  const updateLesson = (
    sectionIndex: number,
    lessonIndex: number,
    field: keyof Lesson,
    value: string,
  ) => {
    const updated = curriculum.items.map((chapter, cIndex) => {
      if (cIndex !== sectionIndex) return chapter;

      return {
        ...chapter,
        lessons: chapter.lessons.map((lesson, lIndex) => {
          if (lIndex !== lessonIndex) return lesson;
          return {
            ...lesson,
            [field]: value,
          };
        }),
      };
    });
    curriculum.setItems(updated);
  };

  const removeLesson = (sectionIndex: number, lessonIndex: number) => {
    const updated = [...curriculum.items];
    updated[sectionIndex].lessons = updated[sectionIndex].lessons.filter(
      (_, i) => i !== lessonIndex,
    );
    curriculum.setItems(updated);
  };

  // overview crud functions
  const updateOverview = (index: number, value: string) => {
    const updated = overview.items.map((item, i) =>
      i === index ? value : item,
    );
    overview.setItems(updated);
  };

  const removeOverview = (index: number) => {
    const updated = overview.items.filter((_, i) => i !== index);
    overview.setItems(updated);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
      <ComponentCard className="xl:col-span-2 sm:col-span-3" title={title}>
        <ComponentCard childClassName="space-y-1" title={curriculum_title}>
          {curriculum.items.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-3">
              <div className="grid grid-cols-2   gap-5 items-end">
                <div className="xl:col-span-1 sm:col-span-1">
                  <Label>Chapter -{sectionIndex + 1} Title</Label>
                  <Input
                    placeholder="Enter chapter title"
                    value={section.title}
                    onChange={(e) =>
                      curriculum.update(sectionIndex, {
                        title: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="xl:col-span-1 items-end">
                  <Button onClick={() => curriculum.remove(sectionIndex)}>
                    Remove
                  </Button>
                </div>
              </div>
              {section.lessons.map((lesson, lessonIndex) => (
                <div
                  className="grid grid-cols-3    gap-2 ps-5"
                  key={lessonIndex}
                >
                  <div className="xl:col-span-1 ">
                    <div>
                      <Label>Lesson -{lessonIndex + 1} Title</Label>
                      <Input
                        placeholder="Enter lesson title"
                        value={lesson.title}
                        onChange={(e) =>
                          updateLesson(
                            sectionIndex,
                            lessonIndex,
                            "title",
                            e.target.value,
                          )
                        }
                      />
                    </div>
                  </div>
                  <div className="xl:col-span-1 ">
                    <div>
                      <Label>Video URL</Label>
                      <Input
                        placeholder="Enter lesson video URL"
                        value={lesson.video_url}
                        onChange={(e) =>
                          updateLesson(
                            sectionIndex,
                            lessonIndex,
                            "video_url",
                            e.target.value,
                          )
                        }
                      />
                    </div>
                  </div>
                  <div className="xl:col-span-1 flex items-end gap-2">
                    <div key={lessonIndex} className="">
                      <Label>Duration</Label>
                      <Input
                        placeholder="Enter lesson duration"
                        value={lesson.duration}
                        onChange={(e) =>
                          updateLesson(
                            sectionIndex,
                            lessonIndex,
                            "duration",
                            e.target.value,
                          )
                        }
                      />
                    </div>
                    <Button
                      onClick={() => removeLesson(sectionIndex, lessonIndex)}
                    >
                      -
                    </Button>
                  </div>
                </div>
              ))}
              <div className="flex items-end  justify-end">
                <Button onClick={() => addLesson(sectionIndex)}>+</Button>
              </div>
            </div>
          ))}
          <div className="flex items-end  justify-start">
            <Button onClick={() => curriculum.add(curriculumInitial[0])}>
              Add Chapter
            </Button>
          </div>
        </ComponentCard>
        <ComponentCard title={overview_title}>
          {overview.items.map((item, index) => (
            <div key={index} className="space-y-3">
              <div className="grid grid-cols-2   gap-5 items-end">
                <div className="xl:col-span-1 sm:col-span-1">
                  <Label>Overview -{index + 1} Title</Label>
                  <Input
                    placeholder="Enter overview title"
                    value={item}
                    onChange={(e) => updateOverview(index, e.target.value)}
                  />
                </div>
                <div className="xl:col-span-1 items-end">
                  <Button onClick={() => removeOverview(index)}>Remove</Button>
                </div>
              </div>
            </div>
          ))}
          <div className="flex items-end  justify-start">
            <Button onClick={() => overview.add(overviewInitial[0])}>
              Add Overview
            </Button>
          </div>
        </ComponentCard>
        <div className="flex items-center gap-5">
          <Button>
            {mode === "create" ? "Create Curriculum" : "Update Curriculum"}
          </Button>
        </div>
      </ComponentCard>
    </div>
  );
}
