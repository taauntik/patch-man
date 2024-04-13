export class API {
    static async fetch({ url, method }) {
        const response = await fetch(url, { method })
        return await response.json();
    }
}