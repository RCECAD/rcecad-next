"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState, useTransition } from "react";
import { Anchor } from "@/components/ui/anchor";
import { InputLabel } from "@/components/ui/input-label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { signinSchema, type SigninFormValues } from "@/schemas/signin-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "@/data/services/signin";
import { redirect } from "next/navigation";

export function SigninForm() {
	const [showPassword, setShowPassword] = useState(false);
	const [isPending, startTransition] = useTransition();
	const inputType = showPassword ? "text" : "password";

	function handleShowPassword() {
		setShowPassword(!showPassword);
	}

	const { register, handleSubmit } = useForm<SigninFormValues>({
		resolver: zodResolver(signinSchema),
	});

	function onSubmit(data: SigninFormValues) {
		startTransition(async () => {
			const res = await signIn({ user: data });
			if (!res.success) {
				toast.error("Opa, ocorreu um erro:", {
					description: res.reason,
				});
			}
			toast.success("Você logou com sucesso!", {
				description: "Você será redirecionado para a página inicial.",
			});
			redirect("/auth/signin");
		});
	}

	return (
		<form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
			<div className="flex flex-col gap-4">
				<InputLabel htmlFor="email" label="Email">
					<Input id="email" required type="email" />
				</InputLabel>
				<div className="flex flex-col gap-2">
					<InputLabel htmlFor="password" label="Senha">
						<Input id="password" required type={inputType} />
						{showPassword ? (
							<Eye
								className="absolute top-[58%] right-[5%] text-slate-400 cursor-pointer"
								onClick={handleShowPassword}
							/>
						) : (
							<EyeOff
								className="absolute top-[58%] right-[5%] text-slate-400 cursor-pointer"
								onClick={handleShowPassword}
							/>
						)}
					</InputLabel>
					<Anchor href="/">Esqueceu a Senha?</Anchor>
				</div>
			</div>
			<div className="flex flex-col gap-4 items-center justify-center">
				<Button type="submit" variant="primary" fullWidth>
					Entrar
				</Button>
				<div className="flex items-center gap-2 flex-wrap">
					<p className="font-medium text-slate-400 text-lg">
						Ainda não possui uma conta?
					</p>
					<Anchor href="/auth/signup/">Registre-se</Anchor>
				</div>
			</div>
		</form>
	);
}
