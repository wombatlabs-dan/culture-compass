import { Link } from "wouter";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black text-white p-4">
      <div className="glass-panel rounded-3xl p-8 max-w-sm w-full text-center">
        <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-red-500">
          <AlertTriangle className="w-8 h-8" />
        </div>
        
        <h1 className="text-2xl font-bold font-display mb-2">Signal Lost</h1>
        <p className="text-white/60 mb-8">
          The vibe you are looking for has faded into the ether.
        </p>

        <Link href="/" className="block w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-white/90 transition-colors">
          Return to Lock Screen
        </Link>
      </div>
    </div>
  );
}
