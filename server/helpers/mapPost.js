const mongoose = require('mongoose');
const mapComment = require('./mapComment');

module.exports = function (post) {
	return {
		id: post.id,
		title: post.title,
		image_url: post.image_url,
		content: post.content,
		comments: post.comments.map((comment) =>
			mongoose.isObjectIdOrHexString(comment) ? comment : mapComment(comment),
		),
		published_at: (post.createdAt?.toISOString() || '')
			.substring(0, 16)
			.replace('T', ' '),
	};
};

//Date().toISOString().substring(0, 16).replace('T', ' ');
