import { HeroCard } from "@entities";
import hero from "./Section.png";
import { Container } from "@shared/ui";

const Hero = () => {
  return (
    <div className="relative h-full" style={{ height: "50rem" }}>
      <img
        src={hero}
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      <Container
        maxW="7xl"
        className="pt-16 pb-28 h-full flex items-end"
      >
        <HeroCard />
      </Container>
    </div>
  );
};

export default Hero;
