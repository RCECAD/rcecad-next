import {
	ForgotPasswordContext,
	type ForgotPasswordContextProps,
} from "@/components/forgot-password/forgot-password-context";
import { useContext } from "react";

export const useForgotPassword = (): ForgotPasswordContextProps => {
	const context = useContext(ForgotPasswordContext);
	if (!context) {
		throw new Error(
			"useForgotPassword must be used within a ForgotPasswordProvider",
		);
	}
	return context;
};
