import React from "react";
import type { ReactNode } from "react";

interface Section {
  id: string;
  component: ReactNode;
}

interface VerticalScrollNavProps {
  sections: Section[];
  currentSection: number;
  onDotClick: (index: number) => void;
}

const VerticalScrollNav: React.FC<VerticalScrollNavProps> = ({
  sections,
  currentSection,
  onDotClick,
}) => (
  <div className="hidden [@media(min-width:1220px)]:flex flex-col items-center gap-4 fixed right-4 top-1/2 -translate-y-1/2 z-[200] select-none">
    {sections.map((section, idx) => (
      <button
        key={section.id}
        aria-label={`Go to section ${idx + 1}`}
        onClick={() => onDotClick(idx)}
        className={`transition-all duration-300 w-4 h-4 rounded-full border-2 focus:outline-none
          ${currentSection === idx
            ? 'border-[#D65A31] bg-[#D65A31] ring-2 ring-[#FFAB91] dark:ring-[#FF5722]'
            : 'border-[#cccccc] dark:border-[#2d2d2d] bg-[#EEEEEE] dark:bg-[#222831] hover:border-[#FF5722] hover:bg-[#FFCCBC] dark:hover:bg-[#BF360C]'}
        `}
        style={{minHeight: 0, minWidth: 0}}
        tabIndex={0}
      />
    ))}
    {/* Optional mouse icon as scroll hint */}
    <div className="mt-6 animate-bounce text-[#9ca3af] dark:text-[#6b7280]">
      <svg
        width="24"
        height="36"
        viewBox="0 0 24 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="4"
          y="2"
          width="16"
          height="32"
          rx="8"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="12" cy="10" r="2" fill="currentColor" />
      </svg>
    </div>
  </div>
);

export default VerticalScrollNav;
