import { FC } from "react";
import Image from "next/image";
import arrow from "../../../../public/arrow-1.svg";
import { AuthTitle } from "./title";
import { WithTitleProps } from "@/types";

export function Arrow() {
  return <Image src={arrow} alt={""} className="select-none" />;
}

// interface PropsAuthHeader extends WithTitleProps {}

const AuthHeader: FC<WithTitleProps> = ({ textTitle = "titleText!" }) => {
  return (
    <header className="flex h-[44px] items-center bg-[#F9F9F9]">
      <div className="absolute top-[8px]">
        <Arrow />
      </div>
    </header>
  );
};
export { AuthHeader };
