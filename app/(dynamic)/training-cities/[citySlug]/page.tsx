import { Metadata } from "next";
import { getCityDetails } from "@/services/services";
import Schema from "@/components/shared/schema";
import HeroBanner from "@/components/shared/hero-banner";
import { BreadcrumbItem } from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";
import Container from "@/components/shared/container";
import AdditionalDescription from "@/components/shared/additional-description";
import CitySection from "../_components/city-section";
import CategoriesSection from "../../../(home)/_components/categories-section";

// Generate metadata dynamically with enhanced SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ citySlug: string }>;
}): Promise<Metadata> {
  try {
    const { citySlug } = await params;
    const cityData = await getCityDetails(citySlug);
    const { city } = cityData;
    const baseUrl = "https://euroqst.com";

    return {
      title: city.meta_title || `${city.title} Training Courses | الدول التدريبية العالمية`,
      description: city.meta_description || city.description?.replace(/<[^>]*>/g, '') || `Professional training courses in ${city.title} by الدول التدريبية العالمية. Enhance your skills with our expert-led programs.`,
      keywords: city.meta_keywords || `${city.title}, training courses ${city.title}, professional training, الدول التدريبية العالمية, skill development, ${city.title.toLowerCase()} courses`,
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
        url: city.canonical || `${baseUrl}/training-cities/${city.slug}`,
        siteName: "الدول التدريبية العالمية",
        title: city.meta_title || city.h1 || `Training Courses in ${city.title}`,
        description: city.meta_description || city.description?.replace(/<[^>]*>/g, ''),
        images: [
          {
            url: city.meta_image || city.image || "/assets/images/hero-city.webp",
            width: 1200,
            height: 630,
            alt: city.image_alt || city.image_title || `Training courses in ${city.title}`,
            type: "image/jpeg",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        site: "@euroquest",
        creator: "@euroquest",
        title: city.meta_title || city.h1 || `Training Courses in ${city.title}`,
        description: city.meta_description || city.description?.replace(/<[^>]*>/g, ''),
        images: [city.meta_image || city.image || "/assets/images/hero-city.webp"],
      },
      alternates: {
        canonical: city.canonical || `${baseUrl}/training-cities/${city.slug}`,
      },
      verification: {
        google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
      },
    };
  } catch (error) {
    console.error("Error generating metadata for city page:", error);
    const baseUrl = "https://euroqst.com";
    
    // SEO-optimized fallback metadata
    return {
      title: "Training Courses | الدول التدريبية العالمية Professional Development",
      description: "Professional training courses by الدول التدريبية العالمية. Enhance your skills with our expert-led programs designed for career advancement and professional growth.",
      keywords: "professional training, courses, الدول التدريبية العالمية, skill development, career advancement",
      authors: [{ name: "الدول التدريبية العالمية" }],
      creator: "الدول التدريبية العالمية",
      publisher: "الدول التدريبية العالمية",
      // robots: {
      //   index: true,
      //   follow: false,
      // },
      alternates: {
        canonical: `${baseUrl}/training-cities`,
      },
    };
  }
}

interface CityPageProps {
  params: Promise<{ citySlug: string }>;
  searchParams: Promise<{
    keyword?: string;
  }>;
}

export default async function Page({
  params,
  searchParams,
}: CityPageProps) {
  const { citySlug } = await params;
  const searchParamsData = await searchParams;
  const cityData = await getCityDetails(citySlug);
  const { city, courses, categories } = cityData;
  const baseUrl = "https://euroqst.com";

  // Breadcrumb configuration
  const breadcrumbs: BreadcrumbItem[] = [
    {
      href: "/",
      label: "",
      icon: <Home size={14} />,
    },
    {
      href: "/training-cities",
      label: "مدن التدريب",
    },
    {
      href: `/training-cities/${city?.slug}`,
      label: city?.title,
    },
  ];

  // Generate JSON-LD structured data for city page
  const citySchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: city.title,
    description: city.description?.replace(/<[^>]*>/g, '') || `Professional training courses in ${city.title}`,
    url: `${baseUrl}/training-cities/${citySlug}`,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: baseUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Training Cities",
          item: `${baseUrl}/training-cities`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: city.title,
          item: `${baseUrl}/training-cities/${citySlug}`,
        },
      ],
    },
    publisher: {
      "@type": "Organization",
      name: "الدول التدريبية العالمية",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/assets/images/logo.png`,
      },
    },
    event: courses.map((course: Course) => ({
      "@type": "Course",
      name: course.title,
      description: course.description,
      provider: {
        "@type": "Organization",
        name: "الدول التدريبية العالمية",
      },
      url: `${baseUrl}/training-course/${course.slug}`,
      courseCode: course.code,
    })),
  };

  return (
    <>
      {/* Schema.org JSON-LD for City Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }}
      />

      <Schema
        pageType="cities"
        pageTitle={city.meta_title || `${city.title} Training Courses | الدول التدريبية العالمية`}
        pageDescription={
          city.meta_description ||
          city.description?.replace(/<[^>]*>/g, '') ||
          `Professional training courses in ${city.title} by الدول التدريبية العالمية. Enhance your skills with our expert-led programs.`
        }
        pageUrl={city.canonical || `${baseUrl}/training-cities/${city.slug}`}
      />

      {/* Hero Banner with semantic header */}
      <header>
        <HeroBanner
          backgroundImage="/assets/images/hero-city.webp"
          title={city.h1 || city.title}
          description={city.description || `ابحث عن دورات تدريبية مهنية في ${city.title}`}
          breadcrumbs={breadcrumbs}
          enableTypewriter={true}
          typewriterSpeed={100}
          typewriterDelay={500}
        />
      </header>

      {/* Main content with semantic HTML */}
      <main>
        <Container className="md:pb-12 pb-10">
          <section aria-label="Course search and listing">
            <CitySection
              courses={courses}
              citySlug={citySlug}
              searchParams={searchParamsData}
            />
          </section>
        </Container>

        {/* Categories Section */}
        <div className="md:mb-12 mb-10">
          <CategoriesSection
            categories={categories}
            citySlug={citySlug}
            title="التخصصات في"
            highlight={city.title}
          />
        </div>

        {/* Additional description Section */}
        {city && city.additional_description && (
          <AdditionalDescription
            title={city.title}
            additional_description={city.additional_description}
          />
        )}
      </main>
    </>
  );
}
