import React from "react";

export default function VissionMission() {
  return (
    <>
      {/* Our Vission */}
      <section id="our-vision" className="scroll-mt-24">
        <div className="flex flex-col gap-12 relative z-10 md:my-10 my-8">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="w-20 flex-shrink-0">
              <img
                src="/assets/icons/vision-icon.svg"
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="text-center sm:text-start">
              <h3 className="mb-1 text-xl md:text-2xl font-bold capitalize">
                <span className="text-[#3E5EC0]">رؤيتنا</span>
              </h3>
              <p className="font-normal text-sm md:text-base leading-7">
                أن نصبح الوجهة الأولى عالميًا في التدريب والتطوير المهني من خلال
                حلول تعليمية مبتكرة تترك أثرًا مستدامًا.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section id="our-mission" className="scroll-mt-24 md:my-10 my-8">
        <div className="flex flex-col gap-12 relative z-10">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="w-20 flex-shrink-0">
              <img
                src="/assets/icons/mission-icon.svg"
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="text-center sm:text-right">
              <h3 className="mb-1 text-xl md:text-2xl font-bold capitalize">
                <span className="text-[#3E5EC0]">رسالتنا</span>
              </h3>
              <p className="font-normal text-sm md:text-base">
                تمكين الأفراد والمؤسسات من تطوير المهارات وتعزيز الأداء عبر
                برامج تدريبية متخصصة تدمج بين المعرفة النظرية والتطبيق العملي،
                مع تصميم حلول مرنة تناسب كل مؤسسة.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
