import type { JSX } from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	variant: ButtonVariants;
  fullWidth?: boolean;
}

type ButtonVariants = "primary" | "secondary";

type ComponentSetup = (props: ButtonProps) => JSX.Element;

export const Button: ComponentSetup = ({ children, variant, fullWidth, ...props }) => {
	const buttonStyles = {
		primary: "bg-sky-500 p-2.5 h-fit text-slate-100 font-bold hover:bg-sky-600",
		secondary: "bg-slate-300 p-2.5 h-fit text-slate-800 font-medium hover:bg-slate-400",
	};

	return (
		<button {...props} className={`${"rounded-lg cursor-pointer text-lg transition ease-in-out flex items-center justify-center text-center gap-2.5"} ${fullWidth && "w-full"} `.concat(buttonStyles[variant])}>
			{children}
		</button>
	);
}
