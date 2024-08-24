"use server";

export async function getSearchedProducts(query = "", host) {
  try {
    const url = getApiUrl(host, query);

    const products = await fetch(url);

    const data = await products.json();

    if (data.success) {
      return data.data;
    }

    return [];
  } catch (error) {
    console.log(error);
    return [];
  }
}

function getApiUrl(host, query) {
  const API_PATH = "/api/public/product/search"; // Path without domain

  // Determine the scheme based on the host
  const scheme = host.includes("localhost") ? "http" : "https";

  // Construct the full URL including the scheme, host, and path
  const fullUrl = `${scheme}://${host}${API_PATH}?query=${query}`;

  return fullUrl;
}
