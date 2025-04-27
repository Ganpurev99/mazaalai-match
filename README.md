# mazaalai-match

`mazaalai-match` is a lightweight fuzzy matching library for Node.js that uses the **Levenshtein distance** algorithm to calculate the similarity between strings. It allows you to compare fields like `firstName`, `lastName`, `birthDate`, and more, providing a percentage match score.

This library is particularly useful for matching names, addresses, or other data where exact matches may not always be present, and fuzzy matching is required.

## Features

- **Levenshtein Distance-based String Matching**: Calculates similarity based on character edits (insertions, deletions, substitutions).
- **Customizable Weights**: Assign different weights to fields (e.g., `firstName`, `lastName`, `birthDate`, etc.) to control the impact of each field on the final match score.
- **Easy Integration**: Use it with any dataset, particularly useful with MongoDB or other databases.
- **Flexible**: Works with different types of data and fields, not limited to PEP (Politically Exposed Persons) data.

## Installation

Install the package using npm:

```bash
npm install mazaalai-match
```
