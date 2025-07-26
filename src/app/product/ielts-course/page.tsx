import Hero from "@/components/hero-section";
import SectionOneLayout from "@/components/layout/SectionOneLayout";
import fetchProduct from "@/lib/FetchProduct";
import { Metadata } from "next";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string | undefined }>;
}): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const lang = resolvedSearchParams?.lang || "en";
  const product = await fetchProduct(lang);

  const seo = product?.seo;

  return {
    title: seo?.meta_title || "IELTS Course | 10 Minute School",
    description: seo?.meta_description || "Join our IELTS course now!",
    keywords: seo?.meta_keywords?.split(",") || [],
    openGraph: {
      title: seo?.meta_title,
      description: seo?.meta_description,
      images: seo?.og_image ? [{ url: seo.og_image }] : undefined,
    },
  };
}

const ProductPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string | undefined }>;
}) => {
  const resolvedSearchParams = await searchParams;
  const lang = resolvedSearchParams.lang || "en";
  const product = await fetchProduct(lang);

  return (
    <div>
      <div className="bg-[var(--color-primary)] text-white w-full">
        <Hero data={product} />
      </div>
      <SectionOneLayout data={product} />
    </div>
  );
};

export default ProductPage;
