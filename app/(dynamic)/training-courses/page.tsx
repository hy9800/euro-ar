import { Metadata } from "next";
import HeroBanner from "@/components/shared/hero-banner";
import { BreadcrumbItem } from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";
import CategoriesSection from "./_components/categories-section";
import { getCategories, getSeoData } from "@/services/services";
import Container from "@/components/shared/container";
import Schema from "@/components/shared/schema";


// Generate metadata dynamically for SEO optimization
export async function generateMetadata(): Promise<Metadata> {
  try {
    const seoData = await getSeoData("categories");
    const seo = seoData.seo;
    const baseUrl = "https://euroqst.com";

    return {
      title: seo.meta_title,
      description: seo.meta_description,
      keywords: seo.meta_keywords,
      authors: [{ name: "الدول التدريبية العالمية" }],
      creator: "الدول التدريبية العالمية",
      publisher: "الدول التدريبية العالمية",
      // robots: {
      //   index: true,
      //   follow: false,
      //   googleBot: {
      //     index: true,
      //     follow: false,
      //     "max-video-preview": -1,
      //     "max-image-preview": "large",
      //     "max-snippet": -1,
      //   },
      // },
      openGraph: {
        type: "website",
        locale: "en_US",
        url: seo.canonical || `${baseUrl}/training-courses`,
        siteName: "الدول التدريبية العالمية",
        title: seo.meta_title,
        description: seo.meta_description,
        images: [
          {
            url: seo.meta_image,
            width: 1200,
            height: 630,
            alt: seo.meta_title,
            type: "image/jpeg",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        site: "@euroquest",
        creator: "@euroquest",
        title: seo.meta_title,
        description: seo.meta_description,
        images: [seo.meta_image],
      },
      alternates: {
        canonical: seo.canonical || `${baseUrl}/training-courses`,
      },
      verification: {
        google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
      },
    };
  } catch (error) {
    console.error("Error generating metadata for categories page:", error);
    const baseUrl = "https://euroqst.com";

    // SEO-optimized fallback metadata
    return {
      title:
        "الفئات التدريبية | الدول التدريبية العالمية",
      description:
        "استكشف جميع فئات التدريب في الدول التدريبية العالمية. ابحث عن كورسات تدريبية مهنية في الإدارة, الموارد البشرية, التكنولوجيا, المالية, وغيرها على مختلف المجالات.",
      keywords:
        "الفئات التدريبية, الكورسات المهنية, التدريب في الإدارة, التدريب في الموارد البشرية, التدريب في التكنولوجيا, التدريب في المالية, التطوير التجاري",
      authors: [{ name: "الدول التدريبية العالمية" }],
      creator: "الدول التدريبية العالمية",
      publisher: "الدول التدريبية العالمية",
      // robots: {
      //   index: true,
      //   follow: false,
      // },
      alternates: {
        canonical: `${baseUrl}/training-courses`,
      },
    };
  }
}

interface CategoriesPageProps {
  searchParams: Promise<{
    keyword?: string;
  }>;
}

export default async function CategoriesPage({ searchParams }: CategoriesPageProps) {
  const params = await searchParams;
  const categories = await getCategories();
  const baseUrl = "https://euroqst.com";
  
  // Breadcrumb configuration
  const breadcrumbs: BreadcrumbItem[] = [
    {
      href: "/",
      label: "",
      icon: <Home size={14} />,
    },
    {
      href: "/training-courses",
      label: "الفئات التدريبية",
    },
  ];

  // Generate JSON-LD structured data for categories listing
  const categoryListSchema = categories
    ? {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "الفئات التدريبية | الدول التدريبية العالمية",
        description:
          "استكشف جميع فئات التدريب في الدول التدريبية العالمية. ابحث عن كورسات تدريبية مهنية في الإدارة, الموارد البشرية, التكنولوجيا, المالية, وغيرها على مختلف المجالات.",
        url: `${baseUrl}/training-courses`,
        publisher: {
          "@type": "Organization",
          name: "الدول التدريبية العالمية",
          url: baseUrl,
          logo: {
            "@type": "ImageObject",
            url: `${baseUrl}/assets/images/logo.png`,
          },
        },
        hasPart: categories.map((category: Category) => ({
          "@type": "ItemList",
          name: category.title,
          url: `${baseUrl}/training-courses/${category.slug}`,
          image: category.image,
        })),
      }
    : null;

  if (!categories || categories.length === 0) {
    return (
      <>
        <Schema
          pageType="courses"
          pageTitle="الفئات التدريبية | الدول التدريبية العالمية"
          pageDescription="استكشف جميع فئات التدريب في الدول التدريبية العالمية. ابحث عن كورسات تدريبية مهنية في الإدارة, الموارد البشرية, التكنولوجيا, المالية, وغيرها على مختلف المجالات."
          pageUrl={`${baseUrl}/training-courses`}
        />
        <header>
          <HeroBanner
            backgroundImage="/assets/images/hero-categories.webp"
            title="استكشف جميع فئات التدريب في الدول التدريبية العالمية"
            description="ابحث عن كورسات تدريبية مهنية في الإدارة, الموارد البشرية, التكنولوجيا, المالية, وغيرها على مختلف المجالات."
            breadcrumbs={breadcrumbs}
            enableTypewriter={true}
            typewriterSpeed={100}
            typewriterDelay={500}
          />
        </header>
        <main>
          <Container className="text-center md:pb-12 pb-10">
            <article className="bg-gray-50 border border-gray-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                لا يوجد فئات متاحة
              </h2>
              <p className="text-gray-600">
                نحن نعمل على إضافة المزيد من الفئات. يرجى التحقق مرة أخرى قريبا!
              </p>
            </article>
          </Container>
        </main>
      </>
    );
  }

  return (
    <>
      {/* Schema.org JSON-LD for Categories Listing */}
      {categoryListSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(categoryListSchema) }}
        />
      )}

      <Schema
        pageType="courses"
        pageTitle="الفئات التدريبية | الدول التدريبية العالمية"
        pageDescription="استكشف جميع فئات التدريب في الدول التدريبية العالمية. ابحث عن كورسات تدريبية مهنية في الإدارة, الموارد البشرية, التكنولوجيا, المالية, وغيرها على مختلف المجالات."
        pageUrl={`${baseUrl}/training-courses`}
      />

      {/* Hero Banner with semantic header */}
      <header>
        <HeroBanner
          backgroundImage="/assets/images/hero-categories.webp"
          title="استكشف جميع فئات التدريب في الدول التدريبية العالمية"
          description="ابحث عن كورسات تدريبية مهنية في الإدارة, الموارد البشرية, التكنولوجيا, المالية, وغيرها على مختلف المجالات."
          breadcrumbs={breadcrumbs}
          enableTypewriter={true}
          typewriterSpeed={100}
          typewriterDelay={500}
        />
      </header>

      {/* Main content with semantic HTML */}
      <main>
        <Container className="md:pb-12 pb-10">
          <section aria-label="الفئات التدريبية والبحث">
            <CategoriesSection categories={categories} />
          </section>
        </Container>
      </main>
    </>
  );
}
