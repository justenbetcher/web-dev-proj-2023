const { MongoClient, ObjectId } = require('mongodb');

const url = process.env.MONGO_URL ?? '';
const DB_NAME = process.env.MONGO_DB_NAME ?? 'chopify';

const client = new MongoClient(url);

async function connect() {
    const db = await client.connect();
    return db.db(DB_NAME);
}

module.exports = {
    ObjectId,
    DB_NAME,
    connect
}