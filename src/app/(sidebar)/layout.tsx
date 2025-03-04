import type { ReactNode } from "react";

interface SideBarLayoutProps {
  children: ReactNode
}

export default function SidebarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
    </div>
  )
}