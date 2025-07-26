import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Header() {
  return (
    <header className="py-8 px-6">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800">Sayed Ibrahim</h1>
        <div className="flex gap-4">
          <Button onClick={() => window.open("https://github.com/Lo22op")} variant="ghost" size="icon">
            <Github className="h-5 w-5" />
          </Button>
          <Button onClick={() => window.open("https://www.linkedin.com/in/sayed-ebrahem-a6541b261/")} variant="ghost" size="icon">
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button onClick={() => window.open("mailto:sayededdd@gmail.com")} variant="ghost" size="icon">
            <Mail className="h-5 w-5" />
          </Button>
        </div>
      </nav>
    </header>
  );
}
