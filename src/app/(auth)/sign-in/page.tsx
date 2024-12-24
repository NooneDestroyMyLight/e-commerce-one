"use client";
import { Button } from "@/components/ui/button";
import { ISignInForm } from "@/types";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import {
  WrapperInputEmail,
  WrapperInputPassword,
} from "../_components/auth-input";
import { HintLink } from "../_components/hint-link";
import { AUTH_PAGE_TITLE, routes } from "@/constant";
import Layout from "../_components/layout";

export default function SignUpPage() {
  const methods = useForm<ISignInForm>({ mode: "onChange" });
  const onSubmit: SubmitHandler<ISignInForm> = (data) => console.log(data);

  return (
    <Layout authTitle={AUTH_PAGE_TITLE["/sign-in"]}>
      <div className="pb-[48px] relative">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="flex flex-col pb-[64px] gap-[8px] relative">
              <WrapperInputEmail />
              <WrapperInputPassword />
              <div className="absolute bottom-[28px] right-0">
                <HintLink href={routes.FORGET_PASSWORD.href}>
                  {"Forgot your password?"}
                </HintLink>
              </div>
            </div>
            <div className="absolute botton-0 left-0 right-0">
              <Button type="submit">SIGN IN</Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </Layout>
  );
}
