import { Metadata } from "next";
import JoinPageClient from "./_components/join-page-client";
import Schema from "@/components/shared/schema";

// Generate metadata dynamically
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Join Our Team | الدول التدريبية العالمية Professional Development",
    description:
      "Join الدول التدريبية العالمية's team of professional trainers and consultants. We're looking for talented individuals passionate about training, development, and making an impact in professional education.",
    keywords:
      "join الدول التدريبية العالمية, career opportunities, training jobs, professional development careers, trainer positions, consultant jobs, education careers",
  };
}

export default function JoinPage() {
  return (
    <>
      <Schema 
        pageType="join"
        pageTitle="Join Our Team | الدول التدريبية العالمية Professional Development"
        pageDescription="Join الدول التدريبية العالمية's team of professional trainers and consultants. We're looking for talented individuals passionate about training, development, and making an impact in professional education."
        pageUrl="https://euroqst.com/join"
      />
      <JoinPageClient />
    </>
  );
}
