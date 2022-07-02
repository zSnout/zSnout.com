interface ApiRequest<T extends string> {
  api: string;
  body?: Record<string, string | number | boolean>;
  method: string;
  resultKeys: readonly T[];
  desc: string;
}

export async function useApi<T extends string>(
  request: ApiRequest<T>
): Promise<Record<T, string> | Error> {
  try {
    const result = await fetch(`/api/${request.api}`, {
      method: request.method,
      body: request.body && JSON.stringify(request.body),
      headers: request.body
        ? { "content-type": "application/json" }
        : undefined,
    });

    if (result.status === 404) {
      return new Error(`This instance of zSnout can't ${request.desc}.`);
    }

    const text = await result.text();

    try {
      const json = JSON.parse(text);

      if (typeof json !== "object") {
        return new Error("Expected a JSON object as a response.");
      }

      if (json.error != null) {
        return new Error(json.error);
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
