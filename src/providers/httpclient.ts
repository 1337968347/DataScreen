import { toastController } from "@ionic/core"
export class HttpClient {

    static async fetch(type: "get" | "post", uri: string, obj: Object): Promise<any> {
        let response;
        const RESPONSE_CODE = {
            400: '请求参数错误',
            403: '拒绝访问',
            404: '资源不存在',
            500: '服务器内部错误',
            501: '服务未实现',
            502: '网关错误',
            503: '服务不可用',
            504: '网关超时',
            505: 'HTTP版本不受支持',
        };
        if (type == "get") {
            response = await this.fetchGet(uri, obj);
        } else if (type == "post") {
            response = await this.fetchPost(uri, obj);
        }
        RESPONSE_CODE[response.status] && 
        toastController.create({ message: uri+" 请求出错: "+RESPONSE_CODE[response.status], position: "bottom", duration: 4000 }).then((toast)=>{
            toast.present()
        })
        let data = await response.json()
        return data
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
        return fetch(request, { mode: 'cors' });
    }

    static async fetchPost(uri, obj): Promise<Response> {
        let header = new Headers();
        header.append('Content-Type', 'application/json');

        let request = new Request(uri, {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: header
        });
        return fetch(request, { mode: 'cors' });
    }
}