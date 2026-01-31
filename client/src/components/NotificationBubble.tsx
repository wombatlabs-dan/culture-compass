import { useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface NotificationBubbleProps {
  title: string;
  message: string;
  type?: "standard" | "alert" | "info";
  timeOffset?: string;
  index: number;
}

export function NotificationBubble({ 
  title, 
  message, 
  type = "standard", 
  timeOffset = "now",
  index 
}: NotificationBubbleProps) {
  const isAlert = type === "alert";
  const isLongMessage = message.length > 50;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          layout
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
          transition={{ 
            type: "spring", 
            stiffness: 400, 
            damping: 25, 
            delay: index * 0.15 
          }}
          className={cn(
            "relative w-full max-w-sm mx-auto mb-3 rounded-[20px] p-4 backdrop-blur-xl border shadow-lg transition-all select-none cursor-pointer group hover:scale-[1.02] active:scale-[0.98]",
            isAlert 
              ? "bg-red-500/20 border-red-500/30 text-red-50 hover:bg-red-500/25" 
              : "bg-white/10 border-white/20 text-white hover:bg-white/15",
            "min-h-[80px] h-auto overflow-hidden"
          )}
          data-testid={`bubble-${type}-${index}`}
        >
          <div className="flex items-start gap-3 h-full">
            <div className={cn(
              "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-inner mt-0.5",
              isAlert ? "bg-red-500 text-white" : "bg-white/20 text-white"
            )}>
              {isAlert ? (
                <AlertTriangle className="w-6 h-6" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-purple-600 rounded-xl">
                  <span className="text-lg font-bold">V</span>
                </div>
              )}
            </div>

            <div className="flex-1 min-w-0 flex flex-col justify-center">
              <div className="flex justify-between items-baseline mb-1">
                <h4 className="font-semibold text-[13px] tracking-tight opacity-90 truncate pr-2">
                  {title}
                </h4>
                <span className="text-[10px] opacity-60 font-medium uppercase tracking-wider whitespace-nowrap">
                  {timeOffset}
                </span>
              </div>
              <div className="flex flex-col">
                <p className={cn(
                  "text-[14px] leading-tight font-medium opacity-95 break-words",
                  isLongMessage && "line-clamp-2"
                )}>
                  {message}
                </p>
                {isLongMessage && (
                  <span className="text-[11px] font-bold mt-2 text-primary/90 opacity-70 uppercase tracking-tight">
                    Tap to read full rule
                  </span>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="max-w-[90vw] sm:max-w-md bg-black/40 backdrop-blur-2xl border-white/20 text-white rounded-[32px] p-8 shadow-2xl">
        <DialogHeader className="mb-6">
          <div className="flex items-center gap-4">
            <div className={cn(
              "w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-lg",
              isAlert ? "bg-red-500 text-white" : "bg-gradient-to-br from-primary to-purple-600 text-white"
            )}>
              {isAlert ? <AlertTriangle className="w-7 h-7" /> : <span className="text-2xl font-bold">V</span>}
            </div>
            <DialogTitle className="text-2xl font-bold tracking-tight text-left">
              {title}
            </DialogTitle>
          </div>
        </DialogHeader>
        <div className="space-y-4">
          <p className="text-lg leading-relaxed font-medium opacity-95">
            {message}
          </p>
          <div className="pt-4 flex justify-end">
            <span className="text-[12px] opacity-40 font-medium uppercase tracking-widest">
              VibeCheck • {timeOffset}
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
