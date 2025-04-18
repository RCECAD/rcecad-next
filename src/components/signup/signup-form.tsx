"use client";

import { useForm } from "react-hook-form";

import { signupSchema, type SignupFormValues } from "@/schemas/signup-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { signUp } from "@/data/services/signup";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { redirect } from "next/navigation";
import { InputRadio } from "@/components/ui/input-radio";
import { InputLabel } from "@/components/ui/input-label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const SignupForm = () => {
	const [isPending, startTransition] = useTransition();
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<SignupFormValues>({
		resolver: zodResolver(signupSchema),
	});

	const userType = watch("userType");

	const onSubmit = (data: SignupFormValues) => {
		startTransition(async () => {
			const res = await signUp({ user: data });
			if (!res.success) {
				toast.error("Opa, ocorreu um erro:", {
					description: res.reason,
				});
			}
			toast.success("Sua conta foi criada com sucesso!", {
				description: "Você será redirecionado para a página de login.",
			});
			redirect("/auth/signin");
		});
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col w-full h-fit gap-4 items-start justify-center"
		>
			<div className="flex flex-col h-fit gap-2">
				<p className="text-lg font-medium text-slate-700">
					Você é uma pessoa ou uma empresa?
				</p>
				<div className="flex h-fit gap-4 items-start flex-col lg:gap-8 lg:flex-row lg:items-center">
					<InputRadio
						{...register("userType")}
						value="person"
						label="Pessoa física"
						checked={userType === "person"}
					/>
					<InputRadio
						{...register("userType")}
						value="business"
						label="Pessoa jurídica"
						checked={userType === "business"}
					/>
				</div>
				{errors.userType?.message && (
					<span className="text-sm text-red-500">
						{errors.userType.message}
					</span>
				)}
			</div>

			<InputLabel label="Qual o seu nome?">
				<Input {...register("name")} />
			</InputLabel>
			{errors.name?.message && (
				<span className="text-sm text-red-500">{errors.name.message}</span>
			)}

			{userType === "person" && (
				<>
					<InputLabel label="Digite seu CPF">
						<Input {...register("cpf")} />
					</InputLabel>
					{errors.cpf?.message && (
						<span className="text-sm text-red-500">{errors.cpf.message}</span>
					)}
				</>
			)}

			{userType === "business" && (
				<>
					<InputLabel label="Digite seu CNPJ">
						<Input {...register("cnpj")} />
					</InputLabel>
					{errors.cnpj?.message && (
						<span className="text-sm text-red-500">{errors.cnpj.message}</span>
					)}
				</>
			)}

			<InputLabel label="Agora digite seu e-mail">
				<Input {...register("email")} />
			</InputLabel>
			{errors.email?.message && (
				<span className="text-sm text-red-500">{errors.email.message}</span>
			)}

			<div className="flex flex-col w-full gap-1 items-start">
				<InputLabel label="Escolha uma senha">
					<Input type="password" {...register("password")} />
				</InputLabel>
				{errors.password?.message && (
					<span className="text-sm text-red-500">
						{errors.password.message}
					</span>
				)}
			</div>

			<div className="w-full mt-4">
				<Button disabled={isPending} fullWidth variant="primary" type="submit">
					{isPending && <Loader2 className="animate-spin" />}
					Criar minha conta
				</Button>
			</div>
		</form>
	);
};
