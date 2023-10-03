export function storePreviousRoute(path) {
  localStorage.setItem("previousRoute", path);
}

export function getPreviousRoute() {
  if (typeof window === "undefined") {
    // Running on the server, return a default value
    return "/";
  }

  return localStorage.getItem("previousRoute") || "/";
}
