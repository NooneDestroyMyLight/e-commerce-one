import { FC, PropsWithChildren } from "react";
import Image from "next/image";
import facebookIcon from "../../../../public/auth-i/facebook.svg";
import googleIcon from "../../../../public/auth-i/google.svg";

const Icon: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="rounded-[24px] pt-[24px] pl-[34px] pb-[24px] pr-[34px] shadow-[0_1px_8px_rgba(0,0,0,0.05)]">
      {children}
    </div>
  );
};

export function FaceBook() {
  return <Image src={facebookIcon} alt={"Facebook"} className="select-none" />;
}

export function Google() {
  return <Image src={googleIcon} alt={"Google"} className="select-none" />;
}

const AuthFooter: FC = () => {
  return (
    <div className="pb-[23px]">
      <p className="text-center">Or sign up with social account</p>
      <div className="flex justify-center gap-[16px] mt-[12px]">
        <Icon>
          <FaceBook />
        </Icon>
        <Icon>
          <Google />
        </Icon>
      </div>
    </div>
  );
};
export { AuthFooter };
