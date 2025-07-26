import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-slate-900 via-emerald-900 to-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-white mb-6">Have a Project in Mind?</h3>
        <p className="text-slate-300 text-lg mb-8 leading-relaxed">
          I'm looking for new opportunities in frontend development. Let's talk about your next project!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => window.open("https://wa.me/201225260935?text=Hi,%20I%20have%20a%20project%20in%20mind%20and%20want%20to%20discuss%20it%20with%20you.")}
            size="lg"
            className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-lg"
          >
            <Mail className="mr-2 h-4 w-4" />
            Send Message
          </Button>
        </div>
      </div>
    </section>
  );
}
