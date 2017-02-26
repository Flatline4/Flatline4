export default class RouteUtils {
    static RouteName() : string {
        var fullUrl = document.URL;
        if (fullUrl.indexOf('#') === -1 || 
            fullUrl.indexOf('#') === fullUrl.length - 1) {
            
            return undefined;
        }

        var uri = document.URL.split('#')[1];
        if (uri.indexOf('?') === -1 ||
            uri.indexOf('?') === uri.length - 1) {
            
            return uri;
        }

        return uri.substr(0, uri.indexOf('?'));
    }

    static RouteParams() : any {
        var fullUrl = document.URL;
        if (fullUrl.indexOf('#') === -1 || 
            fullUrl.indexOf('#') === fullUrl.length - 1) {
            
            return undefined;
        }

        var uri = document.URL.split('#')[1];
        if (uri.indexOf('?') === -1 ||
            uri.indexOf('?') === uri.length - 1) {
            
            return undefined;
        }

        var params = uri.substr(uri.indexOf('?'));
        var decode = decodeURIComponent(params);
        return JSON.parse(decode);
    }

    static CreateParams(obj: any): string{
        return encodeURIComponent(JSON.stringify(obj));
    }
}