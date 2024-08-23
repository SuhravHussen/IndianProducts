"use server";

import { getApiUrl, handleError } from "@/lib/utils";

export const getProducts = async (offset, limit) => {
  const url = getApiUrl(offset, limit);

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (!response.ok) {
      throw await handleError(response);
    }

    return data;
  } catch (error) {
    console.error(error);
    throw new Error(`An error occurred: ${error}`);
  }
};
