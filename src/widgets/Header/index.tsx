import { Navbar, Menu, Container, Button, Dropdown } from "@shared/ui";
import { FC, useState } from "react";

import logo from "@assets/logo.svg";
import {
  ChevronRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import HomeSearch from "@features/HomeSearch";
import { XMarkIcon } from "@heroicons/react/24/solid";

const Header: FC = () => {
  const [openSearchbar, setSearchBar] = useState(false);

  return (
    <Container maxW="7xl">
      <Navbar className="justify-between relative">
        {!openSearchbar && (
          <div className="flex items-center">
            <img src={logo} />
            <Menu className="ml-10 ">
              <Menu.Item>Главная</Menu.Item>
              <Dropdown>
                <Dropdown.Toggle>
                  Сериалы <ChevronRightIcon className="h-4 w-4" />
                </Dropdown.Toggle>
                <Dropdown.Menu className="flex gap-14 w-max left-0 bg-black">
                  <Menu direction="vertical">
                    <h1 className="text-grey-25 font-bold ">Жанры</h1>
                    <Menu.Item>Биография</Menu.Item>
                    <Menu.Item>Боевики</Menu.Item>
                    <Menu.Item>Военные</Menu.Item>
                    <Menu.Item>Документальные</Menu.Item>
                    <Menu.Item>Дорамы</Menu.Item>
                    <Menu.Item>Драмы</Menu.Item>
                    <Menu.Item>Исторические</Menu.Item>
                    <Menu.Item>Комедийные</Menu.Item>
                  </Menu>
                  <Menu direction="vertical">
                    <h1 className="text-grey-25 font-bold">Страны</h1>
                    <Menu.Item>Русские</Menu.Item>
                    <Menu.Item>Зарубежные</Menu.Item>
                    <Menu.Item>Американские</Menu.Item>
                  </Menu>
                  <Menu direction="vertical">
                    <h1 className="text-grey-25 font-bold">Годы</h1>
                    <Menu.Item>Сериалы 2023г</Menu.Item>
                    <Menu.Item>Сериалы 2023г</Menu.Item>
                    <Menu.Item>Сериалы 2023г</Menu.Item>
                  </Menu>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown>
                <Dropdown.Toggle>
                  Фильмы <ChevronRightIcon className="h-4 w-4" />
                </Dropdown.Toggle>
                <Dropdown.Menu className="flex gap-14 w-max left-0 bg-black">
                  <Menu direction="vertical">
                    <h1 className="text-grey-25 font-bold">Жанры</h1>
                    <Menu.Item>Биография</Menu.Item>
                    <Menu.Item>Боевики</Menu.Item>
                    <Menu.Item>Военные</Menu.Item>
                    <Menu.Item>Документальные</Menu.Item>
                    <Menu.Item>Дорамы</Menu.Item>
                    <Menu.Item>Драмы</Menu.Item>
                    <Menu.Item>Исторические</Menu.Item>
                    <Menu.Item>Комедийные</Menu.Item>
                  </Menu>
                  <Menu direction="vertical">
                    <h1 className="text-grey-25 font-bold">Страны</h1>
                    <Menu.Item>Русские</Menu.Item>
                    <Menu.Item>Зарубежные</Menu.Item>
                    <Menu.Item>Американские</Menu.Item>
                  </Menu>
                  <Menu direction="vertical">
                    <h1 className="text-grey-25 font-bold">Годы</h1>
                    <Menu.Item>Фильмы 2023г</Menu.Item>
                    <Menu.Item>Фильмы 2023г</Menu.Item>
                    <Menu.Item>Фильмы 2023г</Menu.Item>
                  </Menu>
                </Dropdown.Menu>
              </Dropdown>
              <Menu.Item>Что нового</Menu.Item>
            </Menu>
          </div>
        )}
        {openSearchbar && (
          <div className="flex items-center w-full">
            <img src={logo} />
            <div className="px-8 w-full">
              <HomeSearch />
            </div>
          </div>
        )}
        <div className="flex items-center">
          {!openSearchbar ? (
            <MagnifyingGlassIcon
              onClick={() => {
                setSearchBar((openSearchbar) => !openSearchbar);
              }}
              className="h-6 w-6 text-white cursor-pointer hover:text-primary-900"
            />
          ) : (
            <XMarkIcon
              onClick={() => {
                setSearchBar((openSearchbar) => !openSearchbar);
              }}
              className="h-6 w-6 text-white cursor-pointer hover:text-primary-900"
            />
          )}

          <Button variant="link" className="mr-3">
            Войти
          </Button>
          <Button>30 Дней бесплатно</Button>
        </div>
      </Navbar>
    </Container>
  );
};

export default Header;
