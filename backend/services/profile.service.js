const mySQL = require('../db_connection/mysql');

function create(name, bio, fbId){
    return mySQL.query(
        'INSERT INTO profiles (`name`, bio, fb_id) VALUE (?, ?, ?)',
        [name, bio, fbId]
    );
}

function update(id, name, bio, fbId){
    return mySQL.query(
       'UPDATE profiles SET `name` = ?, bio = ?, fb_id = ? WHERE id = ?',
       [name, bio, fbId, id]
    );
}

function getProfileById(profileId){
    return mySQL.query(
        'SELECT id, `name`, bio, fb_id AS fbId FROM profiles WHERE id = ? LIMIT 1',
        [profileId]
    ).then(result => {
        if(!result || !result.rows || !result.rows.length)
            return Promise.reject({status: 404, message: "No profile by given id"});

        return Promise.resolve(result.rows[0]);
    });
}

function getProfiles(){
    return mySQL.query(
        'SELECT id, `name` FROM profiles'
    ).then(result => {
        if(!result || !result.rows || !result.rows.length)
            return Promise.reject({status: 404, message: "No profiles found"});

        return Promise.resolve(result.rows);
    });
}


module.exports = Object.freeze({
    create, update, getProfileById, getProfiles
});