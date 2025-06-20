'use strict';

const https = require('https');
const { URL } = require('url');

class HttpClient {
    static async request(url, options = {}) {
        const parsedUrl = new URL(url);
        
        if (options.params) {
            Object.entries(options.params).forEach(([key, value]) => {
                if (value !== undefined && value !== null) {
                    parsedUrl.searchParams.append(key, value);
                }
            });
        }

        return new Promise((resolve, reject) => {
            const reqOptions = {
                hostname: parsedUrl.hostname,
                path: parsedUrl.pathname + parsedUrl.search,
                method: options.method || 'GET',
                headers: {
                    'Accept': 'application/json',
                    'User-Agent': 'mlb-stats-api/1.11.0',
                    ...options.headers
                }
            };

            const req = https.request(reqOptions, (res) => {
                let data = '';

                res.on('data', (chunk) => {
                    data += chunk;
                });

                res.on('end', () => {
                    let parsedData;
                    try {
                        parsedData = JSON.parse(data);
                    } catch (e) {
                        parsedData = data;
                    }

                    const response = {
                        status: res.statusCode,
                        statusText: res.statusMessage,
                        headers: res.headers,
                        data: parsedData,
                        json: async () => parsedData,
                        text: async () => data
                    };

                    if (res.statusCode >= 200 && res.statusCode < 300) {
                        resolve(response);
                    } else {
                        const error = new Error(`Request failed with status ${res.statusCode}`);
                        error.response = response;
                        reject(error);
                    }
                });
            });

            req.on('error', (error) => {
                reject(error);
            });

            if (options.body) {
                req.write(options.body);
            }

            req.end();
        });
    }
}

module.exports = HttpClient;