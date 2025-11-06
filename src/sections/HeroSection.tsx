import BlurText from "../components/BlurText";
import MagicBento, { BentoCardProps } from "../components/BentoCard";

export function HeroSection() {
  const myCards: BentoCardProps[] = [
    {
      color: "#060010",
      title: "About myself",
      description: "I am a passionate web developer...",
      label: "Full-Stack",
    },
    {
      color: "#060010",
      title: "My Experience",
      description: "I have experience in building web applications...",
      label: "Overview",
    },
    {
      color: "#060010",
      title: "My Projects",
      description: "Centralized data view",
      label: "Overview",
    },
    {
      color: "#060010",
      title: "My Contacts",
      description: "Centralized data view",
      label: "Overview",
    },
    {
      color: "#060010",
      title: "My Skills",
      description: "Centralized data view",
      label: "Overview",
    },
  ];
  return (
    <section
      id="hero"
      className="min-h-screen min-h-screen flex flex-col justify-center items-center py-16"
    >
      <h1 className="text-6xl md:text-6xl font-bold text-center mb-12">
        <BlurText
          text="WELCOME TO MY PORTFOLIO"
          delay={500}
          animateBy="words"
          direction="top"
          className="text-6xl mb-8"
        />
      </h1>
      <MagicBento cardData={myCards}></MagicBento>
    </section>
  );
}
