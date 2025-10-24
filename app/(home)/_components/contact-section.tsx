import Container from "@/components/shared/container";
import JoinBtn from "@/components/shared/join-btn";
interface ContactSectionProps {
  className?: string;
}

export default function ContactSection({
  className = "",
}: ContactSectionProps) {
  return (
    <>
      <section className={`pt-[10px] pb-[30px] bg-[#F2F8FF] ${className}`}>
        <Container>
          <div className="flex items-center md:justify-evenly justify-center md:flex-row flex-col-reverse gap-5">
            {/* Request Content */}
            <div className="max-w-[540px] text-center md:text-start">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8">
                انضم إلى واحدة من أفضل{" "}
                <span className="text-[#3E5EC0] font-bold">
                  مؤسسات التدريب
                </span>{" "}
                في العالم
              </p>

              <JoinBtn />
            </div>

            {/* Request Image */}
            <div className="relative max-w-[400px] flex items-center justify-center">
              <img
                src="/assets/images/request-call-img.png"
                alt="رسم توضيحي لطلب الاتصال"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
