import { Card, CardContent } from "@/components/ui/card";
import { Calendar, TrendingUp, BookOpen, Target, Sparkles, Database } from "lucide-react";

const progressLog = [
  {
    date: "Aug 15, 2025",
    type: "learning",
    icon: BookOpen,
    title: "Planning to Learn TypeScript",
    description:
      "Will dive into type safety and better code organization. Planning to work through official docs and build small projects.",
    tags: ["TypeScript", "Learning"],
  },
  {
    date: "Sep 20, 2025",
    type: "improvement",
    icon: TrendingUp,
    title: "Will Optimize E-commerce App Performance",
    description:
      "Planning to implement lazy loading for product images and reduce bundle size by 30%. Goal is faster page loads for users.",
    tags: ["Performance", "React", "Optimization"],
  },
  {
    date: "Oct 25, 2025",
    type: "project",
    icon: "Code",
    title: "Will Build Custom React Hooks",
    description:
      "Planning to create reusable hooks for form validation and API calls. This will speed up future development significantly.",
    tags: ["React", "Hooks", "Reusability"],
  },
  {
    date: "Nov 1, 2025",
    type: "learning",
    icon: Target,
    title: "Will Explore Testing with Jest",
    description:
      "Planning to learn unit testing fundamentals. Will write my first test cases for React components to ensure code reliability.",
    tags: ["Testing", "Jest", "Quality"],
  },
  {
    date: "Dec 5, 2025",
    type: "improvement",
    icon: Sparkles,
    title: "Will Enhance HR System UX",
    description:
      "Planning to add loading states and error handling. Goal is to improve user feedback with better visual cues.",
    tags: ["UX", "React", "User Experience"],
  },
  {
    date: "Jan 1, 2026",
    type: "learning",
    icon: Database,
    title: "Will Deep Dive into State Management",
    description:
      "Planning to master Redux Toolkit patterns and explore Zustand as an alternative. Will understand when to use each approach.",
    tags: ["Redux", "State Management", "Architecture"],
  },
];

function getProgressIcon(type: string) {
  switch (type) {
    case "learning":
      return "bg-blue-500";
    case "improvement":
      return "bg-green-500";
    case "project":
      return "bg-purple-500";
    default:
      return "bg-gray-500";
  }
}

export default function ProgressLogSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Building Myself Day by Day
          </h3>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Continuous learning is my superpower. Here's what I've been working on lately - because growth never stops.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-200 via-blue-200 to-emerald-200"></div>
          <div className="space-y-8">
            {progressLog.map((entry, index) => (
              <div key={index} className="relative flex items-start gap-6">
                <div className={`relative z-10 w-16 h-16 ${getProgressIcon(entry.type)} rounded-full flex items-center justify-center shadow-lg`}>
                  <entry.icon className="h-8 w-8 text-white" />
                </div>
                <Card className="flex-1 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-slate-800">{entry.title}</h4>
                      <span className="text-sm text-slate-500 flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {entry.date}
                      </span>
                    </div>
                    <p className="text-slate-600 mb-4 leading-relaxed">{entry.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {entry.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-xs bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-2 py-1 rounded-full font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-purple-50 to-blue-50 inline-block">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-slate-800">Learning Journey Ahead</h4>
                  <p className="text-sm text-slate-600">Coming up: Advanced React Patterns & Testing</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
