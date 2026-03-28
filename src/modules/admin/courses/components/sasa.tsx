"use client";

import React, { useEffect, useState } from "react";
import { getCourses } from "../service/courses.service";
import { Course } from "../types/courses.type";
import Loader from "@/components/common/Loader";

export default function AdminCoursesView() {
  const [courses, setCourses] = useState<Course[]>([]);
  // Store meta separately as requested
  const [meta, setMeta] = useState<any>(null); // from ApiGetResult
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const { status, message, data, meta: responseMeta } = await getCourses();
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
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div style={{ color: "red" }}>{error}</div>;
  }

  return (
    <div>
      <h1>Courses</h1>

      {meta && (
        <div style={{ marginBottom: "1rem", padding: "10px", background: "#f5f5f5" }}>
          <h4>Pagination Meta</h4>
          <p>
            Page: {meta.page} of {meta.totalPages}
          </p>
          <p>Total Items: {meta.total}</p>
          <p>Limit: {meta.limit}</p>
        </div>
      )}

      <ul>
        {courses.map((course) => (
          <li
            key={course.id}
            style={{ marginBottom: "1rem", border: "1px solid #ccc", padding: "10px" }}
          >
            <h3>{course.title}</h3>
            <p>
              <strong>Status:</strong> {course.status}
            </p>
            <p>
              <strong>Category:</strong> {course.category?.name}
            </p>
            <p>
              <strong>Instructor Bio:</strong> {course.instructor?.bio}
            </p>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>

      {courses.length === 0 && <p>No courses found.</p>}
    </div>
  );
}
