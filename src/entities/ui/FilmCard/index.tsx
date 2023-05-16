import { FC, HTMLAttributes } from "react";
import CardImage from "./Card.png";
import { Button, Rating } from "@shared/ui";
import { BookmarkIcon } from "@heroicons/react/24/outline";
export type FilmCard = HTMLAttributes<HTMLDivElement>;
const FilmCard: FC<FilmCard> = () => {
  return (
    <div className="h-60 rounded-md relative group">
      <img src={CardImage} className="w-full h-full object-cover rounded-md" />
      <div className="transition ease-in duration-200 opacity-0 group-hover:opacity-100 absolute top-0 left-0 right-0 bottom-0 bg-black/20 p-4">
        <Rating className="bg-grey-600 absolute top-2 left-2" value={8.3} />
        <Button
          className="absolute top-2 right-2"
          variant="outline"
          shape="circle"
        >
          <BookmarkIcon className="h-5 w-5" />
        </Button>
        <span className="absolute right-2 bottom-2 text-grey-25 font-semibold text-sm">
          1ч 47мин
        </span>
      </div>
    </div>
  );
};

export default FilmCard;
