import Header from "@widgets/Header";
import Hero from "@widgets/Hero";
import Content from "./Content";
import FilmList from "@widgets/FIlmList";
import { Container } from "@shared/ui";
import Footer from "@widgets/Footer";

export const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Content>
        <Container maxW="7xl">
          <div className="flex flex-col gap-16">
            <FilmList
              films={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
              path={"/recomend"}
              title="Рекомендовано вам"
              perView={6}
            />
            <FilmList
              films={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
              path={"/recomend"}
              title="Рекомендовано вам"
              perView={3}
            />
          </div>
        </Container>
      </Content>
      <Footer />
    </>
  );
};

export default HomePage;
