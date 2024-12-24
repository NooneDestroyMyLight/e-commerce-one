export interface WithTitleProps {
  textTitle?: string;
}

export interface ISignUpForm {
  username: string;
  email: string;
  password: string;
}

export interface ISignInForm extends Omit<ISignUpForm, "username"> {}
