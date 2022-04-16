const urls = new Map();
const websiteUrls = new Map();

urls.set("localhost", "http://localhost:9000");
websiteUrls.set("localhost", "http://localhost:3000");

export const baseUrl = urls.get(window.location.hostname);
export const websiteUrl = websiteUrls.get(window.location.hostname);
