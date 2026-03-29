import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

let router: AppRouterInstance | null = null;

export function setRouter(r: AppRouterInstance) {
  router = r;
}

type Params = Record<string, any>;

function buildUrl(path: string, params?: Params) {
  if (!params) return path;
  const query = new URLSearchParams(params).toString();
  return `${path}?${query}`;
}

// 🔥 main function (like expo navigate)
export function navigate(path: string, params?: Params) {
  router?.push(buildUrl(path, params));
}

// others
export function replace(path: string, params?: Params) {
  router?.replace(buildUrl(path, params));
}

export function reset(path: string, params?: Params) {
  router?.replace(buildUrl(path, params));
}

export function back() {
  router?.back();
}
