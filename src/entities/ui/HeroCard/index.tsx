import { BookmarkIcon, PlayIcon } from "@heroicons/react/24/outline";
import { Button, Rating } from "@shared/ui";

const HeroCard = () => {
  return (
    <div className="flex justify-between w-full">
      <div className="max-w-xl">
        <h1 className="text-grey-25 font-semibold text-6xl mb-3">
          Король и шут
        </h1>
        <div className="flex gap-8 mb-4 items-center">
          <Rating value={8.3} />
          <div className="text-grey-300">
            1 сезон • музыка • биография • 2023
          </div>
        </div>
        <p className="text-grey-200 text-lg mb-8">
          Чтобы сбежать от реальности, они изобрели свой мир — с колдунами и
          лесниками. Главный сериал весны
        </p>

        <div className="flex gap-4">
          <Button>
            <PlayIcon className="w-5 h-5" />
            Смотреть сериал
          </Button>
          <Button variant="outline">Трейлер</Button>
        </div>
      </div>
      <Button variant="outline" shape="circle" className="self-end">
        <BookmarkIcon className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default HeroCard;
