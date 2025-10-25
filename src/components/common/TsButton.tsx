import  React from "react"
import style from "../style/button.module.css"


 // for size classes
 const sizeClasses = {
  small: "px-2 py-1 text-sm",
  medium: "px-4 py-1.5 text-base",
  large: "px-4 py-2 text-[1rem]" 
}

// for color classes
const colorClasses = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-gray-500 text-white",
    success: "bg-green-500 text-white",
    danger: "bg-red-500 text-white",
    warning: "bg-yellow-500 text-white",
    info: "bg-teal-500 text-white",
    light: "hover:bg-gray-100 !text-black",
    dark: "!bg-black text-white"
}



// Props type definition

type TsButtonProps = {
  label?: string;
  children?: React.ReactNode | string;
  onClick?: () => void;
  className?: string;
  size?: keyof typeof sizeClasses;
  icon?: React.ReactNode;
  fontSize?: string;
  colorVariant?: keyof typeof colorClasses;
}

// TsButton Component

const TsButton: React.FC<TsButtonProps> = ({
  label,
  onClick,
  size = "medium",
  colorVariant = "primary",
  icon,
  fontSize,
  className,
  children
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        ${className}
        ${fontSize} 
        ${sizeClasses[size]} 
        ${colorClasses[colorVariant]}
        ${style.tsButton}
        flex 
        items-center
        text-black
        gap-2
        rounded-md
        cursor-pointer
        hover:opacity-80 active:scale-95
        `}
    >
      {icon && <span className="icon">{icon}</span>}
      {children || label}
    </button>
  )
}

export default TsButton
