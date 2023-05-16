import { Container, Menu } from "@shared/ui";
import logo from "@assets/logo.svg";
const Footer = () => {
  return (
    <footer className="pt-16 pb-12">
      <Container maxW="7xl">
        <div className="mb-16">
          <img src={logo} className="mb-8" />
          <p className="text-gray-200 mb-8">
            Федеральные каналы доступны для
            <br /> бесплатного просмотра круглосуточно
          </p>
          <Menu>
            <Menu.Item>О нас</Menu.Item>
            <Menu.Item>Партнеры</Menu.Item>
            <Menu.Item>Контакты</Menu.Item>
            <Menu.Item>Помощь</Menu.Item>
            <Menu.Item>Политика конфиденциальности</Menu.Item>
          </Menu>
        </div>
        <div className="flex justify-between pt-8 border-t border-grey-600">
          <span className="text-grey-400">© 2033 Все права защищены</span>
          <div className="flex gap-5"></div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
