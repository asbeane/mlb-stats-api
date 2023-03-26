'use strict';

class Attendance {
    getAttendance(args = {}) {
        const { params } = args;
        return fetch(`${this.apiHost}attendance`, { params: params });
    }
}

module.exports = Attendance;