import { Metadata } from "next";
import HeroBanner from "@/components/shared/hero-banner";
import SectionTitle from "@/components/shared/section-title";
import Button from "@/components/ui/button";
import { Home } from "lucide-react";
import { services } from "@/constants";
import { getSeoData } from "@/services/services";
import Container from "@/components/shared/container";
import Schema from "@/components/shared/schema";
import AboutNavigation from "./_components/about-navigation";

const breadcrumbs = [
  { label: "", href: "/", icon: <Home width={16} height={16} /> },
  { label: "من نحن", href: "/about" },
];

// Generate metadata dynamically
export async function generateMetadata(): Promise<Metadata> {
  try {
    const seoData = await getSeoData("about");
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
        type: "website",
        url: seo.canonical,
      },
      twitter: {
        card: "summary_large_image",
        title: seo.meta_title,
        description: seo.meta_description,
        images: [seo.meta_image],
      },
      alternates: {
        canonical: seo.canonical,
      },
    };
  } catch (error) {
    console.error("Error generating metadata for about page:", error);

    // Fallback metadata
    return {
      title:
        "عن يوروكويست الدولية | التدريب والتطوير المهني",
      description:
        "تعرف على يوروكويست الدولية، معهد تعليمي رائد يقدم تدريبًا عالي الجودة وتجارب تعليمية متميزة. تأسست في 2015 بخبرة تزيد عن 25 عامًا.",
      keywords:
        "عن يوروكويست، معهد تدريب، تطوير مهني، خدمات تعليمية، تدريب إداري",
    };
  }
}

export default function AboutPage() {
  return (
    <>
      <Schema
        pageType="about"
        pageTitle="عن يوروكويست الدولية"
        pageDescription="تعرف على يوروكويست الدولية، معهد تعليمي رائد يقدم تدريبًا عالي الجودة وتجارب تعليمية متميزة. تأسست في 2015 بخبرة تزيد عن 25 عامًا."
        pageUrl="https://euroqst.com/about"
      />
      {/* Hero Banner */}
      <HeroBanner
        backgroundImage="/assets/images/hero-about.webp"
        title="عن يوروكويست الدولية"
        description="تأسست يوروكويست الدولية في عام 2015 على يد فريق يمتلك خبرة تزيد عن 25 عامًا، وقد قدمت أكثر من 1000 برنامج تدريبي، استفاد منها أكثر من 15,000 مشارك عبر قطاعات متنوعة في مراكز عالمية تشمل دبي، لندن، برشلونة، إسطنبول، فيينا، باريس، وجنيف."
        breadcrumbs={breadcrumbs}
        enableTypewriter={true}
      />

      <Container>
        <div className="flex flex-col xl:flex-row gap-6 xl:gap-8 py-6 xl:py-8">
          {/* Sections Navigation List */}
          <AboutNavigation />

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* About Section */}
            <section
              id="who-is-euroquest"
              className="bg-white md:pb-11 pb-8 scroll-mt-24"
            >
              <div className="flex flex-col gap-12 relative z-10">
                <div className="w-full">
                  <SectionTitle
                    title="من هي"
                    highlight="يوروكويست"
                    className="!mb-4"
                  />
                  <p className="font-normal text-lg leading-7">
                    تأسست يوروكويست الدولية في عام 2015 على يد فريق يمتلك خبرة تزيد عن 25 عامًا، وقد قدمت أكثر من 1000 برنامج تدريبي، استفاد منها أكثر من 15,000 مشارك عبر قطاعات متنوعة في مراكز عالمية تشمل دبي، لندن، برشلونة، إسطنبول، فيينا، باريس، وجنيف.
                  </p>
                </div>
              </div>
            </section>

            {/* Our Vission */}
            <section
              id="our-vision"
              className="bg-white md:py-11 py-8 scroll-mt-24"
            >
              <div className="flex flex-col gap-12 relative z-10">
                <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 md:gap-16">
                  <div className="w-32 sm:w-36 md:w-40 flex-shrink-0">
                    <img
                      src="/assets/icons/vision-icon.svg"
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="mb-4 text-2xl md:text-4xl font-bold capitalize">
                      <span className="text-[#3E5EC0]">رؤيتنا</span>
                    </h3>
                    <p className="font-normal text-base md:text-lg leading-7">
                      أن نكون الخيار الأول عالميًا في التدريب والتطوير المهني، من خلال تقديم حلول تعليمية مبتكرة ذات تأثير مستدام.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Our Mission */}
            <section
              id="our-mission"
              className="bg-white md:py-11 py-8 scroll-mt-24"
            >
              <div className="flex flex-col gap-12 relative z-10">
                <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 md:gap-16">
                  <div className="w-32 sm:w-36 md:w-40 flex-shrink-0">
                    <img
                      src="/assets/icons/mission-icon.svg"
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="mb-4 text-2xl md:text-4xl font-bold capitalize">
                      <span className="text-[#3E5EC0]">مهمتنا</span>
                    </h3>
                    <p className="font-normal text-base md:text-lg leading-7">
                      تمكين الأفراد والفرق والمؤسسات من تحسين الأداء من خلال برامج تدريبية متخصصة تجمع بين النظرية والتطبيق العملي، مصممة خصيصًا لتلبية الاحتياجات المؤسسية.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Our Values */}
            <section
              id="our-values"
              className="bg-white md:py-11 py-8 scroll-mt-24"
            >
              <div className="flex flex-col gap-12 relative z-10">
                <div className="w-full">
                  <SectionTitle
                    title="قيمنا"
                    highlight=""
                    className="!mb-4"
                  />
                  <p className="font-normal text-lg leading-7 text-gray-700 mb-8">
                    في يوروكويست، قيمنا توجه كل ما نقوم به. إنها تشكل تفاعلاتنا وقراراتنا والطريقة التي نبني بها برامجنا.
                  </p>

                  {/* Values Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Quality */}
                    <div className="col-span-1 md:col-span-2 border border-[#C5C5C5] rounded-xl p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 flex items-center justify-center">
                          <img src="/assets/icons/value-icon1.svg" alt="" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#3E5EC0]">
                          الجودة
                        </h3>
                      </div>
                      <div className="border-t border-[#C5C5C5] pt-4">
                        <p className="text-gray-600 text-base font-medium">
                          نصنع كل تفصيلة لنقدم نتائج استثنائية ودائمة.
                        </p>
                      </div>
                    </div>

                    {/* Professionalism */}
                    <div className="col-span-1 border border-[#C5C5C5] rounded-xl p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 flex items-center justify-center">
                          <img src="/assets/icons/value-icon2.svg" alt="" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#3E5EC0]">
                          الاحترافية
                        </h3>
                      </div>
                      <div className="border-t border-[#C5C5C5] pt-4">
                        <p className="text-gray-600 text-base font-medium">
                          نحافظ على معايير عالية من خلال الانضباط والاحترام والموثوقية.
                        </p>
                      </div>
                    </div>

                    {/* Transparency */}
                    <div className="col-span-1 border border-[#C5C5C5] rounded-xl p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 flex items-center justify-center">
                          <img src="/assets/icons/value-icon3.svg" alt="" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#3E5EC0]">
                          الشفافية
                        </h3>
                      </div>
                      <div className="border-t border-[#C5C5C5] pt-4">
                        <p className="text-gray-600 text-base font-medium">
                          نتواصل بشفافية، ونضمن الصدق في كل قرار نتخذه.
                        </p>
                      </div>
                    </div>

                    {/* Continuous Innovation */}
                    <div className="col-span-1 md:col-span-2 border border-[#C5C5C5] rounded-xl p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 flex items-center justify-center">
                          <img src="/assets/icons/value-icon4.svg" alt="" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#3E5EC0]">
                          الابتكار المستمر
                        </h3>
                      </div>
                      <div className="border-t border-[#C5C5C5] pt-4">
                        <p className="text-gray-600 text-base font-medium">
                          نتطور باستمرار، ونحول الأفكار إلى حلول أذكى وأفضل.
                        </p>
                      </div>
                    </div>

                    {/* Results-Oriented Approach */}
                    <div className="col-span-1 md:col-span-2 border border-[#C5C5C5] rounded-xl p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 flex items-center justify-center">
                          <img src="/assets/icons/value-icon5.svg" alt="" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#3E5EC0]">
                          التوجه نحو النتائج
                        </h3>
                      </div>
                      <div className="border-t border-[#C5C5C5] pt-4">
                        <p className="text-gray-600 text-base font-medium">
                          نركز على نتائج قابلة للقياس تحدث تأثيرًا حقيقيًا ودائمًا.
                        </p>
                      </div>
                    </div>

                    {/* Integrity */}
                    <div className="col-span-1 border border-[#C5C5C5] rounded-xl p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 flex items-center justify-center">
                          <img src="/assets/icons/value-icon6.svg" alt="" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#3E5EC0]">
                          النزاهة
                        </h3>
                      </div>
                      <div className="border-t border-[#C5C5C5] pt-4">
                        <p className="text-gray-600 text-base font-medium">
                          نفعل ما هو صحيح، حتى عندما لا يراقبنا أحد.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Our Clients */}
            <section
              id="our-clients"
              className="bg-white md:py-11 py-8 scroll-mt-24"
            >
              <div className="flex flex-col gap-12 relative z-10">
                <div className="w-full">
                  <SectionTitle
                    title="عملاؤنا"
                    highlight=""
                    className="!mb-4"
                  />
                  <p className="font-normal text-lg leading-7 text-gray-700 mb-8">
                    في يوروكويست نفخر بخدمة:
                  </p>

                  {/* Clients Content */}
                  <div className="border border-gray-200 rounded-3xl md:p-5 p-2.5 flex flex-col lg:flex-row gap-8">
                    {/* Left Side - Image */}
                    <div className="w-full lg:w-1/2 rounded-2xl">
                      <img
                        src="/assets/images/clients-handshake.png"
                        alt="Business partnership"
                        className="w-full h-auto rounded-2xl"
                      />
                    </div>

                    {/* Right Side - Client Categories */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-2.5">
                      {/* Government Ministries */}
                      <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-2 hover:border-[#3E5EC0] hover:shadow-md transition-all">
                        <div className="w-8 h-8 flex items-center justify-center">
                          <img src="/assets/icons/client-icon1.svg" alt="" />
                        </div>
                        <span className="text-xl font-semibold text-black">
                          الوزارات الحكومية
                        </span>
                      </div>

                      {/* Oil & Energy Organizations */}
                      <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-2 hover:border-[#3E5EC0] hover:shadow-md transition-all">
                        <div className="w-8 h-8 flex items-center justify-center">
                          <img src="/assets/icons/client-icon2.svg" alt="" />
                        </div>
                        <span className="text-xl font-semibold text-black">
                          مؤسسات النفط والطاقة
                        </span>
                      </div>

                      {/* Financial Institutions */}
                      <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-2 hover:border-[#3E5EC0] hover:shadow-md transition-all">
                        <div className="w-8 h-8 flex items-center justify-center">
                          <img src="/assets/icons/client-icon3.svg" alt="" />
                        </div>
                        <span className="text-xl font-semibold text-black">
                          المؤسسات المالية
                        </span>
                      </div>

                      {/* Telecom Companies */}
                      <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-2 hover:border-[#3E5EC0] hover:shadow-md transition-all">
                        <div className="w-8 h-8 flex items-center justify-center">
                          <img src="/assets/icons/client-icon4.svg" alt="" />
                        </div>
                        <span className="text-xl font-semibold text-black">
                          شركات الاتصالات
                        </span>
                      </div>

                      {/* Educational Bodies */}
                      <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-2 hover:border-[#3E5EC0] hover:shadow-md transition-all">
                        <div className="w-8 h-8 flex items-center justify-center">
                          <img src="/assets/icons/client-icon5.svg" alt="" />
                        </div>
                        <span className="text-xl font-semibold text-black">
                          الهيئات التعليمية
                        </span>
                      </div>

                      {/* Leading Multinational Corporations */}
                      <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-2 hover:border-[#3E5EC0] hover:shadow-md transition-all">
                        <div className="w-8 h-8 flex items-center justify-center">
                          <img src="/assets/icons/client-icon6.svg" alt="" />
                        </div>
                        <span className="text-xl font-semibold text-black">
                          الشركات متعددة الجنسيات الرائدة
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Our Achievements */}
            <section
              id="our-achievements"
              className="bg-white md:py-11 py-8 scroll-mt-24"
            >
              <div className="flex flex-col gap-12 relative z-10">
                <div className="w-full">
                  <SectionTitle
                    title="إنجازاتنا"
                    highlight=""
                    className="!mb-10"
                  />

                  {/* Achievements Content */}
                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                    {/* Left Side - Trophy Illustration */}
                    <div className="w-full lg:w-1/3 items-center justify-center md:flex hidden">
                      <div className="relative max-w-[200px] lg:max-w-none">
                        {/* Trophy Icon */}
                        <img
                          src="/assets/icons/achievement.svg"
                          alt=""
                          className="w-full h-auto"
                        />
                      </div>
                    </div>

                    {/* Right Side - Achievement Stats */}
                    <div className="w-full lg:w-2/3 flex flex-col md:gap-10 gap-8">
                      {/* Top Section - Network Info */}
                      <div className="flex flex-col text-center justify-center items-center gap-3 md:mt-0 mt-8">
                        <div className="flex-shrink-0">
                          <img
                            src="/assets/icons/achievement-icon.svg"
                            alt=""
                            className="w-12 h-12"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg md:text-xl font-semibold text-black leading-relaxed">
                            شبكة عالمية من المدربين المعتمدين دوليًا
                          </h3>
                        </div>
                      </div>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
                        {/* 25+ Years */}
                        <div className="flex flex-col text-center">
                          <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00B67A] mb-2">
                            +25
                          </div>
                          <p className="text-sm md:text-base font-semibold text-black">
                            عامًا من الخبرة
                          </p>
                        </div>

                        {/* 1000+ Programs */}
                        <div className="flex flex-col text-center">
                          <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00B67A] mb-2">
                            +1000
                          </div>
                          <p className="text-sm md:text-base font-semibold text-black">
                            برنامج تدريبي متخصص تم تقديمه
                          </p>
                        </div>

                        {/* 15+ Cities */}
                        <div className="flex flex-col text-center">
                          <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00B67A] mb-2">
                            +15
                          </div>
                          <p className="text-sm md:text-base font-semibold text-black">
                            مدينة وعاصمة عالمية
                          </p>
                        </div>

                        {/* 1000+ Participants */}
                        <div className="flex flex-col text-center">
                          <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00B67A] mb-2">
                            +1000
                          </div>
                          <p className="text-sm md:text-base font-semibold text-black">
                            مشارك تم تدريبهم عبر مختلف الصناعات
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Why EuroQuest International */}
            <section
              id="why-euroquest"
              className="bg-white md:py-11 py-8 scroll-mt-24"
            >
              <div className="flex flex-col gap-12 relative z-10">
                <div className="w-full">
                  <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center lg:items-start">
                    {/* Left Side - Question Mark Icon */}
                    <div className="w-full lg:w-1/4 flex items-start justify-center lg:justify-start">
                      <div className="relative max-w-[150px] lg:max-w-none">
                        <img
                          src="/assets/icons/why-choose-icon.svg"
                          alt=""
                          className="w-full h-auto"
                        />
                      </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="w-full lg:w-3/4 text-center lg:text-left">
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
                        لماذا تختار{" "}
                        <span className="text-[#3E5EC0]">يوروكويست؟</span>
                      </h2>
                      <p className="text-base md:text-lg leading-relaxed text-gray-700">
                        برامج تغطي{" "}
                        <span className="font-semibold">
                          أكثر من 20 فئة تدريبية
                        </span>{" "}
                        منهجيات تجمع بين النظرية والتطبيق حلول مصممة خصيصًا للمؤسسات والأفراد حضور عالمي في مدن مثل دبي، لندن، برشلونة، إسطنبول، فيينا، باريس، جنيف، وأكثر تركيز قوي على المواضيع الناشئة مثل{" "}
                        <span className="font-semibold">
                          الذكاء الاصطناعي، الاستدامة، والتحول الرقمي
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Our Impact */}
            <section
              id="our-impact"
              className="bg-[#F8FBFF] md:py-11 py-8 scroll-mt-24"
            >
              <Container className="flex flex-col gap-12 relative z-10">
                <div className="w-full">
                  <SectionTitle
                    title="تأثيرنا"
                    highlight=""
                    className="!mb-10"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center text-center gap-4">
                      <img
                        src="/assets/icons/check.svg"
                        alt=""
                        className="w-14 h-14 md:w-16 md:h-16"
                      />
                      <h3 className="text-lg font-semibold text-black mb-2">
                        المؤسسات تحسن كفاءة القوى العاملة
                      </h3>
                    </div>

                    <div className="flex flex-col items-center text-center gap-4">
                      <img
                        src="/assets/icons/check.svg"
                        alt=""
                        className="w-14 h-14 md:w-16 md:h-16"
                      />
                      <h3 className="text-lg font-semibold text-black mb-2">
                        المهنيون يكتسبون مهارات للتقدم الوظيفي
                      </h3>
                    </div>

                    <div className="flex flex-col items-center text-center gap-4">
                      <img
                        src="/assets/icons/check.svg"
                        alt=""
                        className="w-14 h-14 md:w-16 md:h-16"
                      />
                      <h3 className="text-lg font-semibold text-black mb-2">
                        الفرق تحقق تعاونًا ونتائج أفضل
                      </h3>
                    </div>
                  </div>
                </div>
              </Container>
            </section>

            {/* Future Outlook */}
            <section
              id="future-outlook"
              className="bg-white md:py-11 py-8 scroll-mt-24"
            >
              <div className="flex flex-col gap-12 relative z-10">
                <div className="w-full">
                  <SectionTitle
                    title="النظرة المستقبلية"
                    highlight=""
                    className="!mb-10"
                  />

                  {/* Future Outlook Content */}
                  <div className="border border-gray-200 rounded-2xl  md:p-5 p-2.5 flex flex-col lg:flex-row gap-6 lg:gap-8">
                    {/* Left Side - Image */}
                    <div className="w-full lg:w-1/2">
                      <img
                        src="/assets/images/vr-future.png"
                        alt="Future technology with VR"
                        className="w-full h-auto rounded-xl lg:rounded-2xl"
                      />
                    </div>

                    {/* Right Side - Goals */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-4 md:gap-6">
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-black text-center lg:text-left">
                        نهدف إلى التوسع عالميًا من خلال:
                      </h3>

                      {/* Goal List */}
                      <ul className="space-y-4 md:space-y-6">
                        <li className="flex items-start gap-3 md:gap-4">
                          <div className="flex-shrink-0 w-2 h-2 bg-black rounded-full mt-2 md:mt-3"></div>
                          <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                            تعزيز عروضنا في الذكاء الاصطناعي.
                          </p>
                        </li>

                        <li className="flex items-start gap-3 md:gap-4">
                          <div className="flex-shrink-0 w-2 h-2 bg-black rounded-full mt-2 md:mt-3"></div>
                          <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                            الاستدامة والتحول الرقمي.
                          </p>
                        </li>

                        <li className="flex items-start gap-3 md:gap-4">
                          <div className="flex-shrink-0 w-2 h-2 bg-black rounded-full mt-2 md:mt-3"></div>
                          <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                            ضمان بقاء عملائنا جاهزين للمستقبل في عالم سريع التطور.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Container>

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
                التغطية <span className="text-[#3E5EC0]">الجغرافية</span>
              </h2>
              <p className="text-[#5A5A5A]">اعثر على خدماتنا في 25 مدينة حول العالم</p>
              <Button className="max-w-[200px]">
                عرض الكل
                <i className="fa-solid fa-chevron-left mr-2"></i>
              </Button>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
