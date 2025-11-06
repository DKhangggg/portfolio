import Button from "./button";

export function Navbar() {
  return (
    <header className="flex justify-between items-center p-2 bg-gray-900 text-white sticky top-0 z-50 w-full bg-gray-900/50 backdrop-blur-md">
      <h1 className="text-2xl font-bold">My Portfolio</h1>

      <div className="flex gap-4">
        <Button>Home</Button>
        <Button>About</Button>
        <Button>Skills</Button>
        <Button>Experience</Button>
        <Button>Projects</Button>
        <Button>Coursework & Certifications</Button>
      </div>
    </header>
  );
}
