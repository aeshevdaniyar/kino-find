import { FC, PropsWithChildren } from "react";

const Content: FC<PropsWithChildren> = ({ children }) => {
  return <main className="py-24">{children}</main>;
};

export default Content;
