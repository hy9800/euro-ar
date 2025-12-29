"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "who-is-euroquest", label: "عن يوركويست إنترناشيونال"},
  { id: "our-vision", label: "رؤيتنا" },
  { id: "our-mission", label: "رسالتنا" },
  { id: "our-values", label: "قيمنا" },
  { id: "our-clients", label: "عملاؤنا" },
  { id: "our-achievements", label: "أبرز إنجازاتنا" },
  { id: "why-euroquest", label: "لماذا يوروكويست ؟" },
  { id: "our-impact", label: "أثرنا" },
  { id: "future-outlook", label: "النظرة المستقبلية" },
];

export default function AboutNavigation() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    // Add smooth scrolling to html element
    document.documentElement.style.scrollBehavior = "smooth";

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Offset for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <aside className="hidden xl:block w-full max-w-[220px] shrink-0">
      <div className="sticky top-24">
        <nav className="space-y-2">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => handleClick(e, section.id)}
              className={`flex items-center gap-2  font-semibold transition-all py-2.5 px-3 rounded-lg ${
                activeSection === section.id
                  ? "text-[#3E5EC0] bg-[#3E5EC0]/5"
                  : "text-gray-800 hover:text-[#3E5EC0] hover:bg-gray-50"
              }`}
            >
              <span
                className={`text-sm transition-colors ${
                  activeSection === section.id
                    ? "text-[#00B67A]"
                    : "text-[#00B67A]"
                }`}
              >
                ➤
              </span>
              <span className="text-sm">{section.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
