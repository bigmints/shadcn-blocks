#!/bin/bash
# Generate per-theme registry JSON files from the dubai source of truth.
# Run this before `npm run build` to ensure new-york JSONs are up-to-date.

set -e

REPO_DIR="$(cd "$(dirname "$0")/.." && pwd)"
DUBAI_DIR="$REPO_DIR/site/public/r/dubai"
NY_DIR="$REPO_DIR/site/public/r/new-york"

mkdir -p "$NY_DIR"

# Generate new-york versions by replacing registry/dubai/ -> registry/new-york/
for json in "$DUBAI_DIR"/*.json; do
    basename=$(basename "$json")
    sed 's|registry/dubai/|registry/new-york/|g' "$json" > "$NY_DIR/$basename"
done

echo "✓ Generated $(ls "$NY_DIR"/*.json 2>/dev/null | wc -l | tr -d ' ') new-york registry JSON files from dubai source"
