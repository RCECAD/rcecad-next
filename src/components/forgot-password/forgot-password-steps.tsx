"use client";
import { useForgotPassword } from "@/hooks/useForgotPassword";
import { Steps } from "./forgot-password-context";
import { EmailStep } from "./email-step";
import { CodeStep } from "./code-step";
import { NewPasswordStep } from "./new-password-step";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const ForgotPasswordSteps = () => {
	const { step } = useForgotPassword();
	const router = useRouter();

	switch (step) {
		case Steps.Email:
			return <EmailStep />;
		case Steps.Code:
			return <CodeStep />;
		case Steps.NewPassword:
			return <NewPasswordStep />;

		default:
			toast.error("Opa! Ocorreu um erro.", {
				description:
					"Ocorreu um erro no processo de recuperar senha, por favor, tente novamente.",
			});
			router.push("/auth/signup");
			break;
	}
};
