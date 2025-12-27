"use client"
import { useEffect } from "react";

interface HeadingStylerProps {
  content: string;
}

export default function HeadingStyler({ content }: HeadingStylerProps) {
  useEffect(() => {
    // Function to style headings with specific classes
    const styleHeadings = () => {
      const overviewText = document.querySelector('.overview-text');
      if (!overviewText) return;

      // Try multiple selectors to catch all strong elements in paragraphs
      const strongElements = overviewText.querySelectorAll('p strong, strong');
      
      // Define main headings that should get primary styling (both English and Arabic)
      const mainHeadings = [
        // English headings
        'Course Overview',
        'Course Benefits', 
        'Course Objectives',
        'Training Methodology',
        'Target Audience',
        'Target Competencies',
        'Course Outline',
        'Why Attend',
        // Arabic headings
        'نظرة عامة على الدورة:',
        'فوائد الدورة:',
        'أهداف الدورة:',
        'منهجية التدريب:',
        'الفئة المستهدفة:',
        'الكفاءات المستهدفة:',
        'محاور الدورة:',
        'القيمة التطبيقية للدورة:'
      ];
      
      strongElements.forEach(strong => {
        const text = strong.textContent?.trim() || '';
        const parent = strong.parentElement;
        
        // Check if this is a heading (strong element that's the main content of its paragraph)
        let isHeading = false;
        if (parent && parent.tagName === 'P') {
          const parentText = parent.textContent?.trim() || '';
          const strongText = strong.textContent?.trim() || '';
          
          // It's a heading if:
          // 1. The paragraph text matches the strong text exactly (ignoring whitespace/br)
          // 2. The paragraph text starts with the strong text
          // 3. The strong is the only significant content in the paragraph
          const parentTextNormalized = parentText.replace(/\s+/g, ' ').trim();
          const strongTextNormalized = strongText.replace(/\s+/g, ' ').trim();
          
          if (parentTextNormalized === strongTextNormalized || 
              parentTextNormalized.startsWith(strongTextNormalized) ||
              parent.children.length === 1) {
            isHeading = true;
          }
        } else {
          // If not in a paragraph, treat as heading
          isHeading = true;
        }
        
        if (!isHeading) return;
        
        // Remove existing classes to prevent duplicates
        strong.classList.remove('unit-heading', 'secondary-heading');
        
        // Check if it's a Unit heading (English or Arabic) - ONLY unit headings get unit-heading class
        if (text.startsWith('Unit ') || text.startsWith('الوحدة')) {
          strong.classList.add('unit-heading');
        }
        // Check if it's NOT one of the main headings, make it secondary
        else if (!mainHeadings.includes(text)) {
          strong.classList.add('secondary-heading');
        }
        // Main headings keep the default primary styling (no additional class needed)
      });
    };

    // Multiple attempts to ensure styling is applied
    const attemptStyling = () => {
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        styleHeadings();
        // Try again after delays to catch late-rendered content
        setTimeout(() => requestAnimationFrame(styleHeadings), 200);
        setTimeout(() => requestAnimationFrame(styleHeadings), 500);
        setTimeout(() => requestAnimationFrame(styleHeadings), 1000);
      });
    };

    // Style headings when component mounts or content changes
    attemptStyling();
    
    // Set up MutationObserver to handle dynamic content changes
    let observer: MutationObserver | null = null;
    const setupObserver = () => {
      const overviewText = document.querySelector('.overview-text');
      if (overviewText && !observer) {
        observer = new MutationObserver(() => {
          // Debounce the styling to avoid excessive calls
          setTimeout(() => requestAnimationFrame(styleHeadings), 100);
        });
        
        observer.observe(overviewText, {
          childList: true,
          subtree: true,
          characterData: true,
          attributes: true
        });
      }
    };
    
    // Setup observer with retry
    setupObserver();
    setTimeout(setupObserver, 100);
    setTimeout(setupObserver, 500);
    
    // Also call when DOM is ready (fallback for dynamic content)
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', attemptStyling);
    } else {
      // If DOM is already loaded, try again after a delay
      setTimeout(attemptStyling, 100);
    }
    
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [content]);

  return null; // This component doesn't render anything
}
