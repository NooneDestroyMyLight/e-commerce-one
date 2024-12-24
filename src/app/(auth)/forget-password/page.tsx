"use client";
import { Button } from "@/components/ui/button";
import { AUTH_PAGE_TITLE, routes } from "@/constant";
import { ISignInForm } from "@/types";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { WrapperInputEmail } from "../_components/auth-input";

import Layout from "../_components/layout";

export default function ForgotPasswordPage() {
  const methods = useForm<ISignInForm>({ mode: "onChange" });
  const onSubmit: SubmitHandler<ISignInForm> = (data) => console.log(data);

  return (
    <Layout authTitle={AUTH_PAGE_TITLE["/forget-password"]} isFooter={false}>
      <div className="pb-[48px] relative">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="flex flex-col pb-[70px] gap-[8px] relative">
              <WrapperInputEmail />
            </div>
            <div className="absolute botton-0 left-0 right-0">
              <Button type="submit">send</Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </Layout>
  );
}
