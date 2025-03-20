import type { InputHTMLAttributes, JSX, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
}

type ComponentSetup = (props: InputProps) => JSX.Element;

export const Input: ComponentSetup = ({ children, className, ...rest }) => {
	return (
		<input
			{...rest}
			className={"flex w-full max-w-lg h-fit p-2 rounded-lg border-2 outline-none border-slate-300 hover:border-slate-400 focus:border-sky-600 text-zinc-600 bg-none transition-colors duration-200".concat(
				className!,
			)}
		/>
	);
};
