import type { SourceDocument } from "@context-org/source";

export interface EngineResult {
  sourceId: string;
  wordCount: number;
  summary: string;
}

export function runEngine(source: SourceDocument): EngineResult {
  const words = source.content.trim().split(/\s+/).filter(Boolean);

  return {
    sourceId: source.id,
    wordCount: words.length,
    summary: source.content
  };
}
