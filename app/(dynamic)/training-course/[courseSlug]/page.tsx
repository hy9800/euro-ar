import { Metadata } from "next";
import { getCourseDetails } from "@/services/services";
import { BreadcrumbItem } from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";
import HeroBanner from "@/components/shared/hero-banner";
import Container from "@/components/shared/container";
import CourseContent from "../_components/course-content";
import CourseTimings from "../_components/course-timings";
import Schema from "@/components/shared/schema";


// Generate metadata dynamically with enhanced SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ courseSlug: string }>;
}): Promise<Metadata> {
  try {
    const { courseSlug } = await params;
    const courseData = await getCourseDetails(courseSlug);
    const { course } = courseData;
    const baseUrl = "https://euroqst.com";

    return {
      title:
        course.meta_title ||
        `${course.title} | الدول التدريبية العالمية Training Course`,
      description:
        course.meta_description ||
        course.description ||
        `Professional training course: ${course.title}. Enhance your skills with الدول التدريبية العالمية's expert-led program.`,
      keywords:
        course.keywords ||
        `${course.title}, professional training, ${course.category?.title}, الدول التدريبية العالمية, skill development`,
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
        url:
          course.canonical ||
          `${baseUrl}/training-course/${course.slug}`,
        siteName: "الدول التدريبية العالمية",
        title: course.meta_title || course.title,
        description: course.meta_description || course.description,
        images: [
          {
            url: course.meta_image || course.image || "/assets/images/hero-course.webp",
            width: 1200,
            height: 630,
            alt: course.title,
            type: "image/jpeg",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        site: "@euroquest",
        creator: "@euroquest",
        title: course.meta_title || course.title,
        description: course.meta_description || course.description,
        images: [course.meta_image || course.image || "/assets/images/hero-course.webp"],
      },
      alternates: {
        canonical:
          course.canonical ||
          `${baseUrl}/training-course/${course.slug}`,
      },
      verification: {
        google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
      },
    };
  } catch (error) {
    console.error("Error generating metadata for course page:", error);
    const baseUrl = "https://euroqst.com";

    // SEO-optimized fallback metadata
    return {
      title:
        "Training Course | الدول التدريبية العالمية Professional Development",
      description:
        "Professional training course by الدول التدريبية العالمية. Enhance your skills with our expert-led programs designed for career advancement and professional growth.",
      keywords:
        "professional training, course, الدول التدريبية العالمية, skill development, career advancement",
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

export default async function Page({
  params,
}: {
  params: Promise<{ courseSlug: string }>;
}) {
  // Fetch course details from API
  const { courseSlug } = await params;
  const courseData = await getCourseDetails(courseSlug);
  const { course, timings } = courseData;
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
      label: "التخصصات",
    },
    {
      href: `/training-courses/${course.category.slug}`,
      label: course.category.title,
    },
    {
      href: `/training-course/${course.slug}`,
      label: course.title,
    },
  ];

  // Generate JSON-LD structured data for course page
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description || `دورة تدريبية مهنية: ${course.title}`,
    provider: {
      "@type": "Organization",
      name: "الدول التدريبية العالمية",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/assets/images/logo.png`,
      },
    },
    courseCode: course.code,
    url: `${baseUrl}/training-course/${course.slug}`,
    image: course.image || "/assets/images/hero-course.webp",
    about: {
      "@type": "Thing",
      name: course.category?.title,
    },
    hasCourseInstance: timings.map((timing) => ({
      "@type": "CourseInstance",
      courseMode: "onsite",
      location: {
        "@type": "Place",
        // name: timing.city.title,
        address: {
          "@type": "PostalAddress",
          // addressLocality: timing.city.title,
        },
      },
      startDate: timing.start_date,
      endDate: timing.end_date,
      offers: {
        "@type": "Offer",
        price: timing.fees,
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    })),
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
          name: "Training Categories",
          item: `${baseUrl}/training-courses`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: course.category.title,
          item: `${baseUrl}/training-courses/${course.category.slug}`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: course.title,
          item: `${baseUrl}/training-course/${course.slug}`,
        },
      ],
    },
  };

  return (
    <>
      {/* Schema.org JSON-LD for Course Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />

      <Schema
        pageType="courses"
        pageTitle={course.meta_title || `${course.title} | الدول التدريبية العالمية`}
        pageDescription={
          course.meta_description ||
          course.description ||
          `دورة تدريبية مهنية: ${course.title}. قم بتطوير مهاراتك مع يوروكويست إنترناشيونال برنامج مدرب من قبل الخبراء.`
        }
        pageUrl={course.canonical || `${baseUrl}/training-course/${course.slug}`}
      />

      {/* Hero Banner with semantic header */}
      <header>
        <HeroBanner
          backgroundImage={"/assets/images/hero-course.webp"}
          title={course.h1 || course.title}
          description={course.description || "جاري تحميل تفاصيل الدورة..."}
          breadcrumbs={breadcrumbs}
          enableTypewriter={true}
          typewriterSpeed={100}
          typewriterDelay={500}
        />
      </header>

      {/* Main content with semantic HTML */}
      <main>
        <Container>
          <section aria-label="جدول الدورة والتواريخ">
            <CourseTimings course={course} timings={timings} />
          </section>
          
          <section aria-label="محتوى وتفاصيل الدورة">
            <CourseContent course={course} />
          </section>
        </Container>
      </main>
    </>
  );
}
