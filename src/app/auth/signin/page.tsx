import { SigninForm } from "@/components/signin-form";
import { TextHeader } from "@/components/ui/text-header";
import { LogIn } from "lucide-react";

export default function Page() {
	return (
		<div className="flex flex-col gap-8 w-full px-0 py-6 max-w-lg">
			<TextHeader
				title="Entrar"
				description="Insira seus dados para acessar sua conta"
				icon={LogIn}
			/>
			<SigninForm />
		</div>
	);
}
