import { ILoginFormValues } from "@/app/components/login/formLogin/FormLogin";
import { usePostTokenToApiMutation } from "@/redux/api/authService";

interface ILoginHook {
  onLogin: (values: ILoginFormValues) => Promise<any>;
}

export const useLogin = () => {
  const [postTokenToApi, { isLoading, isError }] = usePostTokenToApiMutation();

  const onLogin = async (values: ILoginFormValues): Promise<any> => {
    return await postTokenToApi(values).unwrap();
  };

  return {
    onLogin,
    isLoading,
    isError
  };
};
