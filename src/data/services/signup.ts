"use server";

import type { DomainFeature } from "@/domain";
import type { User } from "@/domain/entities/user";
import { api } from "@/services/api";

type Input = {
	user: Omit<User, "id">;
};

type Setup = DomainFeature<Input, undefined>;

export const signUp: Setup = async (input) => {
	try {
		const res = await api.post<User>("/user/create", {
			...input,
		});
		if (!(res.status === 200)) {
			return {
				success: false,
				reason: "Something got wrong at trying to signup",
			};
		}
		return {
			success: true,
			data: undefined,
		};
	} catch (error) {
		console.error("An unknown error occured: ", error);
		return {
			success: false,
			reason: "An unknown error occured at trying to create user.",
		};
	}
};
