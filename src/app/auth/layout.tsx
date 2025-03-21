"use client";
import { AuthCard } from "@/components/ui/auth-card";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

const AuthLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
	return (
		<div className="w-screen h-screen md:px-24 md:py-32 2xl:px-48 2xl:py-32 items-center justify-center bg-slate-100">
			<AuthCard>{children}</AuthCard>
		</div>
	);
};

export default AuthLayout;
