"use client"

import Link from "next/link"
import { ReactNode } from "react"

interface ButtonProps {
  href?: string
  onClick?: () => void
  children: ReactNode
  variant?: "primary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  className?: string
  type?: "button" | "submit"
}

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-full " +
    "select-none cursor-pointer border-0 outline-none " +
    "transition-all duration-200 ease-out " +
    "hover:-translate-y-[2px] hover:scale-[1.03] " +
    "active:scale-[0.97] active:translate-y-0 " +
    "focus-visible:ring-4 focus-visible:ring-amber-400/50 "

  const variants = {
    primary:
      "bg-amber-500 text-white shadow-[0_4px_14px_0_rgba(245,158,11,0.45)] " +
      "hover:bg-amber-400 hover:shadow-[0_6px_20px_0_rgba(245,158,11,0.55)] " +
      "active:shadow-[0_2px_8px_0_rgba(245,158,11,0.4)] ",
    outline:
      "bg-white text-amber-600 border-2 border-amber-400 shadow-sm " +
      "hover:bg-amber-50 hover:border-amber-500 hover:shadow-md ",
    ghost:
      "bg-transparent text-gray-700 dark:text-gray-200 " +
      "hover:bg-gray-100 dark:hover:bg-slate-800 shadow-none ",
  }

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-base",
    lg: "px-9 py-4 text-lg",
  }

  const classes = `${base}${variants[variant]}${sizes[size]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}