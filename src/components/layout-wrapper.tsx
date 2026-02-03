"use client"

import * as React from "react"
import { Navbar } from "@/components/navbar"
import { Sidebar } from "@/components/sidebar"
import { PanelLeftOpen } from "lucide-react" 
import { Button } from "@/components/ui/button"

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  // Default to "top" (Navbar)
  const [layoutMode, setLayoutMode] = React.useState<"top" | "sidebar">("top")

  // Optional: Persist to localStorage
  React.useEffect(() => {
    const savedMode = localStorage.getItem("layout-mode") as "top" | "sidebar"
    if (savedMode) {
      setLayoutMode(savedMode)
    }
  }, [])

  const setMode = (mode: "top" | "sidebar") => {
    setLayoutMode(mode)
    localStorage.setItem("layout-mode", mode)
  }

  if (layoutMode === "sidebar") {
    return (
      <div className="flex min-h-screen">
        <aside className="hidden w-64 flex-col md:flex fixed inset-y-0 z-50">
           <Sidebar onToggle={() => setMode("top")} />
        </aside>
        <main className="flex-1 md:pl-64">
             {/* Mobile Header for Sidebar Mode */}
            <div className="md:hidden flex items-center p-4 border-b">
                 <Sidebar onToggle={() => setMode("top")} className="border-none min-h-0 pb-0" />
            </div>
            {/* Sloka Sub-header for Sidebar Mode */}
            <div className="w-full bg-background border-b py-2 text-center">
                <p className="font-rozha text-sm md:text-base text-primary/90 leading-relaxed tracking-wide">
                ॐ कर्पूरगौरं करुणावतारं संसारसारम् भुजगेन्द्रहारम् । सदावसंतं हृदयारविंदे भवं भवानीसहितं नमामि ॥
                </p>
            </div>
            {children}
        </main>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
       {/* Sloka Sub-header */}
       <div className="w-full bg-background border-b py-2 text-center">
            <p className="font-rozha text-sm md:text-base text-primary/90 leading-relaxed tracking-wide">
            ॐ कर्पूरगौरं करुणावतारं संसारसारम् भुजगेन्द्रहारम् । सदावसंतं हृदयारविंदे भवं भवानीसहितं नमामि ॥
            </p>
       </div>
       <Navbar onToggleLayout={() => setMode("sidebar")} showLayoutToggle={true} />
       <main className="flex-1">{children}</main>
    </div>
  )
}
