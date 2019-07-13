'use strict';

class Attendance {
    getAttendance(args = {}) {
        const { params } = args;
        return this.request.get(`${this.apiHost}attendance`, { params: params });
    }
}

module.exports = Attendance;