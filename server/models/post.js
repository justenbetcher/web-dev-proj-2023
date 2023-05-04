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
    if(user.postHistory == undefined) {
        user.postHistory = [];
    }
    user.postHistory.push(post);
    const userResult = await userCol.updateOne(
        { _id: new ObjectId(id) },
        { $set: user },
        { returnDocument: 'after' }
    );
    return { userResult, feedResult }
}

async function deletePost(postId, userId) {
    const feedCol = await feedCollection();
    const userCol = await userCollection();

    const post = await feedCol.findOne({ _id: new ObjectId(postId) });
    console.log(userId)

    if(!post) {
        throw new Error('cant find post in feed');
    }
    if(userId != post.userId) {
        throw new Error('user is not the owner of this post');
    }
    const feedResult = await feedCol.findOneAndDelete({ _id: new ObjectId(postId) });
    console.log(feedResult);
    const user = await userCol.findOne({ _id: new ObjectId(userId) });
    const index = user.postHistory.findIndex(p => p._id == postId);
    user.postHistory.splice(index, 1);
    const userResult = await userCol.updateOne(
        { _id: new ObjectId(userId) },
        { $set: user },
        { returnDocument: 'after' }
        );
        console.log(userResult);
    return { userResult, feedResult };

}

module.exports = {
    makePost,
    deletePost
}