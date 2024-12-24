import { PropsWithChildren, HTMLAttributes, FC } from "react";

interface PropsInputError
  extends PropsWithChildren,
    HTMLAttributes<HTMLParagraphElement> {}

const InputError: FC<PropsInputError> = ({
  className = "",
  children = "",
  role = "alert",
  ...props
}) => {
  return (
    <p
      role={role}
      className={`${className} text-left pl-[20px] mt-[4px] text-[11px] text-[#F01F0E] `}
      {...props}
    >
      {children}
    </p>
  );
};

export { InputError };
