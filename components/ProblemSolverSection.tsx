import { Card, CardContent } from "@/components/ui/card";
import { problemSolvingSteps } from "./site-data";

export default function ProblemSolverSection() {
  return (
    <section className="py-20 px-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-emerald-800 bg-clip-text text-transparent mb-4">
            I Solve Problems, Not Just Write Code
          </h3>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Every project is a puzzle waiting to be solved. I don't just copy tutorials - I analyze problems, design solutions, and deliver measurable results that make a real difference.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {problemSolvingSteps.map((step, idx) => (
            <Card key={idx} className={`border-0 shadow-lg bg-gradient-to-br from-${step.color}-50 to-${step.color}-100`}>
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 bg-${step.color}-500 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <h4 className={`text-xl font-bold text-${step.color}-700 mb-2`}>{step.title}</h4>
                <p className={`text-${step.color}-600`}>{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
