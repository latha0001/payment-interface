"use client"

import { useState } from "react"
import { faker } from "@faker-js/faker"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export function CardScreen() {
  const [paymentMode, setPaymentMode] = useState<"pay" | "card">("card")
  const [isFreezed, setIsFreezed] = useState(false)

  return (
    <div className="p-6 space-y-6">
      <div className="space-y-6">
        <h2 className="text-gray-400 text-sm">select payment mode</h2>
        <div className="flex gap-4 text-sm">
          <button
            onClick={() => setPaymentMode("pay")}
            className={cn(
              "px-4 py-1 rounded-full transition-colors",
              paymentMode === "pay" ? "bg-white text-black" : "text-gray-400",
            )}
          >
            pay
          </button>
          <button
            onClick={() => setPaymentMode("card")}
            className={cn(
              "px-4 py-1 rounded-full transition-colors",
              paymentMode === "card" ? "bg-white text-black" : "text-gray-400",
            )}
          >
            card
          </button>
        </div>
      </div>

      <div className="relative aspect-[1.586/1] w-full max-w-[300px] mx-auto">
        <motion.div
          className={cn(
            "absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden",
            isFreezed && "before:absolute before:inset-0 before:bg-frost",
          )}
          animate={isFreezed ? { scale: 1, opacity: 1 } : { scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <AnimatePresence>
            {isFreezed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-frost pointer-events-none"
              >
                <svg className="w-full h-full opacity-30" viewBox="0 0 100 100">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <path
                      key={i}
                      d={`M${faker.number.int({ min: 0, max: 100 })},${faker.number.int({
                        min: 0,
                        max: 100,
                      })} Q${faker.number.int({ min: 0, max: 100 })},${faker.number.int({
                        min: 0,
                        max: 100,
                      })} ${faker.number.int({ min: 0, max: 100 })},${faker.number.int({
                        min: 0,
                        max: 100,
                      })}`}
                      stroke="white"
                      fill="none"
                      strokeWidth="0.2"
                    />
                  ))}
                </svg>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="p-4 h-full flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <div className="flex gap-2">
                  <div className="w-8 h-4 bg-red-500 rounded" />
                  <div className="w-12 h-4 bg-blue-500 rounded" />
                </div>
                <p className="text-white text-lg font-mono">**** {faker.finance.creditCardNumber("####").slice(-4)}</p>
                <p className="text-gray-400 text-sm">valid thru</p>
                <p className="text-white text-sm font-mono">
                  {faker.date.future().toLocaleDateString("en-US", {
                    month: "2-digit",
                    year: "2-digit",
                  })}
                </p>
              </div>
              <button
                onClick={() => setIsFreezed(!isFreezed)}
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                  isFreezed ? "bg-red-500" : "bg-gray-700",
                )}
              >
                <span className="text-white text-xl">*</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={() => setIsFreezed(!isFreezed)}
          className={cn(
            "px-6 py-2 rounded-full text-sm font-medium transition-colors",
            isFreezed ? "bg-red-500 text-white" : "bg-gray-800 text-gray-400",
          )}
        >
          {isFreezed ? "Unfreeze Card" : "Freeze Card"}
        </button>
      </div>
    </div>
  )
}

