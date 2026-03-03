import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api, type VibeResult, type InsertSearchHistory } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

const apiBase = import.meta.env.BASE_URL.replace(/\/$/, "");

export function useVibeGenerator() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (query: string) => {
      const res = await fetch(apiBase + api.vibe.generate.path, {
        method: api.vibe.generate.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
        credentials: "include",
      });

      if (!res.ok) {
        if (res.status === 400) {
           const error = api.vibe.generate.responses[400].parse(await res.json());
           throw new Error(error.message);
        }
        if (res.status === 500) {
           const error = api.vibe.generate.responses[500].parse(await res.json());
           throw new Error(error.message);
        }
        throw new Error("Failed to generate vibes");
      }

      return api.vibe.generate.responses[200].parse(await res.json());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [api.vibe.history.path] });
    },
    onError: (error) => {
      toast({
        title: "Vibe Check Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}

export function useVibeHistory() {
  return useQuery({
    queryKey: [api.vibe.history.path],
    queryFn: async () => {
      const res = await fetch(apiBase + api.vibe.history.path, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch history");
      return api.vibe.history.responses[200].parse(await res.json());
    },
  });
}
