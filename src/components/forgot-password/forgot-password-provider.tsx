"use client";
import { type FC, type ReactNode, useEffect, useState } from "react";
import { ForgotPasswordContext, Steps } from "./forgot-password-context";

interface ForgotPasswordProviderProps {
	children: ReactNode;
}

export const ForgotPasswordProvider: FC<ForgotPasswordProviderProps> = ({
	children,
}) => {
	const [step, setStep] = useState<Steps>(Steps.Email);
	const [email, setEmail] = useState<string>("");
	const [resendTimer, setResendTimer] = useState<number>(0);

	const nextStep = () => {
		setStep((prev) => {
			const newStep = prev < Steps.NewPassword ? ((prev + 1) as Steps) : prev;
			if (newStep === Steps.Code) {
				setResendTimer(60);
			}
			return newStep;
		});
	};

	const restartTimer = () => {
		setResendTimer(60);
	};

	useEffect(() => {
		let interval: NodeJS.Timeout;
		if (resendTimer > 0) {
			interval = setInterval(() => {
				setResendTimer((prev) => prev - 1);
			}, 1000);
		}
		return () => {
			if (interval) clearInterval(interval);
		};
	}, [resendTimer]);

	return (
		<ForgotPasswordContext.Provider
			value={{
				step,
				email,
				setEmail,
				resendTimer,
				nextStep,
				setStep,
				restartTimer,
			}}
		>
			{children}
		</ForgotPasswordContext.Provider>
	);
};
