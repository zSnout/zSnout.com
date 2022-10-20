export function replaceObject<T extends object>(object: T, newValue: T): void {
  for (const key in object) {
    delete object[key];
  }

  Object.assign(object, newValue);
}
