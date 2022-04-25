const urls = new Map();
const websiteUrls = new Map();

urls.set("localhost", "http://localhost:9000");
urls.set(
  "expensify-client-web-app.herokuapp.com",
  "https://expensify-client-web-app.herokuapp.com:9000"
);
websiteUrls.set("localhost", "http://localhost:3000");
websiteUrls.set(
  "expensify-client-web-app.herokuapp.com",
  "https://expensify-client-web-app.herokuapp.com"
);

export const baseUrl = urls.get(window.location.hostname);
export const websiteUrl = websiteUrls.get(window.location.hostname);
