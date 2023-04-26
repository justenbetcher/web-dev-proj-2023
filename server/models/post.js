const userData = require('../data/users.json');
const feedData = require('../data/feed.json');

const { connect, ObjectId } = require('./mongo');


async function userCollection() { 
    const db = await connect();
    return db.collection('users');
}

async function feedCollection() {
    const db = await connect();
    return db.collection('feed');
}


async function makePost(id, post) {
    post.userId = id;
    const feedCol = await feedCollection();
    const feedResult = await feedCol.insertOne(post);

    const userCol = await userCollection();
    const user = await userCol.findOne({ _id: new ObjectId(id) });
    user.postHistory.push(post);
    const userResult = await userCol.updateOne(
        { _id: new ObjectId(id) },
        { $set: user },
        { returnDocument: 'after' }
    );
    return { userResult, feedResult }
}

module.exports = {
    makePost
}