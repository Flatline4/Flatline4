export function get(url: string, successCb: (response: any) => void, failureCb: (err: Error) => void): void {
    const xhr = new XMLHttpRequest();
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
    xhr.send();
}

export function post(url: string, data: any, successCb: (response: any) => void, failureCb: (err: Error) => void): void {

}