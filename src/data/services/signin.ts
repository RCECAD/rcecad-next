"use server";

import type { DomainFeature } from "@/domain";
import type { User } from "@/domain/entities/user";
import { api } from "@/services/api";

type Input = {
  user: {
    email: User["email"];
    password: User["password"];
  }
};

type Setup = DomainFeature<Input, undefined>;

export const signIn: Setup = async (input) => {
  try {
    const res = await api.post<User>("/user/login", { // n sei se ta certo a rota
      ...input,
    });
    if (!(res.status === 200)) {
      return {
        success: false,
        reason: "Something got wrong at trying to signin",
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
      reason: "An unknown error occured at trying to login user.",
    };
  }
};
