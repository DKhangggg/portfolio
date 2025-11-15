import BlurText from "../components/BlurText";

export function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen min-h-screen flex flex-col justify-center items-center py-16"
    >
      <h1 className="text-6xl md:text-6xl font-bold text-center mb-12">
        <BlurText
          text="EXPERIENCE"
          delay={500}
          animateBy="words"
          direction="top"
          className="text-6xl mb-8"
        />
      </h1>
    </section>
  );
}
