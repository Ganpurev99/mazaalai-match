// test.ts
import { matchCandidates } from "./dist/index";

const input = { firstName: "George", lastName: "Bob" };
const candidates = [
  { firstName: "George", lastName: "Bob" },
  { firstName: "Gregory", lastName: "Bo" },
  { firstName: "Georg", lastName: "Bobbson" },
];

const results = matchCandidates(input, candidates, 40);
console.log(results); // This will log the candidates with their match scores
