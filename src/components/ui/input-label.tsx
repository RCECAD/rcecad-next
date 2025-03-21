import type { JSX, LabelHTMLAttributes, ReactNode } from "react";

interface InputLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
	label: string;
	children: ReactNode;
}

type ComponentSetup = (props: InputLabelProps) => JSX.Element;

export const InputLabel: ComponentSetup = ({ children, label, ...rest }) => {
	return (
		<div className="flex flex-col w-full h-fit gap-2 relative">
			<label {...rest} className="text-lg font-medium text-slate-700">
				{label}
			</label>
			{children}
		</div>
	);
};
