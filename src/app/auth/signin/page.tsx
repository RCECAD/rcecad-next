import { Auth } from "@/components/layouts/auth";
import { TextHeader } from "@/components/layouts/text-header";
import { SigninForm } from "@/components/signin/signin-form";
import { LogIn } from "lucide-react";

export default function Page() {
	return (
		<Auth.Layout>
			<TextHeader
				title="Entrar"
				description="Insira seus dados para acessar sua conta"
				icon={LogIn}
			/>
			<SigninForm />
		</Auth.Layout>
	);
}
