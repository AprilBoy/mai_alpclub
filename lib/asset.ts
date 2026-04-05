const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prepends basePath to an asset path so it resolves correctly on GitHub Pages. */
export function asset(path: string): string {
  return `${base}${path}`;
}
