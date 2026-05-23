export interface SourceInput {
  id: string;
  content: string;
}

export interface SourceDocument extends SourceInput {
  createdAt: Date;
}

export function createSource(input: SourceInput): SourceDocument {
  return {
    ...input,
    createdAt: new Date()
  };
}
