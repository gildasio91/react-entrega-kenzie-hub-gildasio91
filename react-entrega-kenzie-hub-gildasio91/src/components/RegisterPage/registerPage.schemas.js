import { z } from "zod";

export const registerPageSchema = z.object({
  name: z.string().min(1, "Este campo é obrigatório"),
  email: z.string().min(1, "Este campo é obrigatório").email(),
  password: z
    .string()
    .min(8, "A senha é obrigatória e precisa de no mínimo 8 caracteres")
    .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
    .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
    .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número")
    .regex(
      /(?=.*?[!@#$%^&*])/,
      "É necessário pelo menos um caractere especial (!@#$%^&*)"
    ),
  passwordConfirm: z
    .string()
    .min(1, "A senha é obrigatória e precisa de no mínimo 8 caracteres"),
  bio: z.string().min(1, "Este campo é obrigatório"),
  contact: z.string().min(1, "Este campo é obrigatório"),
  course_module: z
    .string()
    .min(1, "Este campo é obrigatório")
    .refine(
      ({ password, passwordConfirm }) => {
        return password === passwordConfirm;
      },
      {
        message: "as senhas não correspondem",
        path: ["passwordConfirm"],
      }
    ),
});
