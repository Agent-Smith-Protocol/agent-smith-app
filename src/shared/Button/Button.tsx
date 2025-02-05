import React, { ReactNode } from "react"

type ButtonVariant = "solid" | "outline" | "link"
type ButtonSize = "sm" | "md" | "lg"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
}

export const Button = (props: ButtonProps) => {
  const {className, variant = "solid", size = "md", children} = props

  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200 ease-in-out"

  const variantStyles = {
    solid: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-blue-500",
    link: "text-blue-600 hover:text-blue-700 underline-offset-4 hover:underline",
  }

  const sizeStyles = {
    sm: "text-sm px-3 py-2",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3",
  }

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className || ""}`

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}