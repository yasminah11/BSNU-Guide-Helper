import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Brain,
  Shield,
  Sparkles,
  ChevronDown,
  Moon,
  Sun,
} from "lucide-react";
import { useTheme } from "next-themes";
import CourseSearch from "@/components/CourseSearch";
import CourseDetails from "@/components/CourseDetails";
import { Course } from "@/data/courses";

type ProgramFilter = "all" | "ai" | "cyber";

const programs: { id: ProgramFilter; label: string; icon: React.ReactNode }[] =
  [
    {
      id: "all",
      label: "All Programs",
      icon: <GraduationCap className="h-4 w-4" />,
    },
    {
      id: "ai",
      label: "AI & Data Science",
      icon: <Brain className="h-4 w-4" />,
    },
    {
      id: "cyber",
      label: "Cyber Security",
      icon: <Shield className="h-4 w-4" />,
    },
  ];

const Index = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [program, setProgram] = useState<ProgramFilter>("all");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToContent = () => {
    document
      .getElementById("course-explorer")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background selection:bg-primary/10">
      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all shadow-xl"
          aria-label="Toggle theme"
        >
          {mounted &&
            (theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            ))}
        </button>
      </div>

      {/* Flexible Hero Section */}
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center hero-gradient px-6 py-20 md:py-32">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.2)_100%)] opacity-50" />
        </div>

        <div className="relative z-10 container-max text-center w-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-5xl sm:text-7xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none"
          >
            Take Control of Your <span className="text-white/40">Academic Future.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-16 font-light leading-relaxed"
          >
            An intelligent interactive guide to mastering course dependencies and prerequisites at the Faculty of Computing & Artificial Intelligence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex items-center justify-center gap-6"
          >
            <button
              onClick={scrollToContent}
              className="px-8 py-4 rounded-full bg-white text-primary font-bold hover:bg-white/90 transition-all shadow-xl hover:scale-105 active:scale-95"
            >
              Start Exploring
            </button>
            <button
              onClick={() => {
                document
                  .getElementById("features")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold hover:bg-white/20 transition-all"
            >
              Learn More
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer group"
          onClick={scrollToContent}
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold group-hover:text-white/60 transition-colors">
              Explore Courses
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ChevronDown className="h-6 w-6 text-white/20 group-hover:text-white/60 transition-colors" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="container-max px-6 relative z-10">
          <div className="text-center mb-16">
            <p className="text-4xl font-bold text-foreground">Smarter Academic Planning</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="h-8 w-8 text-primary" />,
                title: "Dependency Visualizer",
                description: "Understand complex course relationships through intuitive, interactive diagrams."
              },
              {
                icon: <Sparkles className="h-8 w-8 text-primary" />,
                title: "Real-time Search",
                description: "Find any course instantly and see its place in your entire academic journey."
              },
              {
                icon: <Shield className="h-8 w-8 text-primary" />,
                title: "Accurate Data",
                description: "Directly synchronized with the latest faculty curriculum and requirements."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[2.5rem] bg-background border border-border/50 hover:border-primary/20 transition-all hover:shadow-xl group"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Courses Section */}
      <section id="course-explorer" className="py-24 bg-background">
        <div className="container-max px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Explore Courses</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Select your specialization and search for courses to see their prerequisites and dependencies.
            </p>
          </div>

          {/* Program Filter */}
          <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
            {programs.map((p) => (
              <button
                key={p.id}
                onClick={() => {
                  setProgram(p.id);
                  setSelectedCourse(null);
                }}
                className={`group flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                  program === p.id
                    ? "bg-primary text-white shadow-lg shadow-primary/20 scale-105"
                    : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 border border-transparent"
                }`}
              >
                <span className={`transition-transform duration-300 ${program === p.id ? "scale-110" : "group-hover:scale-110"}`}>
                  {p.icon}
                </span>
                {p.label}
              </button>
            ))}
          </div>

          {/* Search Section */}
          <div className="mb-20">
            <CourseSearch
              onSelectCourse={(course) => {
                setSelectedCourse(course);
              }}
              selectedCourse={selectedCourse}
              program={program}
              variant="light"
            />
          </div>

          {/* Course Details Display */}
          <div className="min-h-[40vh]">
            <AnimatePresence mode="wait">
              {selectedCourse ? (
                <motion.div
                  key={selectedCourse.code}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <CourseDetails course={selectedCourse} />
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-20 flex flex-col items-center border-2 border-dashed border-border rounded-[3rem]"
                >
                  <div className="w-24 h-24 rounded-3xl bg-primary/5 flex items-center justify-center mb-8">
                    <GraduationCap className="h-12 w-12 text-primary/30" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">No Course Selected</h3>
                  <p className="text-muted-foreground max-w-sm mx-auto">
                    Use the search bar above to find a course and visualize its academic structure.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Main Content Area (Removed old container) */}
      
      {/* Standardized Footer */}
      <footer className="border-t border-border/50 py-20 bg-muted/20">
        <div className="container-max px-6 text-center">
          <p className="text-sm text-muted-foreground/60 max-w-lg mx-auto leading-loose mb-10">
            A specialized tool for the Faculty of Computing & AI at Beni Suef
            National University, helping students navigate their academic
            journey with clarity.
          </p>
          <div className="flex flex-col items-center gap-4">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/40">
              Designed by Yasmin
            </p>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/20">
              © {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
