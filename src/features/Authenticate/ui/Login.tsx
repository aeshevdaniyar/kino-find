import LOGO from "@assets/logo.svg";
import { Button, Input } from "@shared/ui";

const Login = () => {
  return (
    <div className="flex w-full min-h-screen">
      <div className="w-full min-h-full flex justify-center items-center">
        <div className="max-w-sm w-full">
          <div className="text-center mb-8">
            <img src={LOGO} className="mx-auto mb-6" />

            <h1 className="text-grey-25 text-3xl font-semibold mb-3">
              С возвращением!
            </h1>
            <p className="text-grey-300"> Пожалуйста, введите свои данные</p>
          </div>

          <form>
            <div className="flex flex-col gap-4">
              <Input label="Email" placeholder="Начните вводить здесь" />
              <Input label="Пароль" placeholder="Начните вводить здесь" />
            </div>

            <Button variant="link" className="text-primary-600 p-0">
              Забыли пароль
            </Button>

            <Button type="submit" className="w-full mt-10">
              Войти
            </Button>
          </form>
          <p className="mt-8 text-gray-300 text-sm">
            Еще нет аккаунта?{" "}
            <Button variant="link" className="text-primary-600 p-0">
              Создать аккаунт
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
