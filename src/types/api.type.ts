export interface ApiError {
  field: string;
  message: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: ApiError[];
  meta?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface ApiGetResult<T> {
  status: boolean | number;
  data?: T;
  message?: string;
  meta?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface ApiPostResult<T> {
  status: boolean;
  message?: string;
  data?: T;
  errors?: ApiError[];
  errorCode?: number;
}

export interface ApiPatchResult<T> {
  status: boolean | number;
  message?: string;
  data?: T;
  errors?: ApiError[];
}

export interface ApiPutResult<T> {
  status: boolean | number;
  message?: string;
  data?: T;
  errors?: ApiError[];
}

export interface ApiDeleteResult<T> {
  status: boolean | number;
  message?: string;
  data?: T;
}
