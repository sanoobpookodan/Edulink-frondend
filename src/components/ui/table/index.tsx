import { PAGINATION_OPTIONS } from "@/constants/data";
import React, { ReactNode } from "react";

// Props for Table
interface TableProps {
  children: ReactNode; // Table content (thead, tbody, etc.)
  className?: string; // Optional className for styling
}

// Props for TableHeader
interface TableHeaderProps {
  children: ReactNode; // Header row(s)
  className?: string; // Optional className for styling
}

// Props for TableBody
interface TableBodyProps {
  children: ReactNode; // Body row(s)
  className?: string; // Optional className for styling
}

// Props for TableRow
interface TableRowProps {
  children: ReactNode; // Cells (th or td)
  className?: string; // Optional className for styling
}

// Props for TableCell
interface TableCellProps {
  children: ReactNode; // Cell content
  isHeader?: boolean; // If true, renders as <th>, otherwise <td>
  className?: string; // Optional className for styling
}

// Table Component
const Table: React.FC<TableProps> = ({ children, className }) => {
  return <table className={`min-w-full  ${className}`}>{children}</table>;
};

// TableHeader Component
const TableHeader: React.FC<TableHeaderProps> = ({ children, className }) => {
  return <thead className={className}>{children}</thead>;
};

// TableBody Component
const TableBody: React.FC<TableBodyProps> = ({ children, className }) => {
  return <tbody className={className}>{children}</tbody>;
};

// TableRow Component
const TableRow: React.FC<TableRowProps> = ({ children, className }) => {
  return <tr className={className}>{children}</tr>;
};

// TableCell Component
const TableCell: React.FC<TableCellProps> = ({ children, isHeader = false, className }) => {
  const CellTag = isHeader ? "th" : "td";
  return <CellTag className={` ${className}`}>{children}</CellTag>;
};

// Props for TablePagination
export interface TablePaginationProps {
  meta: { page: number; limit: number; total: number; totalPages: number };
  onPageChange?: (page: number) => void;
  onLimitChange?: (limit: number) => void;
  options?: number[];
}

// TablePagination Component
const TablePagination: React.FC<TablePaginationProps> = ({
  meta,
  onPageChange,
  onLimitChange,
  options = PAGINATION_OPTIONS,
}) => {
  if (!meta) return null;
  return (
    <div className="flex items-center justify-between border-t border-gray-100 bg-white px-5 py-1 dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="flex flex-1 items-center justify-between sm:hidden">
        <button
          onClick={() => onPageChange?.(meta.page - 1)}
          disabled={meta.page <= 1}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </button>
        <button
          onClick={() => onPageChange?.(meta.page + 1)}
          disabled={meta.page >= meta.totalPages}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-end space-x-6">
        <div className="flex items-center space-x-2">
          <span className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
            Rows per page:
          </span>
          <select
            value={meta.limit}
            onChange={(e) => onLimitChange?.(Number(e.target.value))}
            className="bg-transparent text-gray-500 dark:text-gray-400 text-theme-xs font-medium focus:outline-none cursor-pointer"
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <span className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
            {(meta.page - 1) * meta.limit + 1}-{Math.min(meta.page * meta.limit, meta.total)} of{" "}
            {meta.total}
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => onPageChange?.(meta.page - 1)}
            disabled={meta.page <= 1}
            className="p-1 text-gray-400 hover:text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed dark:hover:text-gray-300"
          >
            <span className="sr-only">Previous</span>
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            onClick={() => onPageChange?.(meta.page + 1)}
            disabled={meta.page >= meta.totalPages}
            className="p-1 text-gray-400 hover:text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed dark:hover:text-gray-300"
          >
            <span className="sr-only">Next</span>
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export { Table, TableHeader, TableBody, TableRow, TableCell, TablePagination };
