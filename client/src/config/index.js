const urls = new Map();

urls.set("localhost", "http://localhost:9000");

export const baseUrl = urls.get(window.location.hostname);
