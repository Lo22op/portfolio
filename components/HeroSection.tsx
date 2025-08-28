import { Button } from "@/components/ui/button";
import { Code, Sparkles, Mail, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="py-20 px-6 rounded-2xl shadow-lg">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* صورة شخصية */}
        <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-emerald-200 shadow-lg bg-gradient-to-br from-emerald-100 to-orange-100 flex items-center justify-center">
          <Image
            src="/sayed.jpeg"
            alt="Sayed Ibrahim photo"
            width={320}
            height={320}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        {/* بيانات تعريفية */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-emerald-800 bg-clip-text text-transparent mb-4">
            Hi, I'm Sayed Ibrahim
          </h2>
          <p className="text-lg text-slate-600 mb-4 italic font-medium">
            "I believe that code can produce results that make clients come back again. The most important thing is customer satisfaction."
          </p>
          <p className="text-xl text-slate-700 mb-8 leading-relaxed max-w-2xl">
            Frontend Developer passionate about building beautiful, interactive, and fast digital experiences. I use React, Next.js, and modern tools to deliver responsive web apps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg w-full sm:w-auto"
              onClick={() => window.open("mailto:sayededdd@gmail.com")}
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
            <Button
              onClick={() => window.open("https://github.com/Lo22op")}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              View Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
