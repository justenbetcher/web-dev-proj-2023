const data = require('../data/feed.json');
const { connect, ObjectId } = require('./mongo');

const COLLECTION_NAME = 'feed';

async function collection() {
    const db = await connect();
    return db.collection(COLLECTION_NAME);
}

async function getFeed(page = 1, pageSize = 50) {
    const col = await collection();
    const feed = await col.find().skip((page - 1) * pageSize).limit(pageSize).toArray();
    const total = await col.countDocuments();
    return { feed, total }
}

async function deletePost(id) {
    const col = await collection();
    const result = col.deleteOne({ _id: new ObjectId(id) });
    return result;
}

module.exports = { 
    getFeed,
    deletePost,
}