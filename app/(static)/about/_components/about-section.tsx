import SectionTitle from "@/components/shared/section-title";

export default function AboutSection() {
  return (
    <section id="who-is-euroquest" className="scroll-mt-24">
      <div className="flex flex-col gap-12 relative z-10">
        <div className="w-full">
          <SectionTitle
            title="من هو يوروكويست"
            highlight=""
            className="!mb-4"
          />
          <p className="font-normal text-sm md:text-base leading-7">
            تأسست يوركويست إنترناشيونال عام 2015 على يد فريق يمتلك خبرة تفوق 25
            عامًا في التدريب والتطوير المهني. خلال مسيرتنا، قدمنا أكثر من 1000
            برنامج تدريبي شارك فيها ما يزيد عن 15,000 متدرب في مختلف القطاعات
            وعواصم عالمية مثل دبي، لندن، برشلونة، إسطنبول، فيينا، باريس، وجنيف.
          </p>
        </div>
      </div>
    </section>
  );
}
