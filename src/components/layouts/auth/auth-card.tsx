import type { JSX, ReactNode } from "react";
import { usePathname } from "next/navigation";
import { MainTopic } from "../../topics/main-topic";
import { SignupTopic } from "../../topics/signup-topic";

interface AuthCardProps {
	children: ReactNode;
}

type ComponentSetup = (props: AuthCardProps) => JSX.Element;

export const AuthCard: ComponentSetup = ({ children }) => {
	const pathname = usePathname();
	const renderTopic =
		pathname === "/auth/signin" ? (
			<MainTopic />
		) : pathname === "/auth/signup" ? (
			<SignupTopic />
		) : (
			""
		); // Implement forgot password routes
	return (
		<div className="flex w-full h-full gap-2 rounded-lg items-center justify-start border-2 drop-shadow-3xl bg-slate-200 border-slate-300 border-inside">
			<div className="relative flex flex-col w-full h-full gap-2 items-center justify-center border-r-2 overflow-clip border-slate-300 text-4xl text-sky-400">
				{renderTopic}
			</div>
			<div className="w-full h-full flex items-center justify-center">
				{children}
			</div>
		</div>
	);
};
