interface RouteConfig {
  path: URL;
  component?: React.ComponentType<any>;
  exact?: boolean;
}

export enum EnumRoute {
  SIGN_IN = "/sign-in",
  SIGN_UP = "/sign-up",
  FORGET_PASSWORD = "/forget-password",
}

export const AUTH_PAGE_TITLE: Record<EnumRoute, string> = {
  "/sign-in": "Login",
  "/sign-up": "sign up",
  "/forget-password": "forget password",
};

export const PATTER_VALIDATION = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  username: /^(?=[a-zA-Z0-9._]{3,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/,
  password:
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,64}$/,
};

class Routes {
  DOMAIN = "http://localhost:3000/";
  SING_IN = new URL(EnumRoute.SIGN_IN, this.DOMAIN);
  SIGN_UP = new URL(EnumRoute.SIGN_UP, this.DOMAIN);
  FORGET_PASSWORD = new URL(EnumRoute.FORGET_PASSWORD, this.DOMAIN);
}

export const routes = new Routes();
