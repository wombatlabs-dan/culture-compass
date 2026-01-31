import { useState } from "react";
import { Search, Loader2, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SearchBarProps {
  onSearch: (query: string) => void;
  isLoading: boolean;
}

export function SearchBar({ onSearch, isLoading }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-8 left-0 right-0 px-4 z-50 w-full max-w-md mx-auto"
    >
      <form onSubmit={handleSubmit} className="relative group">
        <div className={`absolute inset-0 bg-gradient-to-r from-primary/50 to-purple-600/50 rounded-full blur-md transition-opacity duration-500 ${isFocused ? 'opacity-100' : 'opacity-0'}`} />
        
        <div className="relative flex items-center glass-panel rounded-full overflow-hidden transition-all duration-300 focus-within:ring-2 focus-within:ring-primary/50">
          <div className="pl-4 text-white/50">
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin text-primary" />
            ) : (
              <MapPin className="w-5 h-5" />
            )}
          </div>
          
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Where are you? (e.g. Kyoto Temple)"
            className="w-full bg-transparent border-none text-white placeholder:text-white/40 py-4 px-3 focus:outline-none focus:ring-0 text-lg"
            disabled={isLoading}
          />
          
          <AnimatePresence>
            {query.length > 0 && (
              <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                type="submit"
                disabled={isLoading}
                className="mr-2 p-2 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 text-white transition-colors"
              >
                <Search className="w-5 h-5" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </form>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: isFocused ? 1 : 0.6 }}
        className="text-center text-xs text-white/40 mt-3 font-medium uppercase tracking-widest"
      >
        Swipe up to unlock vibes
      </motion.p>
    </motion.div>
  );
}
