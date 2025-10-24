import { Metadata } from "next";
import HeroBanner from "@/components/shared/hero-banner";
import SectionTitle from "@/components/shared/section-title";
import Button from "@/components/ui/button";
import { Home } from 'lucide-react';
import { services } from "@/constants";
import { getSeoData } from "@/services/services";
import Container from "@/components/shared/container";
import Schema from "@/components/shared/schema";

const breadcrumbs = [
  { label: '', href: '/', icon: <Home width={16} height={16}/> },
  { label: 'من نحن', href: '/about' }
];


// Generate metadata dynamically
export async function generateMetadata(): Promise<Metadata> {
  try {
    const seoData = await getSeoData('about');
    const seo = seoData.seo;

    return {
      title: seo.meta_title,
      description: seo.meta_description,
      keywords: seo.meta_keywords,
      openGraph: {
        title: seo.meta_title,
        description: seo.meta_description,
        images: [
          {
            url: seo.meta_image,
            width: 1200,
            height: 630,
            alt: seo.meta_title,
          },
        ],
        type: 'website',
        url: seo.canonical,
      },
      twitter: {
        card: 'summary_large_image',
        title: seo.meta_title,
        description: seo.meta_description,
        images: [seo.meta_image],
      },
      alternates: {
        canonical: seo.canonical,
      },
    };
  } catch (error) {
    console.error('Error generating metadata for about page:', error);
    
    // Fallback metadata
    return {
      title: "عن يوروكويست إنترناشيونال | التدريب والتطوير المهني",
      description: "تعرف على يوروكويست إنترناشيونال، معهد تعليمي رائد يقدم تدريبات وتجارب تعليمية عالية الجودة. تأسست في 2015 بخبرة تزيد عن 25 عاماً.",
      keywords: "عن يوروكويست، معهد تدريب، تطوير مهني، خدمات تعليمية، تدريب إداري",
    };
  }
}

export default function AboutPage() {
  return (
    <> 
      <Schema 
        pageType="about"
        pageTitle="عن يوروكويست إنترناشيونال"
        pageDescription="تعرف على يوروكويست إنترناشيونال، معهد تعليمي رائد يقدم تدريبات وتجارب تعليمية عالية الجودة. تأسست في 2015 بخبرة تزيد عن 25 عاماً."
        pageUrl="https://euroqst.com/about"
      />
      {/* Hero Banner */}
      <HeroBanner
        backgroundImage="/assets/images/hero-about.webp"
        title="عن يوروكويست إنترناشيونال"
        description="تأسست يوروكويست إنترناشيونال في عام 2015 من قبل فريق يتمتع بخبرة تزيد عن 25 عاماً، وقد قدمت أكثر من 1000 برنامج تدريبي، استفاد منها أكثر من 15,000 مشارك عبر قطاعات متنوعة في مراكز عالمية منها دبي، لندن، برشلونة، إسطنبول، فيينا، باريس، وجنيف."
        breadcrumbs={breadcrumbs}
        enableTypewriter={true}
      />

      {/* About Section */}
      <section className="bg-white md:py-12 py-10">
        <Container className="flex flex-col gap-12 relative z-10">
          <img 
            src="/assets/images/bullets-shape.svg" 
            alt="" 
            className="absolute -top-7 -right-44 z-[-1] hidden lg:block" 
          />
          <div className="w-full">
            <SectionTitle title="من هي" highlight="يوروكويست" className="!mb-4" />
            <p className="font-normal text-base leading-7">
              يوروكويست إنترناشيونال هي معهد تعليمي رائد يقدم تدريبات وتجارب تعليمية عالية الجودة مصممة خصيصاً لتلبية احتياجات عملائنا. نهدف إلى تسهيل التميز المهني والشخصي مع تعزيز الفعالية التنظيمية. من خلال تطوير وتقديم خدمات تطوير إدارية عالمية المستوى، نتماشى مع أحدث الأفكار والاستراتيجيات الإدارية. نسعى لتحويل الأداء الشخصي والجماعي والمؤسسي من خلال حلول قوية تمكّن المديرين وتطور القادة. نحن ملتزمون بتقديم خدمات دائماً ذات صلة وقابلة للتطبيق، مع الحفاظ على نهج يركز على العميل.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="md:py-12 py-10">
        <Container className="flex items-center justify-between gap-8 lg:flex-nowrap flex-wrap">
          <SectionTitle title="خدماتنا" highlight="" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {services.map((service, index) => (
              <div key={index} className="h-full flex flex-col justify-between text-center items-center gap-2.5">
                <div className="w-20 h-20">
                  <img src={service.icon} alt={service.title} className="w-full h-full" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#3E5EC0] text-lg font-bold mb-4">{service.title}</h3>
                  <p className="text-[#757575] leading-6">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Goals Section */}
      <section className="bg-[#F0FAF7] md:py-12 py-10">
        <Container>
          <div className="w-full">
            <SectionTitle title="أهدافنا" highlight="" className="!mb-4" />
            <p className="font-normal text-base leading-7">
              تزويد الموارد البشرية بالمعرفة والمهارات والاتجاهات التي تعزز الأداء. تطوير الممارسات المهنية للمتدربين بما يتماشى مع أحدث التطورات المهنية في مجال التدريب. زيادة عدد مراكز التدريب حول العالم. توسيع علاقات التعاون المهني مع المؤسسات الدولية المعنية بالتدريب وتطوير الموارد البشرية. الاستمرار في أن نكون رواداً نشطين في بناء القدرات على المستويين الإقليمي والدولي. السعي للحصول على اعتماد مهني دولي لبرامج التدريب.
            </p>
          </div>
        </Container>
      </section>

      {/* About Contact Section */}
      <section className="bg-[#F2F8FF] md:py-12 py-10">
        <Container className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          <div className="max-w-[540px] text-center lg:text-left">
            <p className="text-2xl md:text-4xl font-semibold leading-tight mb-8">
              مساحة ينمو فيها{" "}
              <span className="text-[#3E5EC0]">الأفراد</span>
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button>
                <span>اتصل بنا</span>
                <i className="fa-solid fa-chevron-right ml-2"></i>
              </Button>
            </div>
          </div>
          <div className="w-full max-w-[400px]">
            <img
              src="/assets/images/about-contact-img.png"
              alt="رسم توضيحي لطلب الاتصال"
              className="w-full h-auto"
            />
          </div>
        </Container>
      </section>

      {/* Coverage Section */}
      {/* <section className="mt-10">
        <div className="w-full">
          <div className="relative w-full">
            <img 
              src="/assets/images/global-map2.png" 
              alt="Map showing our global presence" 
              className="w-full h-auto" 
            />
            <div className="absolute top-1/2 left-[15%] md:left-1/2 md:-translate-x-1/2 -translate-y-1/2 text-center flex flex-col justify-center items-center gap-3 w-full md:w-auto px-4">
              <h2 className="font-semibold text-2xl md:text-4xl text-black">
                Geographical <span className="text-[#3E5EC0]">Coverage</span>
              </h2>
              <p className="text-[#7C7B7B]">find our services in 25 cities around the world</p>
              <Button className="max-w-[200px]">
                See All
                <i className="fa-solid fa-chevron-right ml-2"></i>
              </Button>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
