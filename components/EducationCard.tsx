import { Education } from "@/types/portfolio";

interface EducationCardProps {
    edu: Education;
}

export function EducationCard( { edu } : EducationCardProps ){
    return(
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 transition-all duration-300 hover:scale-[1.02] hover:border-sky-500/50 shadow-lg hover:shadow-sky-500/20">
            <h3 className="text-lg text-white font-bold mb-1">{edu.title}</h3>
            <p className="text-slate-400 text-sm mb-4">{edu.institution}</p>
            <span className="inline-block text-xs font-medium text-sky-400 bg-sky-950/50 px-3 py-1 rounded-full border border-sky-800/50">
                {edu.date}
            </span>
        </div>
    )
}
