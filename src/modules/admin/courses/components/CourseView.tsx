"use client";

import React, { useEffect, useState } from "react";
import { getCourseDetail } from "../service/courses.service";
import { Course, CurriculumModule, OverviewPoint } from "../types/courses.type";
import { IMAGE_URL } from "@/constants/data";
import Loader from "@/components/common/Loader";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import Badge from "@/components/ui/badge/Badge";
import ComponentCard from "@/components/common/ComponentCard";

export default function CourseView({ id }: { id: string }) {
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);
        const res = await getCourseDetail(id);
        if (res.status && res.data) {
          setCourse(res.data);
        } else {
          setError(res.message || "Failed to fetch course detail.");
        }
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[50vh] p-8">
        <div className="bg-red-50 text-red-600 p-4 rounded-lg shadow-sm border border-red-100 max-w-lg text-center">
          <svg
            className="w-8 h-8 mx-auto mb-2 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <h3 className="font-semibold text-lg mb-1">Error</h3>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!course) {
    return <div className="p-8 text-center text-gray-500 text-lg">Course not found.</div>;
  }

  const fields = [
    { label: "Course Name", value: course.title },
    { label: "Slug", value: course.slug },
    { label: "Category", value: course.category },
    { label: "Duration", value: course.duration },
    { label: "Instructor", value: course.instructor },
    { label: "Status", value: course.status },
    { label: "Create Date", value: course.createdAt },
    { label: "Update Date", value: course.updatedAt },
    { label: "Image", value: course.image },
  ];

  return (
    <div className="space-y-6">
      <PageBreadcrumb pageTitle="Course Details" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
        <ComponentCard>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32 ">
            {fields.map((item, index) =>
              item.label === "Image" ? (
                <div key={index}>
                  <div className="flex items-center gap-3">
                    <div className="overflow-hidden rounded-md">
                      <img
                        src={IMAGE_URL + course.image}
                        className="h-full w-full object-cover"
                        alt={course.title}
                      />
                    </div>
                  </div>
                </div>
              ) : item.label === "Status" ? (
                <div key={index}>
                  <p className="mb-2  text-gray-500 dark:text-gray-400">{item.label}</p>
                  <Badge size="sm" color={course.status === "ACTIVE" ? "success" : "warning"}>
                    {course.status}
                  </Badge>
                </div>
              ) : (
                <div key={index}>
                  <p className="mb-2  text-gray-500 dark:text-gray-400">{item.label}</p>
                  <p className="text-sm  text-gray-800 dark:text-white/90">{item.value}</p>
                </div>
              ),
            )}
          </div>
        </ComponentCard>
        {course.overview.length > 0 && (
          <ComponentCard title="What Will You Learn">
            <div className="grid grid-cols-1 gap-4  ">
              {course.overview.map((item, index) => (
                <div key={item.id}>
                  <p className="text-gray-800 dark:text-white/90">
                    {index + 1}. {item.title}
                  </p>
                </div>
              ))}
            </div>
          </ComponentCard>
        )}

        {course.curriculum.length > 0 && (
          <ComponentCard title="Curriculum">
            <div className="grid grid-cols-1 gap-4  ">
              {course.curriculum.map((curriculum, index) => (
                <ComponentCard title={curriculum.title}>
                  {curriculum.lessons.map((lesson, index) => (
                    <div key={index}>
                      <p className="mb-2 text-gray-800 dark:text-white/90 ">{lesson.title}</p>
                      <p className="text-sm font-medium  text-gray-500 dark:text-gray-400">
                        {lesson.duration}
                      </p>
                    </div>
                  ))}
                </ComponentCard>
              ))}
            </div>
          </ComponentCard>
        )}
      </div>
    </div>
  );
}
