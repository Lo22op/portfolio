import { FaBookOpen, FaSyncAlt, FaCheckCircle } from "react-icons/fa";
import { MdUpcoming } from "react-icons/md";
import { learning, review } from "./site-data";

function getStatusStyle(status: string) {
  switch (status) {
    case "Current":
      return "bg-emerald-100 text-emerald-700 border-emerald-300";
    case "Upcoming":
      return "bg-blue-100 text-blue-700 border-blue-300";
    case "Completed":
      return "bg-gray-100 text-gray-500 border-gray-300";
    default:
      return "bg-gray-100 text-gray-500 border-gray-300";
  }
}

export default function ProgressLogSection() {
  return (
    <section className="py-12 px-2 md:px-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-4 bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
          Progress & Learning Journey
        </h2>
        <p className="text-center text-slate-500 mb-10 text-lg">A quick look at what I'm learning and reviewing right now</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Learning Column */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <FaBookOpen className="text-blue-700" />
              <h4 className="text-lg font-bold text-blue-700">Learning</h4>
            </div>
            <div className="rounded-t-lg h-2 bg-blue-700 mb-4" />
            <div className="space-y-4">
              {learning.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className={`rounded-xl border ${getStatusStyle(item.status)} flex items-center gap-4 p-4 shadow-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-emerald-200/60 hover:border-emerald-400 hover:bg-emerald-50/40 cursor-pointer${item.status === "Current" ? " bg-emerald-50" : ""}`}
                  >
                    <Icon className="w-7 h-7" />
                    <div className="flex-1">
                      <div className="font-semibold text-slate-800">{item.title}</div>
                      <div className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                        <span>{item.duration}</span>
                      </div>
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${item.status === "Current" ? "bg-emerald-200 text-emerald-800" : item.status === "Upcoming" ? "bg-blue-200 text-blue-800" : "bg-gray-200 text-gray-600"}`}>{item.status}</span>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Review Column */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <FaSyncAlt className="text-fuchsia-600" />
              <h4 className="text-lg font-bold text-fuchsia-600">Review</h4>
            </div>
            <div className="rounded-t-lg h-2 bg-fuchsia-600 mb-4" />
            <div className="space-y-4">
              {review.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className={`rounded-xl border ${getStatusStyle(item.status)} flex items-center gap-4 p-4 shadow-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-fuchsia-200/60 hover:border-fuchsia-400 hover:bg-fuchsia-50/40 cursor-pointer${item.status === "Current" ? " bg-emerald-50" : ""}`}
                  >
                    <Icon className="w-7 h-7" />
                    <div className="flex-1">
                      <div className="font-semibold text-slate-800">{item.title}</div>
                      <div className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                        <span>{item.duration}</span>
                      </div>
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${item.status === "Current" ? "bg-emerald-200 text-emerald-800" : item.status === "Upcoming" ? "bg-blue-200 text-blue-800" : "bg-gray-200 text-gray-600"}`}>{item.status}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
