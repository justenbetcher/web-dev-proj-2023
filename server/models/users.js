const data = require('../data/users.json');
const feedData = require('../data/feed.json');

function getUsers() {
    return data.users;
}

function getUserByID(id) {
    return data.users.find(user => user.id === id);
}

function addUser(user) {
    let date =  new Date().valueOf();
    user.id = user.name.replace(/\s/g, "").toLowerCase() + date;
    data.users.push(user);
}

function makePost(post) {
    const index = data.users.findIndex(u => u.userId === post.userId);
    data.users[index].postHistory.push(post);
    feedData.feed.push(post);
}

function updateUser(user) {
    const index = data.users.findIndex(u => u.id === user.id);
    data.users[index] = user;
}

function deleteUser(id) {
    const index = data.users.findIndex(u => u.id === id);
    data.users.splice(index, 1);
}


module.exports = {
    getUsers,
    getUserByID,
    addUser,
    makePost,
    updateUser,
    deleteUser,
};