export function mergeClass(...classes: (string | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}
