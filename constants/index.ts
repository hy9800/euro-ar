import { generateDynamicMonths } from "@/functions";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";


export const months = generateDynamicMonths();
export const popularCategories = [
  {
    slug: "leadership-strategic-management",
    name: "القيادة والإدارة الاستراتيجية",
  },
  {
    slug: "financial-management-investment-analysis",
    name: "الإدارة المالية وتحليل الاستثمار",
  },
  {
    slug: "project-management-planning",
    name: "إدارة المشاريع والتخطيط",
  },
  {
    slug: "human-resources-management-training",
    name: "إدارة الموارد البشرية والتدريب",
  },
  {
    slug: "public-relations-corporate-communication",
    name: "العلاقات العامة والاتصال المؤسسي",
  },
  {
    slug: "data-analytics-ai-decision-making",
    name: "تحليل البيانات والذكاء الاصطناعي واتخاذ القرار",
  },
];

export const quickAccessLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/training-courses", label: "الفئات" },
  { href: "/about", label: "من نحن" },
  { href: "/blogs", label: "المدونات" },
  { href: "/sitemap", label: "خريطة الموقع" },
  { href: "/contact", label: "اتصل بنا" },
  { href: "/terms", label: "الشروط والأحكام" },
  { href: "/privacy-policy", label: "سياسة الخصوصية" },
];

export const socialLinks = [
  { href: "#", Icon: FaFacebookF },
  { href: "#", Icon: FaInstagram },
  { href: "#", Icon: FaXTwitter  },
  { href: "#", Icon: FaLinkedinIn },
];

export const orderedMonths = generateDynamicMonths();

export const durationOptions = [
  { value: 5, label: "أسبوع واحد" },
  { value: 10, label: "أسبوعين" },
];

// API Endpoints
export const API_ENDPOINTS = {
  CATEGORIES: '/training-courses',
  COURSES: '/courses',
  CITIES: '/training-cities',
  UPCOMING_COURSES: '/get-upcoming-courses',
  BLOGS: '/blogs',
  SITEMAP: '/sitemap',
} as const;

export const services = [
  {
    icon: "https://euroqst.com/assets/images/service-icon3.svg",
    title: "الدورات الداخلية",
    description: "تقدم يوروكويست إنترناشيونال دورات تدريبية مخصصة داخل المؤسسة."
  },
  {
    icon: "https://euroqst.com/assets/images/service-icon2.svg",
    title: "الدورات الحضورية", 
    description: "تقدم يوروكويست إنترناشيونال دورات تدريبية تُعقد في مواقع مختارة بعناية في المدن والعواصم حول العالم"
  },
  {
    icon: "https://euroqst.com/assets/images/service-icon1.svg",
    title: "الدورات الإلكترونية",
    description: "تقدم يوروكويست إنترناشيونال دورات تدريبية مرنة تُقدم عن بُعد."
  }
];