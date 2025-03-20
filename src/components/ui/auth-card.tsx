interface AuthCardProps {
  chidren: ReactNode;
}

type ComponentSetup = (props: AuthCardProps) => JSX.Element

export const AuthCard: ComponentSetup = ({chidren}) => {
  return (
    <div className="flex w-full h-full gap-2 items-start justify-start border-2 bg-slate-200 border-slate-300 border-inside">
      {children}
    </div>
  )
};
