import { useLogin } from "@/hooks/useLogin";
import { ILoginFormValues } from "../../formLogin/FormLogin";
import { useAppDispatch } from "@/redux/hooks";
import { EUserRole, setTokenToApi } from "@/redux/slices/auth";

interface ILoginHook {
  onSubmitLogin: (arg: ILoginFormValues) => Promise<void>;
  isLoading: boolean;
  isError: boolean;
}

interface IToken {
  id: number;
  name: string;
  role: EUserRole;
  userId: number;
  email: string;
  exp: number;
  photoURL?: string;
}

export const useSubmitLogin = (): ILoginHook => {
  const dispatch = useAppDispatch();
  const { onLogin, isLoading, isError } = useLogin();

  const onSubmitLogin = async (values: ILoginFormValues): Promise<void> => {
    const response = await onLogin(values);

    if (!response) return;

    const tokenData = decodeTokenPayload(response.data.token);

    const { token } = response.data;
    if (tokenData) {
      dispatch(
        setTokenToApi({
          token,
          expiresIn: tokenData.exp,
          userLogged: {
            ...tokenData,
          },
          isLogged: true,
        })
      );
    }

  };

  return {
    onSubmitLogin,
    isLoading,
    isError,
  };
};

export const decodeTokenPayload = (token: string) => {
  if (!token) return undefined;

  const tokenParts = token.split(".");
  if (tokenParts.length !== 3) {
    return undefined;
  }

  try {
    const payloadBase64 = token.split(".")[1];
    const payload = atob(payloadBase64);

    const { name, role, email, exp, id }: IToken = JSON.parse(payload);

    return {
      id,
      name,
      role,
      email,
      exp,
    };
  } catch (e) {
    console.error("Cannot parse decoded data from JWT token.");
    return undefined;
  }
};
