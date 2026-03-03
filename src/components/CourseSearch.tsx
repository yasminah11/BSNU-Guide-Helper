import { useState, useMemo, useRef, useEffect } from "react";
import { Search, X, Command } from "lucide-react";
import { Course, getFilteredCourses } from "@/data/courses";
import { motion, AnimatePresence } from "framer-motion";

interface CourseSearchProps {
  onSelectCourse: (course: Course) => void;
  selectedCourse: Course | null;
  program: "all" | "ai" | "cyber";
  variant?: "hero" | "light";
}

export default function CourseSearch({ 
  onSelectCourse, 
  selectedCourse, 
  program,
  variant = "hero" 
}: CourseSearchProps) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredCourses = useMemo(() => {
    const all = getFilteredCourses(program);
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return all.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.code.toLowerCase().includes(q)
    ).slice(0, 8);
  }, [query, program]);

  const showDropdown = isFocused && query.trim().length > 0;

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev < filteredCourses.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === "Enter") {
      if (activeIndex >= 0 && activeIndex < filteredCourses.length) {
        onSelectCourse(filteredCourses[activeIndex]);
        setQuery("");
        setIsFocused(false);
      }
    } else if (e.key === "Escape") {
      setIsFocused(false);
    }
  };

  // Reset active index when query or dropdown visibility changes
  useEffect(() => {
    setActiveIndex(-1);
  }, [query, showDropdown]);

  // Global shortcut to focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const isHero = variant === "hero";

  return (
    <div className="relative w-full max-w-3xl mx-auto group">
      <div className={`relative transition-all duration-300 ${isFocused ? "scale-[1.01]" : ""}`}>
        <Search className={`absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 transition-colors duration-300 ${
          isFocused ? "text-primary" : isHero ? "text-white/40" : "text-muted-foreground"
        }`} />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search for courses..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          onKeyDown={handleKeyDown}
          className={`w-full pl-14 pr-12 py-5 rounded-full border-2 transition-all duration-300 text-lg focus:outline-none shadow-xl ${
            isHero 
              ? "bg-white/10 backdrop-blur-xl text-white placeholder:text-white/30 " + (isFocused ? "border-white/40 bg-white/20 ring-4 ring-white/10" : "border-white/10 hover:border-white/20")
              : "bg-background text-foreground placeholder:text-muted-foreground " + (isFocused ? "border-primary ring-4 ring-primary/5" : "border-border hover:border-primary/20")
          }`}
        />
        
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-2">
          {query && (
            <button
              onClick={() => setQuery("")}
              className={`p-1 rounded-full transition-colors ${
                isHero ? "hover:bg-white/10 text-white/40 hover:text-white" : "hover:bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              <X className="h-4 w-4" />
            </button>
          )}
          {!isFocused && !query && (
            <div className={`hidden sm:flex items-center gap-1 px-2 py-1 rounded border font-medium text-[10px] ${
              isHero ? "bg-white/5 border-white/10 text-white/30" : "bg-muted border-border text-muted-foreground"
            }`}>
              <Command className="h-3 w-3" />
              <span>K</span>
            </div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {showDropdown && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 top-full mt-4 w-full bg-card/95 backdrop-blur-2xl rounded-[2rem] shadow-[0_25px_60px_rgba(0,0,0,0.4)] overflow-hidden border border-border p-2"
          >
            {filteredCourses.length > 0 ? (
              <div ref={dropdownRef} className="max-h-80 overflow-y-auto custom-scrollbar space-y-1">
                {filteredCourses.map((course, index) => (
                  <button
                    key={course.code}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => {
                      onSelectCourse(course);
                      setQuery("");
                      setIsFocused(false);
                    }}
                    className={`w-full text-left px-6 py-4 rounded-[1.5rem] transition-all duration-200 flex items-center justify-between gap-4 group/item ${
                      activeIndex === index
                        ? "bg-primary text-white shadow-lg shadow-primary/20 scale-[0.99]" 
                        : selectedCourse?.code === course.code
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-white/5 text-foreground"
                    }`}
                  >
                    <div className="min-w-0">
                      <p className={`text-base font-bold truncate ${activeIndex === index ? "text-white" : ""}`}>
                        {course.name}
                      </p>
                      <p className={`text-xs font-bold uppercase tracking-widest ${activeIndex === index ? "text-white/70" : "text-muted-foreground"}`}>
                        {course.category}
                      </p>
                    </div>
                    <div className={`text-[10px] font-black px-3 py-1.5 rounded-xl border-2 transition-colors ${
                      activeIndex === index
                        ? "bg-white/20 border-white/20 text-white" 
                        : "bg-muted border-border text-muted-foreground"
                    }`}>
                      {course.code}
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="py-12 px-6 text-center">
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-primary/30" />
                </div>
                <p className="text-foreground font-bold">No results found</p>
                <p className="text-muted-foreground text-sm">Try searching for a different course code or name.</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
