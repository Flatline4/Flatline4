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
    baseXhr(url, 'post', (xhr) => {
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(JSON.stringify(data))
    }, successCb, failureCb);
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
   function toQueryString(obj, urlEncode) {
    //
    // Helper function that flattens an object, retaining key structer as a path array:
    //
    // Input: { prop1: 'x', prop2: { y: 1, z: 2 } }
    // Example output: [
    //     { path: [ 'prop1' ],      val: 'x' },
    //     { path: [ 'prop2', 'y' ], val: '1' },
    //     { path: [ 'prop2', 'z' ], val: '2' }
    // ]
    //
    function flattenObj(x, path?) {
        var result = [];

        path = path || [];
        Object.keys(x).forEach(function (key) {
            if (!x.hasOwnProperty(key)) return;

            var newPath = path.slice();
            newPath.push(key);

            var vals = [];
            if (typeof x[key] == 'object') {
                vals = flattenObj(x[key], newPath);
            } else {
                vals.push({ path: newPath, val: x[key] });
            }
            vals.forEach(function (obj) {
                return result.push(obj);
            });
        });

        return result;
    } // flattenObj

    // start with  flattening `obj`
    var parts = flattenObj(obj); // [ { path: [ ...parts ], val: ... }, ... ]

    // convert to array notation:
    parts = parts.map(function (varInfo) {
        if (varInfo.path.length == 1) varInfo.path = varInfo.path[0];else {
            var first = varInfo.path[0];
            var rest = varInfo.path.slice(1);
            varInfo.path = first + '[' + rest.join('][') + ']';
        }
        return varInfo;
    }); // parts.map

    // join the parts to a query-string url-component
    var queryString = parts.map(function (varInfo) {
        return varInfo.path + '=' + varInfo.val;
    }).join('&');
    if (urlEncode) return encodeURIComponent(queryString);else return queryString;
}
    return toQueryString(obj, true);
}


var url = 'http://localhost:19196/Api/Test/Worked';

var account = {
    Email: 'test@test.com',
    Password: 'test2@test.com'
}

//console.log(parameterize(account));

post(url, account, (res) => {
    console.log(res);
}, (res) => {
    console.log(res);
});