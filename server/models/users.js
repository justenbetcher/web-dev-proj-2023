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
            { name: { $regex: keyWord, $optoins: 'i' } },
            { email: { $regex: keyWord, $options: 'i' } }
        ]
    };

    const users = await col.find(query).skip((page-1) * pageSize).limit(pageSize).toArray();
    const total = await col.countDocuments(query);
    return { users, total }
}

async function seed() {
    const col = await collection();
    const result = await col.insertMany(data.users);
    return result.insertedCount;
}

async function login(email, password) {
    const col = await collection();
    const user = await col.findOne({ email });
    if(!user) { 
        throw new Error('User not found');
    }
    if(user.password !== password) {
        throw new Error('Invalide password');
    }

    const userNoPassword = { ...user, password: undefined };
    const token = await generateTokenAsync(userNoPassword, '1d');

    return { user: userNoPassword, token }
}

async function oAuthLogin(provider, accessToken) {

}

function generateTokenAsync(user, expiresIn) {
    return new Promise( (resolve, reject) => {
        jwt.sign(user, process.env.JWT_SECRET ?? "", { expiresIn }, (err, token) => {
            if(err) {
                reject(err);
            } else {
                resolve(token);
            }
        });
    });
}

function verifyTokenAsync(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET ?? "", (err, user) => {
            if(err) {
                reject(err);
            } else {
                resolve(user);
            }
        });
    });
}


module.exports = {
    getUsers,
    getUserById,
    updateUser,
    addUser,
    deleteUser,
    searchUsers,
    login,
    generateTokenAsync,
    verifyTokenAsync,
    seed
};