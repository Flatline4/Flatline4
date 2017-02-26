export function get(url: string, successCb: (response: any) => void, failureCb: (err: Error) => void): void {
    /*const xhr = new XMLHttpRequest();
    // Begin the XHR request
    xhr.open('GET', url, true);

    // Set up success handler
    xhr.onload = () => {
        const statusText = xhr.statusText;
        // From Angular source:
        // responseText is the old-school way of retrieving response (supported by IE9)
        // response/responseType properties were introduced in XHR Level2 spec (supported by IE10)
        const response = ('response' in xhr) ? xhr.response : xhr.responseText;
        // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
        const status = xhr.status === 1223 ? 204 : xhr.status;

        try {
            // Check status code and parse JSON if request succeeded
            if (status >= 200 && status < 300) {
                successCb(JSON.parse(response));   
            }

            // Return an error if status code is not in successful range
            else {
                failureCb(new Error(`Server responded with status code ${status}: ${statusText}`));
            }
        }

        // Return an error if JSON parsing fails
        catch (e) {
            failureCb(new Error('Error parsing response JSON'));
        }

    };
    
    // Set up error handler
    xhr.onerror = xhr.onabort = xhr.ontimeout = () => {
        failureCb(new Error('Error processing AJAX request'));
    };

    // Send XHR request
    xhr.send();*/
    baseXhr(url, 'GET', (xhr) => xhr.send(), successCb, failureCb);
}

export function post(url: string, data: any, successCb: (response: any) => void, failureCb: (err: Error) => void): void {
    baseXhr(url, 'post', (xhr) => xhr.send(parameterize(data)), successCb, failureCb);
}

export function baseXhr(url: string, method: string, onfinish: (res: XMLHttpRequest) => void, success?: (response: any) => void, fail?: (response: any) => void) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.onload = () => {
        const statusText = xhr.statusText;
        // From Angular source:
        // responseText is the old-school way of retrieving response (supported by IE9)
        // response/responseType properties were introduced in XHR Level2 spec (supported by IE10)
        const response = ('response' in xhr) ? xhr.response : xhr.responseText;
        // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
        const status = xhr.status === 1223 ? 204 : xhr.status;

        try {
            // Check status code and parse JSON if request succeeded
            if (status >= 200 && status < 300) {
                if (success)
                    success(JSON.parse(response));   
            }

            // Return an error if status code is not in successful range
            else {
                if (fail)
                    fail(new Error(`Server responded with status code ${status}: ${statusText}`));
            }
        }

        // Return an error if JSON parsing fails
        catch (e) {
            if (fail)
                fail(new Error('Error parsing response JSON'));
        }
    };

    xhr.onerror = xhr.onabort = xhr.ontimeout = () => {
        if (fail)
            fail(new Error('Error processing AJAX request'))
    };

    onfinish(xhr);
}

export function parameterize(obj: any){
    var s = [];
    var rbracket = /\[\]$/;

    var isArray = function (obj) {
            return Object.prototype.toString.call(obj) === '[object Array]';
        }, add = function (k, v) {
            v = typeof v === 'function' ? v() : v === null ? '' : v === undefined ? '' : v;
            s[s.length] = encodeURIComponent(k) + '=' + encodeURIComponent(v);
        }, buildParams = function (prefix, obj) {
            var i, len, key;

            if (prefix) {
                if (isArray(obj)) {
                    for (i = 0, len = obj.length; i < len; i++) {
                        if (rbracket.test(prefix)) {
                            add(prefix, obj[i]);
                        } else {
                            buildParams(prefix + '[' + (typeof obj[i] === 'object' ? i : '') + ']', obj[i]);
                        }
                    }
                } else if (obj && String(obj) === '[object Object]') {
                    for (key in obj) {
                        buildParams(prefix + '[' + key + ']', obj[key]);
                    }
                } else {
                    add(prefix, obj);
                }
            } else if (isArray(obj)) {
                for (i = 0, len = obj.length; i < len; i++) {
                    add(obj[i].name, obj[i].value);
                }
            } else {
                for (key in obj) {
                    buildParams(key, obj[key]);
                }
            }
            return s;
        };
    return buildParams('', obj).join('&').replace(/%20/g, '+');
}


var url = 'http://localhost:19196/Api/Test/FetchUsers';

get(url, (res) => {
    console.log(res);
}, (res) => {
    console.log(res);
})