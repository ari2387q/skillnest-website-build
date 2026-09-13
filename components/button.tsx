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
  const base = "inline-flex items-center justify-center gap-2 font-bold rounded-full select-none cursor-pointer border-0 outline-none transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg active:scale-95 active:translate-y-0"

  const variants = {
    primary: "bg-amber-500 text-white shadow-[0_4px_14px_0_rgba(245,158,11,0.39)] hover:bg-amber-400 hover:shadow-[0_6px_20px_rgba(245,158,11,0.23)]",
    outline: "bg-white text-amber-600 border-2 border-amber-400 shadow-sm hover:bg-amber-50",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100 shadow-none",
  }

  const sizes = {
    sm: "px-6 py-2.5 text-sm",
    md: "px-8 py-3.5 text-base",
    lg: "px-10 py-4 text-lg",
  }

  // FIXED: Added spaces correctly via join(" ")
  const classes = [base, variants[variant], sizes[size], className].filter(Boolean).join(" ")

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