"use server";

import { getApiUrl, handleError } from "@/lib/utils";

export const getProducts = async (offset, limit, host) => {
  const url = getApiUrl(offset, limit, host);

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!data.success) {
      throw new Error(
        "Something went wrong while fetching data from server. not successful"
      );
    }

    return data.data;
  } catch (error) {
    console.error(error);
    throw new Error(`An error occurred: ${error}`);
  }
};

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
