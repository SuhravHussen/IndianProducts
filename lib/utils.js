import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const API_URL = "/api/public/product";

export function getApiUrl(offset, limit, host) {
  const API_PATH = "/api/public/product"; // Path without domain

  // Determine the scheme based on the host
  const scheme = host.includes("localhost") ? "http" : "https";

  // Construct the full URL including the scheme, host, and path
  const fullUrl = `${scheme}://${host}${API_PATH}?offset=${offset}&limit=${limit}`;

  return fullUrl;
}
export async function handleError(response) {
  const responseBody = await response.text();
  const statusCode = response.status;

  const errorMessages = {
    400: `Bad request.`,
  };

  const errorMessage = responseBody
    ? errorMessages[statusCode] || responseBody
    : errorMessages[statusCode] || "Something went wrong.";

  console.error("Error fetching data:", errorMessage);

  return new Error(errorMessage);
}
