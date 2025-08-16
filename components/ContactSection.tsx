import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { contactSectionData } from "./site-data";

export default function ContactSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-slate-900 via-emerald-900 to-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-white mb-6">{contactSectionData.title}</h3>
        <p className="text-slate-300 text-lg mb-8 leading-relaxed">
          {contactSectionData.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => window.open(contactSectionData.button.link)}
            size="lg"
            className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-lg"
          >
            <Mail className="mr-2 h-4 w-4" />
            {contactSectionData.button.text}
          </Button>
        </div>
      </div>
    </section>
  );
}
