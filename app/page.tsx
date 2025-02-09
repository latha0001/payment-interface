import { BottomNav } from "@/components/bottom-nav"
import { CardScreen } from "@/components/card-screen"

export default function Home() {
  return (
    <main className="min-h-screen pb-20">
      <CardScreen />
      <BottomNav />
    </main>
  )
}

