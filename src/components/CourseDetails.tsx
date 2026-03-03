import { Course, courseMap, getDependents, getAllPrerequisites, getAllDependents } from "@/data/courses";
import { motion } from "framer-motion";
import { BookOpen, Lock, Unlock, ArrowDown, ArrowUp, Clock, Layers } from "lucide-react";

interface CourseDetailsProps {
  course: Course;
}

function CourseChip({ course, variant }: { course: Course; variant: "prereq" | "dependent" }) {
  const colors =
    variant === "prereq"
      ? "bg-primary/5 text-primary border-primary/10 hover:bg-primary/10"
      : "bg-destructive/5 text-destructive border-destructive/10 hover:bg-destructive/10";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`flex items-center gap-3 px-5 py-4 rounded-[1.25rem] border transition-all duration-300 cursor-default ${colors}`}
    >
      <span className="font-black text-xs opacity-50 tracking-wider">{course.code}</span>
      <span className="font-bold text-sm flex-1">{course.name}</span>
      <div className="flex items-center gap-1.5 opacity-40">
        <Clock className="h-3 w-3" />
        <span className="text-[10px] font-bold">{course.creditHours}h</span>
      </div>
    </motion.div>
  );
}

export default function CourseDetails({ course }: CourseDetailsProps) {
  const directPrereqs = course.prerequisites
    .map((code) => courseMap.get(code))
    .filter(Boolean) as Course[];
  const allPrereqs = getAllPrerequisites(course.code);
  const indirectPrereqs = allPrereqs.filter(
    (p) => !course.prerequisites.includes(p.code)
  );

  const directDependents = getDependents(course.code);
  const allDependents = getAllDependents(course.code);
  const indirectDependents = allDependents.filter(
    (d) => !directDependents.some((dd) => dd.code === d.code)
  );

  const programLabel =
    course.program === "ai"
      ? "AI & Data Science"
      : course.program === "cyber"
      ? "Cyber Security"
      : "Shared Curriculum";

  const typeLabel =
    course.type === "mandatory"
      ? "Mandatory Core"
      : course.type === "elective"
      ? "Elective"
      : course.type === "lab"
      ? "Practical Lab"
      : course.type === "capstone"
      ? "Capstone Project"
      : "Field Training";

  return (
    <div className="space-y-12">
      {/* Course Header Card */}
      <div className="bg-card rounded-[2.5rem] p-8 md:p-12 border border-border shadow-soft relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-700" />
        
        <div className="relative flex flex-col md:flex-row md:items-center gap-10">
          <div className="flex-shrink-0 w-24 h-24 rounded-[2rem] bg-primary flex items-center justify-center shadow-2xl shadow-primary/20">
            <BookOpen className="h-12 w-12 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60 bg-primary/5 px-3 py-1.5 rounded-lg border border-primary/10">
                {course.code}
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent/60 bg-accent/5 px-3 py-1.5 rounded-lg border border-accent/10">
                {course.category}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 leading-tight">{course.name}</h2>
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest px-4 py-2.5 rounded-xl bg-slate-100 text-slate-500 border border-slate-200">
                <Clock className="h-4 w-4" />
                {course.creditHours} Credit Hours
              </div>
              <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest px-4 py-2.5 rounded-xl bg-accent/10 text-accent border border-accent/20">
                <Layers className="h-4 w-4" />
                {programLabel}
              </div>
              <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest px-4 py-2.5 rounded-xl bg-primary/5 text-primary border border-primary/10">
                {typeLabel}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Prerequisites Section */}
        <div className="bg-card rounded-[2.5rem] p-8 md:p-10 border border-border shadow-soft">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-[1.25rem] bg-primary/5 flex items-center justify-center border border-primary/10">
                <ArrowUp className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-black">Prerequisites</h3>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Academic Requirements</p>
              </div>
            </div>
            <span className="text-xs font-black bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/10">
              {allPrereqs.length} Total
            </span>
          </div>

          {directPrereqs.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 px-6 rounded-[2rem] bg-accent/5 border-2 border-dashed border-accent/10 text-center">
              <Unlock className="h-12 w-12 text-accent/30 mb-5" />
              <h4 className="font-bold text-accent mb-2 text-xl">Open Enrollment</h4>
              <p className="text-sm text-accent/60 font-medium max-w-[240px]">This course has no prerequisites and is open to all students.</p>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-[10px] text-muted-foreground font-black uppercase tracking-[0.3em] pl-1">
                  Direct Requirements
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {directPrereqs.map((c) => (
                    <CourseChip key={c.code} course={c} variant="prereq" />
                  ))}
                </div>
              </div>
              {indirectPrereqs.length > 0 && (
                <div className="space-y-4 pt-4 border-t border-border/50">
                  <p className="text-[10px] text-muted-foreground font-black uppercase tracking-[0.3em] pl-1">
                    Complete Chain
                  </p>
                  <div className="grid grid-cols-1 gap-3">
                    {indirectPrereqs.map((c) => (
                      <CourseChip key={c.code} course={c} variant="prereq" />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Dependents Section */}
        <div className="bg-card rounded-[2.5rem] p-8 md:p-10 border border-border shadow-soft">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-[1.25rem] bg-destructive/5 flex items-center justify-center border border-destructive/10">
                <ArrowDown className="h-7 w-7 text-destructive" />
              </div>
              <div>
                <h3 className="text-2xl font-black">Future Impact</h3>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Locked Dependencies</p>
              </div>
            </div>
            <span className="text-xs font-black bg-destructive/10 text-destructive px-4 py-2 rounded-full border border-destructive/10">
              {allDependents.length} Affected
            </span>
          </div>

          {directDependents.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 px-6 rounded-[2rem] bg-muted/30 border-2 border-dashed border-border text-center">
              <Lock className="h-12 w-12 text-muted-foreground/30 mb-5" />
              <h4 className="font-bold text-muted-foreground mb-2 text-xl">Terminal Course</h4>
              <p className="text-sm text-muted-foreground/60 font-medium max-w-[240px]">No subsequent courses depend on the completion of this unit.</p>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-[10px] text-muted-foreground font-black uppercase tracking-[0.3em] pl-1">
                  Immediate Unlocks
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {directDependents.map((c) => (
                    <CourseChip key={c.code} course={c} variant="dependent" />
                  ))}
                </div>
              </div>
              {indirectDependents.length > 0 && (
                <div className="space-y-4 pt-4 border-t border-border/50">
                  <p className="text-[10px] text-muted-foreground font-black uppercase tracking-[0.3em] pl-1">
                    Future Dependents
                  </p>
                  <div className="grid grid-cols-1 gap-3">
                    {indirectDependents.map((c) => (
                      <CourseChip key={c.code} course={c} variant="dependent" />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
