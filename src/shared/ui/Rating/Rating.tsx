import { StarIcon } from "@heroicons/react/24/solid";
import { FC, HTMLAttributes } from "react";
import cn from "classnames";

export type RatingProps = HTMLAttributes<HTMLDivElement> & {
  value: number;
};

const Rating: FC<RatingProps> = ({ className, value, ...props }) => {
  return (
    <div className={cn("inline-flex items-center gap-1 p-1 rounded", className)} {...props}>
      <StarIcon className="w-5 h-5 text-warning-400 " />
      <span className="text-grey-300">{value}</span>
    </div>
  );
};

export default Rating;
