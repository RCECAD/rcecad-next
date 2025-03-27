"use client";

import { useState, useTransition } from "react";
import { TextHeader } from "../layouts/text-header";
import { Input } from "../ui/input";
import { InputLabel } from "../ui/input-label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { useForgotPassword } from "@/hooks/useForgotPassword";
import { z } from "zod";

const codeSchema = z.object({
	code: z.string(),
});

type CodeFormValues = z.infer<typeof codeSchema>;

export const CodeStep = () => {
	const [codeValid, isCodeValid] = useState<boolean>(true);
	const { nextStep, email, restartTimer, resendTimer } = useForgotPassword();
	const [isPending, startTransition] = useTransition();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<CodeFormValues>({
		resolver: zodResolver(codeSchema),
	});

	const onSubmit = (data: CodeFormValues) => {
		startTransition(async () => {
			console.log("Inserted code: ", { data });
			nextStep();
		});
	};

	const handleResend = () => {
		console.log(email);
		restartTimer();
		// resend code to email
	};

	const resendCode =
		resendTimer > 0 ? `Reenviar código (${resendTimer})` : "Reenviar código";

	return (
		<>
			<TextHeader
				title="Verifique seu e-mail"
				description="Enviamos um código de 6 dígitos para seu email. Não esqueça de verificar seu lixo eletrônico ou caixa de spam."
			/>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col w-full h-fit gap-4 items-start justify-center"
			>
				<div className="flex flex-col w-full gap-1 items-start">
					<InputLabel label="Insira o código aqui">
						<Input type="text" {...register("code")} />
					</InputLabel>
					{!codeValid && (
						<span className="text-sm text-red-500">Código inválido</span>
					)}
				</div>
				<button
					type="button"
					disabled={resendTimer > 0}
					onClick={handleResend}
					className="font-medium cursor-pointer disabled:cursor-default text-sky-600 hover:text-sky-700 transition-colors duration-200 disabled:text-slate-400"
				>
					{resendCode}
				</button>
				<div className="w-full mt-4">
					<Button
						disabled={isPending}
						fullWidth
						variant="primary"
						type="submit"
					>
						{isPending && <Loader2 className="animate-spin" />}
						Próxima etapa
					</Button>
				</div>
			</form>
		</>
	);
};
