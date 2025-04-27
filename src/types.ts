// src/types.ts

export interface MatchInput {
  [key: string]: string | undefined | null;
}

export interface Candidate {
  [key: string]: string | undefined | null;
}

export interface WeightedFields {
  [field: string]: number;
}

export interface MatchResult<T> {
  data: T;
  matchScore: number;
}
