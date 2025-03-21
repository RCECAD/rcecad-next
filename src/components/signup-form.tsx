"use client";

import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { InputLabel } from "./ui/input-label";
import { InputRadio } from "./ui/input-radio";
import { signupSchema, type SignupFormValues } from "@/schemas/signup-schema";
import { zodResolver } from "@hookform/resolvers/zod";

export const SignupForm = () => {
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
		console.log("data:", data);
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
				<div className="flex h-fit gap-8 items-center">
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
				<p className="text-xs font-medium text-slate-500">
					A senha deve possuir pelo menos 8 caracteres, uma letra maiúscula e um
					símbolo.
				</p>
			</div>

			<div className="w-full mt-4">
				<Button fullWidth variant="primary" type="submit">
					Criar minha conta
				</Button>
			</div>
		</form>
	);
};
