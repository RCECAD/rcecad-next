

export const AuthLayout = ({children}: Readonly<{children: ReactNode}>) => {
  const pathname = usePathname();
  return (
    <div className="w-screen h-screen px-24 py-32 items-center justify-center bg-zinc-100">
      {children}
    </div>
  )
}