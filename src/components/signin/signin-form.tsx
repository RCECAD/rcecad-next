"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Anchor } from "@/components/ui/anchor";
import { InputLabel } from "@/components/ui/input-label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SigninForm() {
	const [showPassword, setShowPassword] = useState(false);
	const inputType = showPassword ? "text" : "password";

	function handleShowPassword() {
		setShowPassword(!showPassword);
	}

	return (
		<div className="flex flex-col gap-8">
			<div className="flex flex-col gap-4">
				<InputLabel htmlFor="email" label="Email">
					<Input id="email" required type="email" />
				</InputLabel>
				<div className="flex flex-col gap-2">
					<InputLabel htmlFor="password" label="Senha">
						<Input id="password" required type={inputType} />
						{showPassword ? (
							<Eye
								className="absolute top-[58%] right-[15%] text-slate-400 cursor-pointer"
								onClick={handleShowPassword}
							/>
						) : (
							<EyeOff
								className="absolute top-[58%] right-[15%] text-slate-400 cursor-pointer"
								onClick={handleShowPassword}
							/>
						)}
					</InputLabel>
					<Anchor href="/">Esqueceu a Senha?</Anchor>
				</div>
			</div>
			<div className="flex flex-col gap-4 items-center justify-center">
				<Button variant="primary" fullWidth>
					Entrar
				</Button>
				<div className="flex items-center gap-2">
					<p className="font-medium text-slate-400 text-lg">
						Ainda não possui uma conta?
					</p>
					<Anchor href="/">Registre-se</Anchor>
				</div>
			</div>
		</div>
	);
}
