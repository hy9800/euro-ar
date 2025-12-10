import SectionTitle from "@/components/shared/section-title";
import React from "react";

export default function OurValues() {
  return (
    <section id="our-values" className="bg-white md:py-11 py-8 scroll-mt-24">
      <div className="flex flex-col gap-12 relative z-10">
        <div className="w-full">
          <SectionTitle title="قيمنا" highlight="" className="!mb-4" />
          <p className="font-normal text-sm md:text-base text-gray-700 mb-8">
            في EuroQuest، توجه قيمنا كل ما نقوم به. إنها تشكل تفاعلاتنا وقراراتنا والطريقة التي نبني بها برامجنا.
          </p>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Quality */}
            <div className="border border-[#C5C5C5] rounded-xl p-4">
              <div className="flex items-center gap-2 md:gap-3 mb-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <img src="/assets/icons/value-icon1.svg" alt="" />
                </div>
                <h3 className="text-lg font-bold text-[#3E5EC0]">الجودة</h3>
              </div>
              <div className="border-t border-[#C5C5C5] pt-4">
                <p className="text-gray-600 text-sm md:text-base font-medium">
                  نحن نصمم كل تفصيلة لتقديم نتائج استثنائية ودائمة.
                </p>
              </div>
            </div>

            {/* Professionalism */}
            <div className="border border-[#C5C5C5] rounded-xl p-4">
              <div className="flex items-center gap-2 md:gap-3 mb-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <img src="/assets/icons/value-icon2.svg" alt="" />
                </div>
                <h3 className="text-lg font-bold text-[#3E5EC0]">
                  الاحترافية
                </h3>
              </div>
              <div className="border-t border-[#C5C5C5] pt-4">
                <p className="text-gray-600 text-sm md:text-base font-medium">
                  نحافظ على معايير عالية من خلال الانضباط والاحترام والموثوقية.
                </p>
              </div>
            </div>

            {/* Transparency */}
            <div className="border border-[#C5C5C5] rounded-xl p-4">
              <div className="flex items-center gap-2 md:gap-3 mb-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <img src="/assets/icons/value-icon3.svg" alt="" />
                </div>
                <h3 className="text-lg font-bold text-[#3E5EC0]">
                  الشفافية
                </h3>
              </div>
              <div className="border-t border-[#C5C5C5] pt-4">
                <p className="text-gray-600 text-sm md:text-base font-medium">
                  نتواصل بصراحة، ونتأكد من الصدق في كل قرار نتخذه.
                </p>
              </div>
            </div>

            {/* Continuous Innovation */}
            <div className="border border-[#C5C5C5] rounded-xl p-4">
              <div className="flex items-center gap-2 md:gap-3 mb-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <img src="/assets/icons/value-icon4.svg" alt="" />
                </div>
                <h3 className="text-lg font-bold text-[#3E5EC0]">
                  الابتكار المستمر
                </h3>
              </div>
              <div className="border-t border-[#C5C5C5] pt-4">
                <p className="text-gray-600 text-sm md:text-base font-medium">
                  نتطور باستمرار، نحول الأفكار إلى حلول أذكى وأفضل.
                </p>
              </div>
            </div>

            {/* Results-Oriented Approach */}
            <div className="border border-[#C5C5C5] rounded-xl p-4">
              <div className="flex items-center gap-2 md:gap-3 mb-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <img src="/assets/icons/value-icon5.svg" alt="" />
                </div>
                <h3 className="text-lg font-bold text-[#3E5EC0]">
                  نهج موجه نحو النتائج
                </h3>
              </div>
              <div className="border-t border-[#C5C5C5] pt-4">
                <p className="text-gray-600 text-sm md:text-base font-medium">
                  نركز على النتائج القابلة للقياس التي تخلق تأثيرًا حقيقيًا ودائمًا.
                </p>
              </div>
            </div>

            {/* Integrity */}
            <div className="border border-[#C5C5C5] rounded-xl p-4">
              <div className="flex items-center gap-2 md:gap-3 mb-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <img src="/assets/icons/value-icon6.svg" alt="" />
                </div>
                <h3 className="text-lg font-bold text-[#3E5EC0]">النزاهة</h3>
              </div>
              <div className="border-t border-[#C5C5C5] pt-4">
                <p className="text-gray-600 text-sm md:text-base font-medium">
                  نفعل ما هو صحيح، حتى عندما لا يراقبنا أحد.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
