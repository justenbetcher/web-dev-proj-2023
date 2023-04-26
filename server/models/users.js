const jwt = require('jsonwebtoken');
const data = require('../data/users.json');
const { connect, ObjectId } = require('./mongo');

const COLLECTION_NAME = 'users';

async function collection() {
    const db = await connect();
    return db.collection(COLLECTION_NAME);
}

async function getUsers(page = 1, pageSize = 30) {
    const col = await collection();
    const users = await col.find().skip((page-1) * pageSize).limit(pageSize).toArray();
    const total = await col.countDocuments();
    return { users, total };
}

async function getUserById(id) {
    const col = await collection();
    const user = await col.findOne({ _id: new ObjectId(id) });
    return user;
}

async function addUser(user) {
    const col = await collection();
    const result = await col.insertOne(user);
    //user.id = result.insertedId;  //***this line is not
                                    //unless you are setting the
                                    //_id that is given by Mongo
                                    //to another field in the
                                    //object however it is not saving to the db
                                    //becaue it appens after the insert occurse***
    return user;
}

async function updateUser(id, user) {
    const col = await collection();
    const result = await col.updateOne(
        { _id: new ObjectId(id) },
        { $set: user },
        { returnDocument: 'after' },
    )
    return result.value;
}

/*

wanted to save this because i was proud that i figured it out how
to do it this way

function updateUser(user) {
    const index = data.users.findIndex(u => u.id === user.id);
    data.users[index] = {
        ...data.users[index], 
        ...user,
    };
}
*/

async function deleteUser(id) {
    const col = await collection();
    const result = await col.deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount;
}

async function searchUsers(keyWord, page=1, pageSize=30) {
    const col = await collection();
    const query = {
        $or: [
            { name: { $regex: keyWork, $optoins: 'i' } },
            { email: { $regex: keyWord, $options: 'i' } }
        ]
    };

    const users = await col.find(query).skip((page-1) * pageSize).limit(pageSize).toArray();
    const total = await col.countDocuments(query);
    return { users, total }
}


module.exports = {
    getUsers,
    getUserById,
    updateUser,
    addUser,
    deleteUser,
    searchUsers
};