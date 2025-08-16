import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "./site-data";

export default function ProjectsSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-slate-50 to-emerald-50/30" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-emerald-700 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h3>
          <p className="text-slate-600 text-lg">A showcase of my best work - 6 carefully selected projects</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-orange-200/50 group">
              <CardContent className="p-6">
                <div className="mb-4">
                  <span className="text-xs text-orange-700 bg-orange-100 px-2 py-1 rounded-full font-medium">
                    {project.type}
                  </span>
                </div>
                <h4 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-emerald-700 transition-colors">
                  {project.title}
                </h4>
                <p className="text-slate-600 mb-4 leading-relaxed text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button onClick={() => window.open(project.link)} variant="ghost" size="sm" className="flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button onClick={() => window.open("https://github.com/Lo22op")} size="lg" variant="outline">
            <Github className="mr-2 h-4 w-4" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
