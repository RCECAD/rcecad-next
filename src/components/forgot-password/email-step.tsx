"use client";

import { useTransition } from "react";
import { TextHeader } from "../layouts/text-header";
import { Input } from "../ui/input";
import { InputLabel } from "../ui/input-label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { useForgotPassword } from "@/hooks/useForgotPassword";
import { z } from "zod";

const registeredEmailSchema = z.object({
	email: z.string().email("E-mail inválido"),
});

type RegisteredEmailFormValues = z.infer<typeof registeredEmailSchema>;

export const EmailStep = () => {
	const { nextStep, setEmail } = useForgotPassword();
	const [isPending, startTransition] = useTransition();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisteredEmailFormValues>({
		resolver: zodResolver(registeredEmailSchema),
	});

	const onSubmit = (data: RegisteredEmailFormValues) => {
		startTransition(async () => {
			console.log("Inserted email: ", { data });
			setEmail(data.email);
			nextStep();
		});
	};
	return (
		<>
			<TextHeader
				title="Esqueceu sua senha?"
				description="Insira o e-mail com qual se cadastrou para recuperar sua senha."
			/>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col w-full h-fit gap-4 items-start justify-center"
			>
				<div className="flex flex-col w-full gap-1 items-start">
					<InputLabel label="E-mail">
						<Input type="text" {...register("email")} />
					</InputLabel>
					{errors.email?.message && (
						<span className="text-sm text-red-500">{errors.email.message}</span>
					)}
				</div>
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
