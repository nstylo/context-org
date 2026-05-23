import type { EngineResult } from "@context-org/engine";

export function renderView(result: EngineResult): string {
  return [
    `Source: ${result.sourceId}`,
    `Words: ${result.wordCount}`,
    `Summary: ${result.summary}`
  ].join("\n");
}
