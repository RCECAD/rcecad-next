"use client";

import { useTransition } from "react";
import { TextHeader } from "../layouts/text-header";
import { Input } from "../ui/input";
import { InputLabel } from "../ui/input-label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { z } from "zod";
import { useRouter } from "next/navigation";

const newPasswordSchema = z.object({
	newPassword: z
		.string()
		.min(8, "A senha deve possuir pelo menos 8 caracteres")
		.regex(
			/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/,
			"A senha deve conter uma letra maiúscula e um símbolo",
		),
});

type NewPasswordFormValues = z.infer<typeof newPasswordSchema>;

export const NewPasswordStep = () => {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<NewPasswordFormValues>({
		resolver: zodResolver(newPasswordSchema),
	});

	const onSubmit = (data: NewPasswordFormValues) => {
		startTransition(async () => {
			console.log("Inserted password: ", { data });
			router.push("/");
		});
	};

	return (
		<>
			<TextHeader
				title="Escolha uma nova senha"
				description="Tudo pronto! Agora, escolha uma nova senha."
			/>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col w-full h-fit gap-4 items-start justify-center"
			>
				<div className="flex flex-col w-full gap-1 items-start">
					<InputLabel label="Escolha uma senha">
						<Input type="text" {...register("newPassword")} />
					</InputLabel>
					{errors.newPassword?.message && (
						<span className="text-sm text-red-500">
							{errors.newPassword.message}
						</span>
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
						Salvar alterações
					</Button>
				</div>
			</form>
		</>
	);
};
