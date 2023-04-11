const data = require('../data/feed.json');

function getFeed() {
    return data.feed;
}

function addPost(post, date) {
    post.id = post.user.replace(/\s/g, "").toLowerCase() + date;
    data.feed.push(post);
}

function deletePost(id) {
    const index = data.feed.findIndex(post => post.ID === id);
    data.feed.splice(index, 1);
}

module.exports = { 
    getFeed,
    addPost,
    deletePost,
}