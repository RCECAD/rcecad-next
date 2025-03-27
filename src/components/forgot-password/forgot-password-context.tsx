"use client";
import { createContext, type Dispatch, type SetStateAction } from "react";

export enum Steps {
	Email = 1,
	Code,
	NewPassword,
}

export interface ForgotPasswordContextProps {
	setEmail: Dispatch<SetStateAction<string>>;
	setStep: Dispatch<SetStateAction<Steps>>;
	nextStep: () => void;
	restartTimer: () => void;
	email: string;
	resendTimer: number;
	step: Steps;
}

export const ForgotPasswordContext = createContext<
	ForgotPasswordContextProps | undefined
>(undefined);
