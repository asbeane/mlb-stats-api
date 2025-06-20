'use strict';
const HttpClient = require('../httpClient');

class Attendance {
    getAttendance(args = {}) {
        const { params } = args;
        return HttpClient.request(`${this.apiHost}attendance`, { params: params });
    }
}

module.exports = Attendance;