/** Old Mobirise pages → current React routes */
const legacyExact: Record<string, string> = {
  '/index.html': '/',
  '/join.html': '/apply',
  '/join': '/apply',
  '/contact.html': '/apply',
  '/contact': '/apply',
  '/ourteam.html': '/exec',
  '/ourteam': '/exec',
  '/disclaimer.html': '/',
  '/disclaimer': '/',
}

/**
 * Turn legacy paths (especially `*.html`) into current clean routes,
 * preserving query string and hash.
 */
export function normalizeLegacyPath(pathWithQueryHash: string): string {
  const url = new URL(pathWithQueryHash, 'https://vcguva.com')
  let path = url.pathname.replace(/\/{2,}/g, '/')

  if (path.length > 1 && path.endsWith('/')) {
    path = path.slice(0, -1)
  }

  const mapped = legacyExact[path.toLowerCase()]
  if (mapped !== undefined) {
    path = mapped
  } else if (path.toLowerCase().endsWith('.html')) {
    path = path.slice(0, -5) || '/'
  }

  return path + url.search + url.hash
}
