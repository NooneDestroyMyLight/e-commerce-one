"use client";
import { ComponentProps, FC, memo } from "react";
import { FieldError, useFormContext } from "react-hook-form";
import { Input } from "./input";
import { PATTER_VALIDATION } from "@/constant";
import { InputError } from "./input-error";
import { ISignUpForm } from "@/types";
import Image from "next/image";
import checkIcon from "../../../../public/input-check.svg";

export function CheckInputIcon() {
  return <Image src={checkIcon} alt={""} className="select-none" />;
}

interface PropsInputCheck {
  isValid: boolean;
}

const InputCheck: FC<PropsInputCheck> = ({ isValid }) => {
  return (
    <div
      className={`absolute right-[20px] top-[20px] transition opacity-0 ${
        isValid ? "opacity-[1]" : ""
      }`}
    >
      <CheckInputIcon />
    </div>
  );
};

const WrapperInputUsername: FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ISignUpForm>();
  const username = register("username", {
    required: { message: "Invalid value!", value: true },
    minLength: { value: 3, message: "Invalid value!" },
    maxLength: { value: 20, message: "Invalid value!" },
    pattern: { value: PATTER_VALIDATION.username, message: "Invalid value!" },
  });

  return (
    <Fieldset
      inputProps={{
        ...username,
        maxLength: username.maxLength,
        minLength: username.minLength,
        placeholder: "Name",
        type: "text",
        "aria-label": "Name",
        name: "username",
      }}
      labelProps={{ htmlFor: "Name", children: "Name" }}
      eMessage={errors.username?.message}
    />
  );
};

const WrapperInputEmail: FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ISignUpForm>();

  const email = register("email", {
    required: "Email is required",
    minLength: { value: 6, message: "Email must be at least 6 characters" },
    maxLength: {
      value: 254,
      message: "Email must be less than 254 characters",
    },
    pattern: {
      value: PATTER_VALIDATION.email,
      message: "Invalid email address",
    },
  });

  return (
    <Fieldset
      inputProps={{
        ...email,
        minLength: email.minLength,
        maxLength: email.maxLength,
        placeholder: "Email",
        type: "text",
        "aria-label": "Email",
      }}
      eMessage={errors.email?.message}
      labelProps={{ htmlFor: "Email", children: "Email" }}
    />
  );
};

const WrapperInputPassword: FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ISignUpForm>();

  const password = register("password", {
    required: { value: true, message: "Invalid password" },
    maxLength: { value: 64, message: "Invalid password" },
    minLength: { value: 8, message: "Invalid password" },
    pattern: { value: PATTER_VALIDATION.password, message: "Invalid password" },
  });

  return (
    <Fieldset
      inputProps={{
        ...password,
        maxLength: password.maxLength,
        minLength: password.maxLength,
        placeholder: "Password",
        type: "text",
        "aria-label": "Password",
      }}
      eMessage={errors.password?.message}
      labelProps={{ htmlFor: "Password", children: "Password" }}
    />
  );
};

interface PropsFieldset {
  inputProps: ComponentProps<"input">;
  labelProps?: ComponentProps<"label">;
  eMessage: string | undefined;
}

let Fieldset: FC<PropsFieldset> = ({ inputProps, eMessage, labelProps }) => {
  return (
    <fieldset>
      <div className="relative ">
        <Input
          {...inputProps}
          className="peer placeholder-transparent  outline-[grey]"
        />
        <label
          className={`absolute left-[20px] text-[#9B9B9B] text-[11px] top-[8px] peer-placeholder-shown:text-[14px] peer-placeholder-shown:top-[22px] peer-placeholder-shown:transition-all peer-placeholder-shown:leading-[20px]
            transition-all
            transition-duration-[0.1s] 
          `}
          {...labelProps}
        >
          {labelProps?.children}
        </label>
      </div>
      {eMessage && <InputError>{eMessage}</InputError>}
    </fieldset>
  );
};

Fieldset = memo(Fieldset);

export { WrapperInputUsername, WrapperInputEmail, WrapperInputPassword };
