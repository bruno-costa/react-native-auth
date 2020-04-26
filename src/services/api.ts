type anyObject = {[key: string]: any};

const session: {
  baseUrl: string;
  bearerKey: string | null;
} = {
  baseUrl: 'https://localhost:8000',
  bearerKey: null,
};

function runRequest(
  method: 'POST' | 'GET',
  args: {
    path: string;
    body?: anyObject;
    params?: anyObject;
    withoutCredentials?: boolean;
  },
) {
  let headers: any, url: string, body: any;

  headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  if (!args.withoutCredentials) {
    if (session.bearerKey) {
      headers.Authorization = `Bearer ${session.bearerKey}`;
    } else {
      throw new Error('Does have key on session');
    }
  }
  url = `${session.baseUrl}/${args.path}`;
  if (args.params) {
    const params: [any, any][] = [];
    for (const key of Object.keys(args.params)) {
      params.push([key, args.params[key]]);
    }
    url += '?' + new URLSearchParams(params);
  }
  if (args.body) {
    body = JSON.stringify(args.body);
  }
  return fetch(url, {
    method,
    body,
    headers,
  });
}

export default {
  post(args: {
    path: string;
    body?: anyObject;
    params?: anyObject;
    withoutCredentials?: boolean;
  }) {
    return runRequest('POST', args);
  },
  get(args: {path: string; params?: anyObject; withoutCredentials?: boolean}) {
    return runRequest('GET', args);
  },
  setCredentialsKey(key: string | null) {
    session.bearerKey = key;
  },
};
