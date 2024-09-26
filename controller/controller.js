const users = require('../models/record');

const print = {
    index: (req, res) => {
        res.render('index');
    },
    
    display: (req, res) => {
        users.getAllusers((err, results) => {
            if(err) throw err;
            res.render('display', {users: results});
        })
    },
    save: (req, res) => {
        const data = req.body;
        users.save(data, (err) => {
            if(err) throw err;
            res.redirect('/');
        })
    }
};

module.exports = print;