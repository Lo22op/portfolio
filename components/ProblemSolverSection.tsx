import { Card, CardContent } from "@/components/ui/card";

export default function ProblemSolverSection() {
  return (
    <section className="py-20 px-6">
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
          <Card className="border-0 shadow-lg bg-gradient-to-br from-red-50 to-red-100">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h4 className="text-xl font-bold text-red-700 mb-2">Identify Problem</h4>
              <p className="text-red-600">Analyze what's really broken and why it matters to users</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="text-xl font-bold text-blue-700 mb-2">Design Solution</h4>
              <p className="text-blue-600">Choose the right tools and approach for maximum impact</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h4 className="text-xl font-bold text-green-700 mb-2">Measure Results</h4>
              <p className="text-green-600">Track improvements and deliver measurable value</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
