import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import { LoadingButton } from "@mui/lab";
import { Alert, Box, Grid, InputLabel, useTheme } from "@mui/material";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { useIntl } from "react-intl";

import GenericInputForm from "../../generic/GenericInputForm/GenericInputForm";
import IntlMessages from "@/app/utils/IntlMessages";
import { validationSchema } from "./validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";

export interface ILoginFormValues {
  email: string;
  password: string;
}

interface IFormLoginProps {
  onSubmit: (values: ILoginFormValues) => void;
  isLoading: boolean;
  errorLogin?: string;
}

const FormLogin: React.FC<IFormLoginProps> = ({
  onSubmit,
  isLoading,
  errorLogin,
}) => {
  const intl = useIntl();
  const theme = useTheme();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormValues>({
    resolver: yupResolver(validationSchema),
    mode: 'onTouched'
  });

  return (
    <Box >
      <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
        <Grid container rowSpacing={4} sx={{ mb: 5 }}>
          {errorLogin && (
            <Grid item xs={12}>
              <Alert severity="error" sx={{ fontSize: "0.8rem" }}>
                {errorLogin}
              </Alert>
            </Grid>
          )}
          <Grid item xs={12}>
            <InputLabel>
              <IntlMessages id="login.form.email" />
            </InputLabel>
            <GenericInputForm
              placeholder={intl.formatMessage({
                id: "login.form.email.placeholder",
              })}
              variant="outlined"
              error={!!errors.email}
              helperText={errors?.email?.message as string}
              {...register("email", { required: true })}
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <InputLabel>
              <IntlMessages id="login.form.password" />
            </InputLabel>
            <GenericInputForm
              type="password"
              placeholder={intl.formatMessage({
                id: "login.form.password.placeholder",
              })}
              variant="outlined"
              error={!!errors.password}
              helperText={errors?.password?.message as string}
              {...register("password", { required: true })}
              fullWidth
            />
          </Grid>
        </Grid>

        <div>
          <LoadingButton
            loading={isLoading}
            variant="contained"
            color="primary"
            type="submit"
            size="large"
            endIcon={<LoginOutlinedIcon />}
          >
            <IntlMessages id="login.form.loginButton" />
          </LoadingButton>
        </div>
      </Box>
    </Box>
  );
};

export default FormLogin;
