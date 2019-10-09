export class HttpClient {

    static async fetch(type: "get" | "post", uri: string, obj: Object): Promise<any> {
        if (type == "get") {
             this.fetchGet(uri, obj).then((data)=>{
                return Promise.resolve(data);
             },(error)=>{
                return Promise.reject(error)
             });
        } else if (type == "post") {
            this.fetchPost(uri, obj).then((data)=>{
                return Promise.resolve(data);
            },(error)=>{
                return Promise.reject(error);
            });
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