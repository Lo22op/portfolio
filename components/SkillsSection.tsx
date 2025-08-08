import { Card, CardContent } from "@/components/ui/card";
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub , FaSass} from "react-icons/fa";
import { SiJavascript, SiRedux, SiTailwindcss, SiVite, SiTypescript ,SiPostman ,SiAxios ,SiReactrouter} from "react-icons/si";
import { MdPsychology } from "react-icons/md";

const skills = [
	{ name: "HTML", icon: FaHtml5 },
	{ name: "CSS", icon: FaCss3Alt },
	{ name: "JavaScript", icon: SiJavascript },
	{ name: "React", icon: FaReact },
	{ name: "Redux Toolkit", icon: SiRedux },
	{ name: "Tailwind CSS", icon: SiTailwindcss },
	{ name: "Vite", icon: SiVite },
	{ name: "Git", icon: FaGitAlt },
	{ name: "GitHub", icon: FaGithub },
	{ name: "TypeScript", icon: SiTypescript },
	{ name: "Problem Solving", icon: MdPsychology },
	{ name: "Postman", icon: SiPostman },
	{ name: "Axios", icon: SiAxios },
	{ name: "React Router", icon: SiReactrouter },
	{ name: "SASS", icon: FaSass },
];

export default function SkillsSection() {
	return (
		<section className="py-20 px-6 bg-gradient-to-r from-emerald-50/50 to-orange-50/50">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-16">
					<h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent mb-4">
						Technical Skills
					</h3>
					<p className="text-slate-600 text-lg">
						Technologies and tools I work with
					</p>
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{skills.map((skill, index) => (
						<Card
							key={index}
							className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-emerald-200/50"
						>
							<CardContent className="p-8 text-center">
								<skill.icon className="h-12 w-12 mx-auto mb-4 text-emerald-600" />
								<h4 className="text-xl font-semibold text-slate-800 mb-2">
									{skill.name}
								</h4>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
