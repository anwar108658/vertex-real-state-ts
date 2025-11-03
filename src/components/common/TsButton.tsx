import  React from "react"
import style from "../style/button.module.css"


 // for size classes
 const sizeClasses = {
  small: "px-2 py-1",
  medium: "px-4 py-1.5",
  large: "px-4 py-2 " 
}

// for color classes
const colorClasses = {
  primary: "bg-blue-500 text-white",
  secondary: "bg-gray-500 text-white",
  success: "bg-green-500 text-white",
  danger: "bg-red-500 text-white",
  warning: "bg-yellow-500 text-white",
  info: "bg-teal-500 text-white",
  TBlack: "hover:bg-gray-100 !text-black",
  gray: "hover:bg-gray-100 text-gray-900",
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
  colorVariant?: keyof typeof colorClasses;
}

// TsButton Component

const TsButton: React.FC<TsButtonProps> = ({
  label,
  onClick,
  size = "medium",
  colorVariant = "primary",
  icon,
  className,
  children
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        ${className}
        ${sizeClasses[size]} 
        ${colorClasses[colorVariant]}
        ${style.tsButton}
        flex 
        items-center
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
