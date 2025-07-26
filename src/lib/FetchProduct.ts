const fetchProduct = async (lang: string) => {
  const baseUrl = process.env.TM_PUBLIC_API_BASE;

  const res = await fetch(
    `${baseUrl}/products/ielts-course?lang=${lang}`,
    {
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
        Accept: "application/json",
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch product data");
  }

  const { data } = await res.json();
  return data;
};

export default fetchProduct;
