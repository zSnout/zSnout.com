interface ApiRequest<T extends string> {
  api: string;
  body?: object;
  method: string;
  resultKeys: readonly T[];
}

export async function useApi<T extends string>(
  request: ApiRequest<T>
): Promise<Record<T, string> | Error> {
  try {
    const result = await fetch(`/api/${request}`, {
      method: request.method,
      body: request.body && JSON.stringify(request.body),
    });

    const text = await result.text();

    try {
      const json = JSON.parse(text);

      if (typeof json !== "object") {
        return new Error("Expected a JSON object as a response.");
      }

      for (const key of request.resultKeys) {
        if (typeof json[key] !== "string") {
          return new Error(`Expected '${key}' to be a string.`);
        }
      }

      return json;
    } catch {
      return new Error(text);
    }
  } catch (e) {
    if (e instanceof Error) {
      return e;
    } else {
      return new Error("" + e);
    }
  }
}
