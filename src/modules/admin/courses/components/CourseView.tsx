"use client";

import React, { useEffect, useState } from "react";
import { getCourseDetail } from "../service/courses.service";
import { Course, CurriculumModule, OverviewPoint } from "../types/courses.type";
import { IMAGE_URL } from "@/constants/data";
import Loader from "@/components/common/Loader";

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

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500">
      {/* Header section */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden transform transition-all duration-300 hover:shadow-md">
        {course.image && (
          <div className="w-full h-64 md:h-80 relative bg-gray-100 dark:bg-gray-900 group overflow-hidden">
            <img
              src={course.image.startsWith("http") ? course.image : `${IMAGE_URL}${course.image}`}
              alt={course.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
          </div>
        )}
        <div className="p-6 md:p-8 relative">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <span className="px-3 py-1 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-sm font-semibold tracking-wide uppercase shadow-sm">
              {course.category}
            </span>
            <span
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm transition-colors ${course.status === "ACTIVE" ? "bg-green-100 text-green-700 border border-green-200 dark:bg-green-900/40 dark:text-green-300 dark:border-green-800" : "bg-gray-100 text-gray-700 border border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700"}`}
            >
              {course.status}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
            {course.title}
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 text-gray-600 dark:text-gray-300 font-medium">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
              </div>
              <span>{course.instructor}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm">
              <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <span className="font-normal text-gray-500 dark:text-gray-400 font-mono">
                {course.slug}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-8">
          {/* Curriculum Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 md:p-8 overflow-hidden">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 rounded-xl">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  ></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Curriculum Modules
              </h2>
            </div>

            {course.curriculum && course.curriculum.length > 0 ? (
              <div className="space-y-6">
                {course.curriculum.map((moduleItem: CurriculumModule, index: number) => (
                  <div
                    key={moduleItem.id || index}
                    className="group border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:border-blue-300 dark:hover:border-blue-800 transition-colors shadow-sm hover:shadow-md"
                  >
                    <div className="bg-gray-50 dark:bg-gray-900/50 p-5 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center group-hover:bg-blue-50/50 dark:group-hover:bg-blue-900/10 transition-colors">
                      <h3 className="font-bold text-lg text-gray-900 dark:text-white flex items-center gap-3">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
                          {index + 1}
                        </span>
                        {moduleItem.title}
                      </h3>
                      <span className="text-sm text-gray-500 font-medium bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-sm">
                        {moduleItem.lessons?.length || 0} Lessons
                      </span>
                    </div>
                    <div className="divide-y divide-gray-100 dark:divide-gray-800/60 bg-white dark:bg-gray-800">
                      {moduleItem.lessons &&
                        moduleItem.lessons.map((lesson, lIdx) => (
                          <div
                            key={lesson.id || lIdx}
                            className="p-4 sm:px-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors"
                          >
                            <div className="flex items-start sm:items-center gap-3">
                              <svg
                                className="w-5 h-5 text-gray-400 mt-0.5 sm:mt-0 flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                ></path>
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                              </svg>
                              <span className="text-gray-700 dark:text-gray-200 font-medium">
                                {lesson.title}
                              </span>
                            </div>
                            <span className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700/50 px-3 py-1.5 rounded-md self-start sm:self-auto whitespace-nowrap">
                              {lesson.duration}
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <svg
                  className="w-12 h-12 text-gray-300 mx-auto mb-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  ></path>
                </svg>
                <p className="text-gray-500 font-medium">No curriculum modules available yet.</p>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-8">
          {/* Overview Section */}
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-800/90 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2 border-b border-gray-100 dark:border-gray-700 pb-4">
              <svg
                className="w-6 h-6 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
              What You'll Learn
            </h2>
            {course.overview && course.overview.length > 0 ? (
              <ul className="space-y-5">
                {course.overview.map((point: OverviewPoint, index: number) => (
                  <li key={point.id || index} className="flex gap-4 group">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center group-hover:bg-green-200 dark:group-hover:bg-green-800/60 transition-colors">
                      <svg
                        className="w-4 h-4 text-green-600 dark:text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      {point.title}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 italic text-center py-4">No overview provided.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
