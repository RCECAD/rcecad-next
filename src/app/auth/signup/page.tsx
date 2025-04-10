import { TextHeader } from "@/components/layouts/text-header";
import { SignupForm } from "@/components/signup/signup-form";

export default function Page() {
	return (
		<div className="flex flex-col gap-6 w-full p-8 max-w-lg lg:px-0">
			<TextHeader
				title="Criar uma conta"
				description="Insira os dados necessários para criar sua conta."
			/>
			<SignupForm />
		</div>
	);
}
