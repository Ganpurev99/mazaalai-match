// src/levenshtein.ts

export function levenshtein(a: string, b: string): number {
  const arr: number[][] = [];

  // Initialize the matrix
  for (let i = 0; i <= a.length; i++) {
    arr[i] = [i];
  }

  for (let j = 0; j <= b.length; j++) {
    arr[0][j] = j;
  }

  // Fill the matrix with the Levenshtein distance
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      arr[i][j] = Math.min(
        arr[i - 1][j] + 1, // Deletion
        arr[i][j - 1] + 1, // Insertion
        arr[i - 1][j - 1] + cost // Substitution
      );
    }
  }

  return arr[a.length][b.length];
}

export function calculateSimilarity(a: string, b: string): number {
  const distance = levenshtein(a, b);
  const maxLength = Math.max(a.length, b.length);
  return 1 - distance / maxLength; // Normalized similarity
}
