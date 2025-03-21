import { SignupForm } from "@/components/signup-form";
import { TextHeader } from "@/components/ui/text-header";

export default function Page() {
	return (
		<div className="flex flex-col gap-8 w-full px-0 py-6 max-w-lg">
			<TextHeader
				title="Criar uma conta"
				description="Insira os dados necessários para criar sua conta."
			/>
			<SignupForm />
		</div>
	);
}
