import { BottomNav } from "@/components/bottom-nav"

export default function PayPage() {
  return (
    <main className="min-h-screen pb-20">
      <div className="p-6">
        <h1 className="text-2xl font-bold">Payment History</h1>
        <p className="text-gray-400 mt-2">Your recent transactions will appear here</p>
      </div>
      <BottomNav />
    </main>
  )
}

