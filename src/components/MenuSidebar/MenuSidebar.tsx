import React, { useState, useEffect, useRef } from 'react';
import { ScrollArea } from '../ui/Alert';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../ui/Button';

export function MenuSidebar() {
  const sections: string[] = [
    "What's new",
    "Соло баскеты",
    "Комбо",
    "Боксы",
    "Бургеры и сэндвичи",
    "Комбо баскеты",
    "Сочная курочка",
    "Снэки",
    "Напитки",
    "Дополнительно"
  ];

  const [activeSection, setActiveSection] = useState<string>(sections[0]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = entry.target.getAttribute('data-menu-section');
          if (section) {
            setActiveSection(section);
          }
        }
      });
    }, options);

    const observedSections = document.querySelectorAll('section[data-menu-section]');
    observedSections.forEach((section) => {
      observerRef.current?.observe(section);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(`section[data-menu-section="${sectionId}"]`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ScrollArea className="h-full px-12 bg-[#F5F4F2]">
      <div className="py-7">
        <div className="w-full h-[4rem] bg-[#FFFFFF] hover:bg-[#F5F5F5] rounded-[40px] p-5 mb-4 font-medium whitespace-nowrap align-right">
          <button className="flex items-center mb-6 text-black font-medium">
            <ArrowLeft className="h-5 w-5 mr-2" />
            All restaurants
          </button>
        </div>
         {/* Mobile Bottom Navigation */}
         <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t p-4">
          <div className="flex justify-between max-w-md mx-auto">
            <Button variant="ghost">Menu</Button>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">
              Cart
            </Button>
          </div>
        </div>
        <h2 className="text-lg align-left font-semibold mb-4 text-black">Menu</h2>
        {sections.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={`block align-center text-base font-medium text-black mb-3 rounded-lg px-2 py-1 transition-all ${
              activeSection === section ? 'bg-[#FFFFFF] rounded-lg' : 'hover:bg-gray-200 text-black'
            }`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(section);
            }}
          >
            {section}
          </a>
        ))}
      </div>
    </ScrollArea>
  );
}
