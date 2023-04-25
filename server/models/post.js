const userData = require('../data/users.json');
const feedData = require('../data/feed.json');

function makePost(post) {
    const index = userData.users.findIndex(user => user.userId === post.userId);
    data.users[index].postHistory.push(post);
    feedData.feed.push(post);
}

module.exports = {
    makePost
}