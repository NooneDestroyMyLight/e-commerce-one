import { FC } from "react";
import { PropsWithChildren } from "react";
import { AuthHeader } from "./header";
import { AuthFooter } from "./footer";
import { AUTH_PAGE_TITLE, EnumRoute } from "@/constant";
import { AuthTitle } from "./title";

// const AuthLayout: FC<PropsWithChildren> = async ({ children }) => {
//   const headersList = await headers();
//   const pathname = headersList.get("x-pathname");

//   const authTitle = pathname
//     ? AUTH_PAGE_TITLE[pathname as EnumRoute]
//     : undefined;

//   return (
//     <div className="relative pb-[245px]  px-[16px] bg-[#F9F9F9]">
//       <div className="sticky top-0 z-[50]">
//         <AuthHeader textTitle={authTitle} />
//       </div>
//       <div className="text-left mt-[18px]">
//         <AuthTitle>{authTitle}</AuthTitle>
//       </div>
//       <div className="pt-[73px]">{children}</div>
//       <div className="absolute bottom-0 left-0 right-0">
//         <AuthFooter />
//       </div>
//     </div>
//   );
// };
// export default AuthLayout;

interface PropsLayout extends PropsWithChildren {
  authTitle?: string;
  isFooter?: boolean;
}

const Layout: FC<PropsLayout> = ({
  children,
  authTitle = AUTH_PAGE_TITLE[EnumRoute.SIGN_UP],
  isFooter = true,
}) => {
  return (
    <div className="relative pb-[245px]  px-[16px] bg-[#F9F9F9]">
      <div className="sticky top-0 z-[50]">
        <AuthHeader textTitle={authTitle} />
      </div>
      <div className="text-left mt-[18px]">
        <AuthTitle>{authTitle}</AuthTitle>
      </div>
      <div className="pt-[73px]">{children}</div>
      {isFooter && (
        <div className="absolute bottom-0 left-0 right-0">
          <AuthFooter />
        </div>
      )}
    </div>
  );
};

export default Layout;
