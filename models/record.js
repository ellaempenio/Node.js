const db = require('../config/db');
const users = {
    save: (record, callback) => {
        const query = "INSERT INTO users (last_name, first_name, email) VALUES (?, ?, ?)";
        db.query(query, [record.last_name, record.first_name, record.email], callback);

    },
    getAllusers:(callback) => {
        const query = "SELECT * FROM users";
        db.query(query, callback);
    }
};

module.exports = users;