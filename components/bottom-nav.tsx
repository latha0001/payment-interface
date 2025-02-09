"use client"

import { Home, CreditCard, Gift } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  {
    label: "home",
    icon: Home,
    href: "/",
  },
  {
    label: "you pay",
    icon: CreditCard,
    href: "/pay",
  },
  {
    label: "give",
    icon: Gift,
    href: "/give",
  },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-900/90 backdrop-blur-lg border-t border-gray-800">
      <div className="flex justify-around max-w-sm mx-auto p-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn("flex flex-col items-center gap-1", pathname === item.href ? "text-white" : "text-gray-400")}
          >
            <item.icon className="w-6 h-6" />
            <span className="text-xs">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}

