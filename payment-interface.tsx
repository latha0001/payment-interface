"use client"

import { useState } from "react"
import { Home, CreditCard, Gift } from "lucide-react"
import { cn } from "@/lib/utils"

export default function PaymentInterface() {
  const [view, setView] = useState<"freeze" | "details">("freeze")
  const [paymentMode, setPaymentMode] = useState<"pay" | "card">("card")

  return (
    <div className="grid md:grid-cols-2 gap-4 p-4 bg-black min-h-screen">
      <div className="w-full max-w-sm mx-auto">
        <div className="space-y-6">
          <h2 className="text-gray-400 text-sm">select payment mode</h2>
          <div className="flex gap-4 text-sm">
            <button
              onClick={() => setPaymentMode("pay")}
              className={cn("px-4 py-1 rounded-full", paymentMode === "pay" ? "bg-white text-black" : "text-gray-400")}
            >
              pay
            </button>
            <button
              onClick={() => setPaymentMode("card")}
              className={cn("px-4 py-1 rounded-full", paymentMode === "card" ? "bg-white text-black" : "text-gray-400")}
            >
              card
            </button>
          </div>
          <div className="mt-8">{view === "freeze" ? <CardFreeze /> : <CardDetails />}</div>
        </div>
        <nav className="fixed bottom-0 left-0 right-0 bg-gray-900 p-4">
          <div className="flex justify-around max-w-sm mx-auto">
            <button className="flex flex-col items-center gap-1 text-gray-400">
              <Home className="w-6 h-6" />
              <span className="text-xs">home</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-white">
              <CreditCard className="w-6 h-6" />
              <span className="text-xs">you pay</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-gray-400">
              <Gift className="w-6 h-6" />
              <span className="text-xs">give</span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  )
}

function CardFreeze() {
  return (
    <div className="relative aspect-[1.586/1] w-full max-w-[300px] mx-auto">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,50 Q25,25 50,50 T100,50" fill="none" stroke="red" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-4 right-4">
        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xl">*</span>
        </div>
      </div>
    </div>
  )
}

function CardDetails() {
  return (
    <div className="relative aspect-[1.586/1] w-full max-w-[300px] mx-auto">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden p-4">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <div className="flex gap-2">
              <div className="w-8 h-4 bg-red-500 rounded" />
              <div className="w-12 h-4 bg-blue-500 rounded" />
            </div>
            <p className="text-white text-lg font-mono">**** 0126</p>
            <p className="text-gray-400 text-sm">valid thru</p>
            <p className="text-white text-sm font-mono">07/26</p>
          </div>
          <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
            <span className="text-white text-xl">*</span>
          </div>
        </div>
        <div className="absolute bottom-4 right-4">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-08%20091407-FC2D20ngDHUrMK17gvnE0o3NZqKJIr.png"
            alt="Card Logo"
            className="h-8 opacity-50"
          />
        </div>
      </div>
    </div>
  )
}

