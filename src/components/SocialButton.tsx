import React from "react";

// 1. Định nghĩa kiểu Props
interface SocialButtonProps {
  icon: React.ReactElement;
  href: string;
  colorClass: string;
  applyColor?: boolean;
  rotation?: "rotate-3" | "-rotate-3" | "rotate-2" | "-rotate-2" | "rotate-0";
}

const SocialButton: React.FC<SocialButtonProps> = ({
  icon,
  href,
  colorClass,
  applyColor = false,
  rotation = "rotate-3",
}) => {
  const hoverShadowClass = `hover:shadow-${colorClass}/30`; // Ví dụ: hover:shadow-green-500/30
  const hoverBorderClass = `hover:border-${colorClass}/50`; // Ví dụ: hover:border-green-500/50
  const hoverFromClass = `hover:from-${colorClass}/10`; // Ví dụ: hover:from-green-500/10
  const viaColorClass = `via-${colorClass}/20`; // Ví dụ: via-green-400/20 (cho hiệu ứng shine)

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        p-5 rounded-full backdrop-blur-lg border 
        border-${colorClass}/20 
        bg-gradient-to-tr from-black/60 to-black/40 shadow-lg 
        hover:shadow-2xl ${hoverShadowClass} 
        hover:scale-110 hover:${rotation} active:scale-95 active:rotate-0 
        transition-all duration-300 ease-out cursor-pointer 
        ${hoverBorderClass} 
        hover:bg-gradient-to-tr ${hoverFromClass} hover:to-black/40 
        group relative overflow-hidden flex items-center justify-center
      `}
    >
      {/* Hiệu ứng shine */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-transparent ${viaColorClass} to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out`}
      />

      {/* Icon */}
      <div
        className={`w-7 h-7 fill-current text-${colorClass} group-hover:text-${colorClass}/90 transition-colors duration-300`}
      >
        {icon}
      </div>
    </a>
  );
};

export default SocialButton;
