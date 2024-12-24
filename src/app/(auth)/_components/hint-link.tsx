import { ComponentProps, FC, HTMLAttributes, PropsWithChildren } from "react";
import Image from "next/image";
import Link from "next/link";
import arrowIcon from "../../../../public/arrow-2-red.svg";
export function ArrowIcon() {
  return <Image src={arrowIcon} alt={""} className="select-none" />;
}

const HintLink: FC<ComponentProps<"a">> = ({
  children,
  href = "/",
  ref,
  ...rest
}) => {
  return (
    <Link
      ref={ref}
      href={href}
      className={`flex items-center gap-[3px]`}
      {...rest}
    >
      <p className="text-[14px] leading-[20px] font-black">{children}</p>
      <ArrowIcon />
    </Link>
  );
};

export { HintLink };
