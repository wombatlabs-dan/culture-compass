import { useEffect, useState } from "react";
import { format } from "date-fns";
import { motion } from "framer-motion";

export function ClockWidget() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center text-center pt-12 pb-8 select-none"
    >
      <div className="flex items-center justify-center gap-2 mb-1">
        <span className="i-lucide-lock w-4 h-4 text-white/60" />
        <span className="text-sm font-medium text-white/60 tracking-wide uppercase">VibeCheck Secure</span>
      </div>
      
      <h1 className="text-8xl md:text-9xl font-bold text-white tracking-tighter text-glow font-display tabular-nums leading-none">
        {format(time, "HH:mm")}
      </h1>
      
      <p className="text-xl md:text-2xl font-medium text-white/90 mt-2">
        {format(time, "EEEE, MMMM d")}
      </p>
    </motion.div>
  );
}
