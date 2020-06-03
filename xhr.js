const documentFile = document.querySelector('.server_answer')

class HttpService {
    _http(method, url, body = null) {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json';
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.onload = () => {
            if (xhr.status >= 400) {
                documentFile.innerHTML = `Ошибка: ${xhr.status}`;
            }
            Object.values(xhr.response).forEach(item => {
                let json = JSON.stringify(item);
                documentFile.innerHTML += json + '<br><br>'

            })
        };

        xhr.onerror = () => {
            documentFile.innerHTML = 'Ошибка запроса'
        };

        xhr.send(JSON.stringify(body));
    }

    httpGet(url) {
        this._http('GET', url);
    }

    httpPost(url, body) {
        this._http('POST', url, body);
    }
}

const xhrDoc = new HttpService();

// xhrDoc.httpGet('http://jsonplaceholder.typicode.com/users')


function serverPromise(method, url, body = null) {
    return new Promise(function (resolve, reject) {
        const xhrPromise = new XMLHttpRequest();
        xhrPromise.open(method, url);
        xhrPromise.responseType = 'json';
        xhrPromise.setRequestHeader('Content-Type', 'application/json')
        xhrPromise.onload = () => {
            if (xhrPromise.status >= 400) {
                reject(`Ошибка: ${xhrPromise.status}`);
            }
            resolve(xhrPromise.response)
        };

        xhrPromise.onerror = () => {
            documentFile.innerHTML = 'Ошибка запроса'
        };

        xhrPromise.send(JSON.stringify(body));
    })
}

// const body = {
//     name: 'Varenichek',
//     age: 666,
//     stuffing: 'cherry'
// }
// serverPromise('POST', 'http://jsonplaceholder.typicode.com/users', body)
//     .then(info => {
//         Object.values(info).forEach(item => {
//             let json = JSON.stringify(item);
//             documentFile.innerHTML += json + '<br><br>'
//         })})
//             .catch(err => console.log(err));

async function serverAsync(method, url, body = null) {
    const response = await new Promise(function (resolve, reject) {
        const xhrPromise = new XMLHttpRequest();
        xhrPromise.open(method, url);
        xhrPromise.responseType = 'json';
        xhrPromise.setRequestHeader('Content-Type', 'application/json')
        xhrPromise.onload = () => {
            if (xhrPromise.status >= 400) {
                reject(`Ошибка: ${xhrPromise.status}`);
            }
            resolve(xhrPromise.response)
        };

        xhrPromise.onerror = () => {
            documentFile.innerHTML = 'Ошибка запроса'
        };

        xhrPromise.send(JSON.stringify(body));
    });
    const json = await response;
    Object.values(json).forEach(item => {
        let json = JSON.stringify(item);
        documentFile.innerHTML += json + '<br><br>'

    })
}
