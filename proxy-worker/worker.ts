export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    const targetUrl = new URL(request.url);
    targetUrl.hostname = "culture-compass.pages.dev";
    targetUrl.pathname = url.pathname.slice("/culture-compass".length) || "/";

    return fetch(
      new Request(targetUrl.toString(), {
        method: request.method,
        headers: request.headers,
        body: request.body,
        redirect: "follow",
      })
    );
  },
};
