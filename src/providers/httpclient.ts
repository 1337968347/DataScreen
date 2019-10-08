export class HttpClient {

    static async fetch(type: "get" | "post", uri: string, obj: Object): Promise<Response> {
        if (type == "get") {
            return this.fetchGet(uri, obj);
        } else if (type == "post") {
            return this.fetchPost(uri, obj);
        }
    }

    // obj到？参数
    static composeUri(obj: any): string {
        var uri = '?';
        let propertyList = Object.keys(obj)
        for (let i = 0; i < propertyList.length; i++) {
            uri += propertyList[i] + "=" + obj[propertyList[i]];
            if (i != propertyList.length - 1) {
                uri += "&"
            }
        }
        return uri
    }

    static async fetchGet(uri, obj): Promise<Response> {
        let header = new Headers();
        let finalUri = uri + HttpClient.composeUri(obj)
        let request = new Request(finalUri, {
            method: 'GET',
            headers: header
        });
        return fetch(request, { credentials: 'include' });
    }

    static async fetchPost(uri, obj): Promise<Response> {
        let header = new Headers();
        header.append('Content-Type', 'application/json');

        let request = new Request(uri, {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: header
        });
        return fetch(request, { credentials: 'include' });
    }
}