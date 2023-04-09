const data = require('../data/users.json');

function getUsers() {
    return data.users;
}

function getUserById(id) {
    return data.users.find(user => user.id === id);
}

function addUser(user) {
    user.id = data.users.length;
    data.products.push(user);
}

function updateUser(user) {
    const index = data.products.findIndex(u => u.id === user.id);
    data.users[index] = user;
}

function deleteUser(id) {
    const index = data.users.findIndex(u => u.id === id);
    data.products.splice(index, 1);
}

function searchUser(name) {
    return data.users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
}

module.exports = {
    getUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser,
    searchUser
};