"use client";

import React, { useEffect, useState } from "react";
import { getCourses } from "../service/courses.service";
import { Course } from "../types/courses.type";
import Loader from "@/components/common/Loader";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import CourseTable from "./CourseTable";
import { PAGINATION_OPTIONS } from "@/constants/data";
import { PaginationMeta } from "@/types/common.types";

export default function CourseListView() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [meta, setMeta] = useState<PaginationMeta | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(PAGINATION_OPTIONS[1]);

  useEffect(() => {
    async function fetchCourses() {
      setLoading(true);
      try {
        const { status, message, data, meta: responseMeta } = await getCourses(page, limit);
        if (status) {
          setCourses(data || []);
          if (responseMeta) {
            setMeta(responseMeta);
          }
        } else {
          setError(message || "Failed to load courses");
        }
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchCourses();
  }, [page, limit]);

  if (loading && courses.length === 0) {
    return <Loader />;
  }

  if (error) {
    return <div style={{ color: "red" }}>{error}</div>;
  }

  return (
    <div className="space-y-6">
      <PageBreadcrumb pageTitle="Courses" />
      <CourseTable
        data={courses}
        meta={meta}
        onPageChange={setPage}
        onLimitChange={(newLimit) => {
          setLimit(newLimit);
          setPage(1);
        }}
      />
      {courses.length === 0 && (
        <p className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
          No courses found.
        </p>
      )}
    </div>
  );
}
