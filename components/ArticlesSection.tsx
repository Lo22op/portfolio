import { articles } from "@/components/site-data";
import Image from "next/image";

export default function ArticlesSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-emerald-800">My LinkedIn Articles</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {articles.map((article, idx) => (
            <a
              key={idx}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl border border-slate-200 shadow-md hover:shadow-lg transition overflow-hidden bg-white"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-emerald-700 transition-colors">
                  {article.title}
                </h3>
                <p className="text-slate-600 mb-3 text-sm">{article.description}</p>
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>{new Date(article.date).toLocaleDateString()}</span>
                  <span className="text-emerald-600 font-bold">Read on LinkedIn</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
