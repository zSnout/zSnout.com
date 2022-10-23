export function has(source: string, searchString: string) {
  return source.includes(searchString);
}

export function hasAny(source: string, searchString: readonly string[]) {
  return searchString.some((search) => has(source, search));
}

export function hasAll(source: string, searchString: readonly string[]) {
  return searchString.every((search) => has(source, search));
}

export function hasGTE(source: string, searchString: string, times: number) {
  let start = 0;

  for (let i = 0; i < times; i++) {
    const nextStart = source.indexOf(searchString, start);
    if (nextStart == -1) return false;

    start = nextStart + searchString.length;
  }

  return true;
}

export function hasLT(source: string, searchString: string, times: number) {
  return !hasGTE(source, searchString, times);
}

export function hasGT(source: string, searchString: string, times: number) {
  return hasGTE(source, searchString, times + 1);
}

export function hasLTE(source: string, searchString: string, times: number) {
  return !hasGT(source, searchString, times);
}
