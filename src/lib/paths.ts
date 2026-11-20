/** Site path helper. BASE_URL always includes the GitHub Pages project prefix. */
export function href(path = ''): string {
  const base = import.meta.env.BASE_URL;
  const trimmed = path.replace(/^\/+/, '');
  return `${base}${trimmed}`;
}

export function asset(path: string): string {
  return href(path.replace(/^\/+/, ''));
}

export function isCurrent(pathname: string, path: string): boolean {
  const target = href(path);
  const here = pathname.endsWith('/') ? pathname : `${pathname}/`;
  if (path === '' || path === '/') {
    return here === target;
  }
  return here === target || here.startsWith(target);
}
