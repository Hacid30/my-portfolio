import { Education } from "@/types/portfolio";

interface EducationCardProps {
    edu: Education;
}

export function EducationCard( { edu } : EducationCardProps ){
    return(
    <div>
        <h3>{edu.title}</h3>
        <p>{edu.institution}</p>
        <span>{edu.date}</span>
    </div>
    )
}
