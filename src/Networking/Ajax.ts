export function get<T> (url: string, successCb?: (response: T) => void, failureCb?: (err: Error) => void): void {
  nonebodyXhr(url, 'get', successCb, failureCb)
}

export function head<T> (url: string, success?: (resp: T) => void, fail?: (res: Error) => void): void {
  nonebodyXhr(url, 'head', success, fail)
}

export function options<T> (url: string, success?: (resp: T) => void, fail?: (res: Error) => void): void {
  nonebodyXhr(url, 'options', success, fail)
}

export function del<T> (url: string, success?: (resp: T) => void, fail?: (res: Error) => void): void {
  nonebodyXhr(url, 'delete', success, fail)
}

export function post<T> (url: string, data: any, successCb?: (response: T) => void, failureCb?: (err: Error) => void): void {
  bodyXhr(url, 'post', data, successCb, failureCb)
}

export function put<T> (url: string, data: any, success?: (response: T) => void, fail?: (resp: Error) => void): void {
  bodyXhr(url, 'put', data, success, fail)
}

export function baseXhr (url: string, method: string, onfinish: (res: XMLHttpRequest) => void, success?: (response: any) => void, fail?: (response: any) => void) {
  try {
    var xhr = new XMLHttpRequest()
    xhr.open(method, url, true)
    xhr.onload = () => {
      const statusText = xhr.statusText
            // From Angular source:
            // responseText is the old-school way of retrieving response (supported by IE9)
            // response/responseType properties were introduced in XHR Level2 spec (supported by IE10)
      const response = ('response' in xhr) ? xhr.response : xhr.responseText
            // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
      const status = xhr.status === 1223 ? 204 : xhr.status

      try {
        // Check status code and parse JSON if request succeeded
        if (status >= 200 && status < 300) {
          if (success) { success(JSON.parse(response)) }
        } else {
          // Return an error if status code is not in successful range
          if (fail) { fail(new Error(`Server responded with status code ${status}: ${statusText}`)) }
        }
      } catch (e) { // Return an error if status code is not in successful range
        if (fail) { fail(new Error('Error parsing response JSON')) }
      }
    }

    xhr.onerror = xhr.onabort = xhr.ontimeout = () => {
      if (fail) { fail(new Error('Error processing AJAX request')) }
    }

    onfinish(xhr)
  } catch (e) {
    if (fail) { fail(e) }
  }
}

export function nonebodyXhr<T> (url: string, method: string, success?: (resp: T) => void, fail?: (resp: Error) => void): void {
  baseXhr(url, method, (xhr) => {
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
    xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, HEAD')
    xhr.setRequestHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    xhr.send()
  }, success, fail)
}

export function bodyXhr<T> (url: string, method: string, data: any, success?: (resp: T) => void, fail?: (resp: Error) => void) {
  baseXhr(url, method, (xhr) => {
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
    xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, HEAD')
    xhr.setRequestHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.send(JSON.stringify(data))
  }, success, fail)
}
