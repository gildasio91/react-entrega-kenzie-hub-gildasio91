import { z } from "zod";

export const loginPageSchema = z.object({
  email: z.string().min(1, "Este campo é obrigatório"),
  password: z.string().min(1, "Este campo é obrigatório"),
});
