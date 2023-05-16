import FilmCard from "@entities/ui/FilmCard";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Button } from "@shared/ui";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export type FilmList = {
  films: any[];
  title?: string;
  path: string;
  perView: number;
};

const FilmList: FC<FilmList> = ({ films, title, path, perView }) => {
  return (
    <div>
      <Button className="text-2xl" variant="link">
        <Link to={path}>{title}</Link>
        <ChevronRightIcon className="h-5 w-5" />
      </Button>

      <Swiper
        spaceBetween={32}
        slidesPerView={perView}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation]}
        navigation={true}
      >
        {films.map(() => {
          return (
            <SwiperSlide>
              <FilmCard />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default FilmList;
