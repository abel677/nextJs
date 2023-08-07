import * as yup from "yup";
import { expressionNumbersAndLetters } from "@/app/utils/types/expressionsToValidate";

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required("El correo es requerido.")
    .email("El correo es invalido."),
  password: yup
    .string()
    .required("La contraseña es requerida.")
    .min(8, "La contraseña debe tener un mínimo de 8 caracteres.")
    .matches(
      expressionNumbersAndLetters,
      "La contraseña debe contener letras y números."
    ),
});
