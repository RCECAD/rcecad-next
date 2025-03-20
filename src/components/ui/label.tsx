import type { JSX, LabelHTMLAttributes, ReactNode } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
	label: string;
	children: ReactNode;
}

type ComponentSetup = (props: LabelProps) => JSX.Element;

export const Label: ComponentSetup = ({ children, label, ...rest }) => {
	return (
		<div className="flex flex-col w-full h-fit gap-2">
			<label {...rest} className="text-lg font-medium text-slate-700">
				{label}
			</label>
			{children}
		</div>
	);
};
