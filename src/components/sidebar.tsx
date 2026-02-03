"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area" // Assuming ScrollArea might be useful, but standard div overflow works too
import { navItems } from "@/components/navbar"
import { LayoutDashboard, PanelLeftClose } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import { AnimatedIcon } from "@/components/animated-icon"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    onToggle: () => void;
    onLinkClick?: () => void;
}

export function Sidebar({ className, onToggle, onLinkClick }: SidebarProps) {
  const pathname = usePathname()

  return (
    <div className={cn("pb-12 min-h-screen border-r border-sidebar-border bg-sidebar text-sidebar-foreground", className)}>

      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
            <div className="flex items-center justify-between mb-2 px-4">
                <h2 className="text-lg font-semibold tracking-tight">
                    ज्योतिरशास्त्र
                </h2>
                <Button variant="ghost" size="icon" onClick={onToggle} title="Switch to Top Navbar">
                    <AnimatedIcon icon={PanelLeftClose} animation="rotate" className="h-full w-full" iconClassName="h-4 w-4" />
                </Button>
            </div>
          
          <div className="space-y-1">
            <Button variant={pathname === "/" ? "secondary" : "ghost"} className="w-full justify-start" asChild onClick={onLinkClick}>
              <Link href="/">
                <div className="mr-2">
                    <AnimatedIcon icon={LayoutDashboard} animation="pulse" className="p-0" iconClassName="h-4 w-4" />
                </div>
                Home
              </Link>
            </Button>
            {navItems.map((item) => (
                <Button
                    key={item.href}
                    variant={pathname === item.href ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    asChild
                    onClick={onLinkClick}
                >
                    <Link href={item.href}>
                         <div className="mr-2">
                             <AnimatedIcon icon={item.icon} animation="scale" className="p-0" iconClassName="h-4 w-4" />
                         </div>
                        {item.title}
                    </Link>
                </Button>
            ))}
          </div>
        </div>
        <div className="px-3 py-2 mt-auto">
             <div className="flex items-center justify-between px-4">
                <span className="text-sm font-medium">Theme</span>
                <ModeToggle />
             </div>
        </div>
      </div>
    </div>
  )
}
