const https = require("https");

const getBase64FromUrl = (url) => {
  return new Promise((resolve, reject) => {
        https.get(url, response => {
            let data = '';
            response.on('data', chunk => {
                data += chunk;
            });

            response.on('end', () => {
                const base64String = Buffer.from(data, 'binary').toString('base64');
                resolve(`data:${response.headers['content-type']};base64,${base64String}`);
            });
        }).on('error', error => {
            reject(error);
        });
    });
};

getBase64FromUrl(
  "https://lh3.googleusercontent.com/i7cTyGnCwLIJhT1t2YpLW-zHt8ZKalgQiqfrYnZQl975-ygD_0mOXaYZMzekfKW_ydHRutDbNzeqpWoLkFR4Yx2Z2bgNj2XskKJrfw8"
)
  .then(console.log)
  .catch(console.error);

// Output data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAACeCAIAAADL6SW3AAAAA3NCSVQICAjb4U/gAAAMGElEQVR4nO3dfZBdZX3A8d....
