"use client";
import React, { useEffect, useState } from "react";
import { getDashboardData } from "./dashboard.service";
import { DashboardData } from "./dashboard.type";
import { showError } from "@/utils/toast";

export default function AdminDashboardView() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDashboard() {
      try {
        const { status, message, data } = await getDashboardData();
        if (status) {
          setData(data);
        } else {
          showError(message);
        }
      } catch (error) {
        console.error("Failed to fetch dashboard", error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchDashboard();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-12 min-h-[400px]">
        <div className="w-8 h-8 md:w-12 md:h-12 border-4 border-brand-500 rounded-full border-t-transparent animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6 md:space-y-8 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
          Dashboard Overview
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Welcome back! Here's what's happening today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {/* Total Users */}
        <div className="p-6 transition-all duration-300 bg-white border border-gray-100 rounded-2xl shadow-theme-sm dark:bg-gray-dark dark:border-gray-800 hover:-translate-y-1 hover:shadow-theme-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Total Users
              </p>
              <p className="mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                {data?.stats?.totalUsers || 0}
              </p>
            </div>
            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-50 text-brand-500 dark:bg-brand-500/10 dark:text-brand-400">
              <svg
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Active Users */}
        <div className="p-6 transition-all duration-300 bg-white border border-gray-100 rounded-2xl shadow-theme-sm dark:bg-gray-dark dark:border-gray-800 hover:-translate-y-1 hover:shadow-theme-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Active Users
              </p>
              <p className="mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                {data?.stats?.activeUsers || 0}
              </p>
            </div>
            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-success-50 text-success-500 dark:bg-success-500/10 dark:text-success-400">
              <svg
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Total Courses */}
        <div className="p-6 transition-all duration-300 bg-white border border-gray-100 rounded-2xl shadow-theme-sm dark:bg-gray-dark dark:border-gray-800 hover:-translate-y-1 hover:shadow-theme-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Total Courses
              </p>
              <p className="mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                {data?.stats?.totalCourses || 0}
              </p>
            </div>
            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-warning-50 text-warning-500 dark:bg-warning-500/10 dark:text-warning-400">
              <svg
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="p-6 bg-white border border-gray-100 rounded-3xl shadow-theme-sm dark:bg-gray-dark dark:border-gray-800">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Recent Activity
        </h2>
        {data?.recentActivity?.length ? (
          <ul className="space-y-4">
            {data.recentActivity.map((activity, i) => (
              <li
                key={i}
                className="flex items-center gap-4 py-3 border-b last:border-0 border-gray-100 dark:border-gray-800"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-brand-500 flex-shrink-0" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Activity #{i + 1}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 text-gray-400 rounded-full bg-gray-50 dark:bg-gray-800/50 dark:text-gray-500">
              <svg
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              No recent activity
            </p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Actions taken on the platform will appear here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
