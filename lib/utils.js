import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const API_URL = "https://jsonplaceholder.typicode.com/posts";
export function getApiUrl(offset, limit) {
  return `${API_URL}?_start=${offset}&_limit=${limit}`;
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
