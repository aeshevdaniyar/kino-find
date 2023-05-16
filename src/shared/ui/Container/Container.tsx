import { FC, HTMLAttributes, PropsWithChildren } from "react";
import cn from "classnames";
export type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  maxW?: "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl";
};
const Container: FC<PropsWithChildren<ContainerProps>> = ({
  className,
  children,
  maxW,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn(className, "px-3", "mx-auto", {
        ["max-w-xl"]: maxW == "xl",
        ["max-w-2xl"]: maxW == "2xl",
        ["max-w-3xl"]: maxW == "3xl",
        ["max-w-4xl"]: maxW == "4xl",
        ["max-w-5xl"]: maxW == "5xl",
        ["max-w-6xl"]: maxW == "6xl",
        ["max-w-7xl"]: maxW == "7xl",
      })}
    >
      {children}
    </div>
  );
};

export default Container;
