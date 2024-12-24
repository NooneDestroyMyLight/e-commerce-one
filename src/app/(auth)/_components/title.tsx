import { ElementType, FC, forwardRef, HTMLAttributes } from "react";

interface AuthTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: ElementType;
}

const AuthTitle = forwardRef<HTMLHeadElement, AuthTitleProps>(
  (
    { className = "", children = "AuthTitle!", as: Tag = "h1", ...props },
    ref
  ) => {
    return (
      <Tag
        className={`first-letter:uppercase ${className} font-bold text-left text-[34px] `}
        ref={ref}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);
export { AuthTitle };
