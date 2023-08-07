"use client";

import { useEffect, useState } from "react";
import FormLogin, { ILoginFormValues } from "../formLogin/FormLogin";
import { useSubmitLogin } from "./hook/useSubmitLogin";
import { useIntl } from "react-intl";

export const ContainerLogin: React.FC = () => {
  const intl = useIntl();

  const [loginError, setLoginError] = useState<string>("");
  const { onSubmitLogin, isLoading, isError } = useSubmitLogin();

  const onSubmit = (values: ILoginFormValues): void => {
    onSubmitLogin(values);
  };

  useEffect(() => {
    setLoginError(intl.formatMessage({ id: "login.form.errorEmailOrPass" }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError]);

  return (
    <FormLogin
      onSubmit={onSubmit}
      isLoading={isLoading}
      errorLogin={isError ? loginError : ""}
    />
  );
};
