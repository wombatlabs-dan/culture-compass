import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useVibeGenerator } from "@/hooks/use-vibe";
import { ClockWidget } from "@/components/ClockWidget";
import { NotificationBubble } from "@/components/NotificationBubble";
import { SearchBar } from "@/components/SearchBar";
import { Loader2 } from "lucide-react";

export default function Home() {
  const { mutate, isPending, data } = useVibeGenerator();
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);

  // Default background - Tokyo night street
  const bgImage = "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1994&auto=format&fit=crop";

  const handleSearch = (query: string) => {
    mutate(query);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white font-sans">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Dimmer overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" /> {/* Bottom fade */}
        
        {/* Abstract blurry blobs for atmosphere */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/30 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/30 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />

        <img 
          src={bgImage} 
          alt="Atmospheric Background" 
          className={`w-full h-full object-cover transition-opacity duration-1000 ${backgroundLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setBackgroundLoaded(true)}
        />
      </div>

      {/* Main Content Area - Mobile Centered */}
      <main className="relative z-20 h-full flex flex-col items-center justify-start px-4 pt-4 sm:pt-8 md:pt-12 max-w-md mx-auto">
        
        <ClockWidget />

        <div className="w-full flex-1 flex flex-col items-center mt-4 space-y-2 overflow-y-auto pb-32 px-1 scrollbar-hide">
          <AnimatePresence mode="popLayout">
            {isPending && (
              <motion.div
                key="loading"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center text-center gap-3 w-full"
              >
                <Loader2 className="w-8 h-8 text-primary animate-spin" />
                <p className="text-sm font-medium text-white/70">Scanning local frequencies...</p>
              </motion.div>
            )}

            {data && !isPending && (
              <>
                <motion.div 
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   className="w-full mb-2"
                >
                  <div className="text-xs uppercase tracking-widest text-white font-bold mb-2 pl-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] bg-black/20 backdrop-blur-sm py-1 px-3 rounded-full inline-block border border-white/10">
                    {data.location} • {data.category}
                  </div>
                </motion.div>

                {/* Scam Alert - Highest Priority */}
                {data.scam && (
                  <NotificationBubble 
                    key="scam-alert"
                    index={0}
                    title="⚠️ SCAM ALERT DETECTED"
                    message={data.scam}
                    type="alert"
                    timeOffset="NOW"
                  />
                )}

                {/* Rules */}
                {data.rules.map((rule, idx) => (
                  <NotificationBubble 
                    key={`rule-${idx}`}
                    index={idx + 1}
                    title={`Vibe Rule #${idx + 1}`}
                    message={rule}
                    type="standard"
                    timeOffset={`${idx + 1}m ago`}
                  />
                ))}
                
                <motion.div
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 1 }}
                   className="mt-4 p-3 rounded-full bg-white/5 text-xs text-white/40 border border-white/5"
                >
                  Vibe check complete for {data.country}
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        <SearchBar onSearch={handleSearch} isLoading={isPending} />
      </main>
    </div>
  );
}
