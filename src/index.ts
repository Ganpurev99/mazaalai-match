// src/index.ts
import { calculateSimilarity } from "./levenshtein";
import { MatchInput, Candidate, WeightedFields, MatchResult } from "./types";

const DEFAULT_WEIGHTS: WeightedFields = {
  firstName: 0.3,
  lastName: 0.3,
  birthDate: 0.25,
  country: 0.15,
};

export function calculateMatchScore(
  input: MatchInput,
  record: Candidate,
  weights: WeightedFields = DEFAULT_WEIGHTS
): number {
  let score = 0;
  let weightTotal = 0;

  for (const field in weights) {
    const inputVal = input[field];
    const recordVal = record[field];

    if (!inputVal || !recordVal) continue;

    const similarity = calculateSimilarity(
      inputVal.toLowerCase(),
      recordVal.toLowerCase()
    );
    score += similarity * weights[field];
    weightTotal += weights[field];
  }

  if (weightTotal === 0) return 0;
  return (score / weightTotal) * 100;
}

export function matchCandidates<T extends Candidate>(
  input: MatchInput,
  candidates: T[],
  minScore = 30,
  weights: WeightedFields = DEFAULT_WEIGHTS
): MatchResult<T>[] {
  return candidates
    .map((candidate) => ({
      data: candidate,
      matchScore: calculateMatchScore(input, candidate, weights),
    }))
    .filter((result) => result.matchScore >= minScore)
    .sort((a, b) => b.matchScore - a.matchScore);
}
