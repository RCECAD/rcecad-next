import { SignupForm } from "@/components/signup-form";
import { TextHeader } from "@/components/ui/text-header";

export default function Page() {
	return (
		<>
			<TextHeader
				title="Criar uma conta"
				description="Insira os dados necessários para criar sua conta."
			/>
			<SignupForm />
		</>
	);
}
