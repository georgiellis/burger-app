const connection = require("../config/connection.js");

const orm = {
    selectAll: function (tableInput, cb) {
        const queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    insertOne: function (table, cols, vals, cb) {
        const queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, cols, vals], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    updateOne: function (table, updateColVal, updateValue, id, cb) {
        const queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
        connection.query(queryString, [table, updateColVal, updateValue, id], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;