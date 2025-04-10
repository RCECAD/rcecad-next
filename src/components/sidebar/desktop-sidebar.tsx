"use client"

import { ChevronRight, CircleHelp, ClipboardPen, Dam, FileCog, LogOut, Scale3D, Search, TrafficCone, UserCog } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const sidebarItems = [
  {
    icon: <Image src="/logo.svg" alt="Logo" width={36} height={36} />,
    label: "Arquivo",
  },
  {
    icon: <Search className="text-4xl text-slate-500" />,
    label: "Procurar",
  },
  {
    icon: <ChevronRight className="text-9xl text-slate-500" />,
    label: "Colapsar",
  },
  {
    icon: <ClipboardPen className="text-9xl text-slate-500" />,
    label: "Dados Gerais",
  },
  {
    icon: <FileCog className="text-9xl text-slate-500" />,
    label: "Dados Hidráulicos",
  },
  {
    icon: <Dam className="text-9xl text-slate-500" />,
    label: "Vazões Concentradas",
  },
  {
    icon: <TrafficCone className="text-9xl text-slate-500" />,
    label: "Pavimentação",
  },
  {
    icon: <Scale3D className="text-9xl text-slate-500" />,
    label: "Dimensionamento",
  },
  {
    icon: <CircleHelp className="text-9xl text-slate-500" />,
    label: "Ajuda",
  },
  {
    icon: <UserCog className="text-9xl text-slate-500" />,
    label: "Minha Conta",
  },
  {
    icon: <LogOut className="text-9xl text-slate-500" />,
    label: "Sair da Conta",
  }
]

export const DesktopSidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <aside className={`flex flex-col w-fit h-screen p-4 bg-slate-100 justify-between border-r-2 border-r-slate-200 ${isOpen ? "items-start" : "items-center"}`}>
      <div className={`w-fit h-fit flex flex-col justify-center gap-6 ${isOpen ? "items-start" : "items-center"}`}>
        {sidebarItems.slice(0, 3).map((item, index) => (
          // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
          <div 
            key={index} 
            className="flex items-center justify-center gap-3 rounded-lg cursor-pointer select-none" 
            onClick={item.label === "Colapsar" ? handleToggleSidebar : undefined}
          >
            {item.icon}
            {isOpen && <p className="font-semibold text-base text-slate-500">{item.label}</p>}
          </div>
        ))}
      </div>

      <div className={`w-fit h-fit flex flex-col justify-center gap-6 ${isOpen ? "items-start" : "items-center"}`}>
        {sidebarItems.slice(3, -3).map((item, index) => (
          <div key={index} className="flex items-center justify-center gap-3 rounded-lg">
            {item.icon}
            {isOpen && <p className="font-semibold text-base text-slate-500">{item.label}</p>}
          </div>
        ))}
      </div>

      <div className={`w-fit h-fit flex flex-col justify-center gap-6 ${isOpen ? "items-start" : "items-center"}`}>
        {sidebarItems.slice(-3).map((item, index) => (
          <div key={index} className="flex items-center justify-center gap-3 rounded-lg">
            {item.icon}
            {isOpen && <p className="font-semibold text-base text-slate-500">{item.label}</p>}
          </div>
        ))}
      </div>
    </aside>
  )
}
