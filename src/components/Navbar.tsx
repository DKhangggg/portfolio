import Button from "./button";

export function Navbar() {
  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className="flex justify-between items-center p-2 bg-gray-900 text-white sticky top-0 z-50 w-full bg-gray-900/50 backdrop-blur-md">
      <h1 className="text-2xl font-bold">My Portfolio</h1>

      <div className="flex gap-4">
        <Button onClick={() => handleScroll("home")}>Home</Button>
        <Button onClick={() => handleScroll("about-me")}>About</Button>
        <Button onClick={() => handleScroll("skills")}>Skills</Button>
        <Button onClick={() => handleScroll("experience")}>Experience</Button>
        <Button onClick={() => handleScroll("projects")}>Projects</Button>
        <Button onClick={() => handleScroll("certifications")}>
          Coursework & Certifications
        </Button>
      </div>
    </header>
  );
}
