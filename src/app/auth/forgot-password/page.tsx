import { ForgotPasswordProvider } from "@/components/forgot-password/forgot-password-provider";
import { ForgotPasswordSteps } from "@/components/forgot-password/forgot-password-steps";
import { Auth } from "@/components/layouts/auth";

export default function Page() {
	return (
		<Auth.Layout>
			<ForgotPasswordProvider>
				<ForgotPasswordSteps />
			</ForgotPasswordProvider>
		</Auth.Layout>
	);
}
