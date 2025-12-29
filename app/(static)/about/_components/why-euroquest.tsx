
export default function WhyEuroquest() {
  return (
    <section id="why-euroquest" className="md:my-14 my-10 scroll-mt-24">
      <div className="flex flex-col gap-12 relative z-10">
        <div className="w-full">
          <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
            {/* Left Side - Question Mark Icon */}
            <div className="w-full lg:w-3/4 flex flex-col gap-4">
              <h2 className="text-xl md:text-2xl font-bold mb-2">
               لماذا يوروكويست
                إنترناشيونال ؟
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-black rounded-full md:mt-[9px]"></div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    برامج تغطي أكثر من 20 تخصصًا تدريبيًا
                  </p>
                </li>

                <li className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-black rounded-full md:mt-[9px]"></div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    منهجيات عملية تربط النظرية بالتطبيق
                  </p>
                </li>
                <li className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-black rounded-full md:mt-[9px]"></div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    برامج قابلة للتخصيص وفق احتياجات المؤسسات
                  </p>
                </li>
                <li className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-black rounded-full md:mt-[9px]"></div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    حضور دولي في مدن مثل دبي، لندن، برشلونة، إسطنبول، فيينا،
                    باريس، جنيف وغيرها
                  </p>
                </li>
                <li className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-black rounded-full md:mt-[9px]"></div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    تركيز على الموضوعات الحديثة مثل الذكاء الاصطناعي، الاستدامة،
                    والتحولات الرقمية
                  </p>
                </li>
              </ul>
            </div>

            {/* Right Side - Content */}
            <div className="w-full max-w-[200px] flex items-start justify-center lg:justify-start">
              <div className="relative">
                <img
                  src="/assets/icons/why-choose-icon.svg"
                  alt=""
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
