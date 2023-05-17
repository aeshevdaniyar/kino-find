import LOGO from "@assets/logo.svg";
import { Button, Input } from "@shared/ui";

const Register = () => {
  return (
    <div className="flex w-full min-h-screen">
      <div className="w-full min-h-full flex justify-center items-center">
        <div className="max-w-sm w-full">
          <div className="text-center mb-8">
            <img src={LOGO} className="mx-auto mb-6" />

            <h1 className="text-grey-25 text-3xl font-semibold mb-3">
              Создать новый аккаунт
            </h1>
            <p className="text-grey-300">Начать 30 дневный пробный период</p>
          </div>

          <form>
            <div className="flex flex-col gap-4">
              <Input label="Имя" placeholder="Начните вводить здесь" />
              <Input label="Email" placeholder="Начните вводить здесь" />
              <Input
                type="password"
                label="Пароль"
                placeholder="Начните вводить здесь"
              />
            </div>

            <Button type="submit" className="w-full mt-10">
              Зарегистрироваться
            </Button>
          </form>
          <p className="mt-8 text-gray-300 text-sm">
            У вас уже есть аккаунт?{" "}
            <Button variant="link" className="text-primary-600 p-0">
              Войти
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
