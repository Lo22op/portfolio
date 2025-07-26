import { Button } from "@/components/ui/button";
import { Code, Sparkles, Mail, ExternalLink } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <div className="relative w-32 h-32 mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-500 to-orange-500 rounded-full animate-pulse"></div>
            <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
              <div className="relative">
                <Code className="h-12 w-12 text-emerald-600 animate-bounce" />
                <Sparkles className="h-6 w-6 text-orange-500 absolute -top-2 -right-2 animate-spin" />
              </div>
            </div>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-emerald-800 bg-clip-text text-transparent mb-4">
            Hi, I'm Sayed Ibrahim
          </h2>
          <p className="text-lg text-slate-600 mb-6 italic font-medium">
            "I believe that code can produce results that make clients come back again, the most important thing is customer satisfaction"
          </p>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            young Frontend Developer who loves creating beautiful and interactive digital experiences. I work with modern technologies like React and Next.js to build responsive and fast websites.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg">
              <Mail onClick={() => window.open("mailto:sayededdd@gmail.com")} className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
            <Button onClick={() => window.open("https://github.com/Lo22op")} variant="outline" size="lg">
              <ExternalLink className="mr-2 h-4 w-4" />
              View Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
