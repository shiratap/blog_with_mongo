//Taken and modified from MongoDB's tutorial
//https://blog.mlab.com/2017/05/mongodb-connection-pooling-for-express-applications/

const MongoClient = require('mongodb').MongoClient;

const mongo = process.env.MONGODB_URL;

function connect(url) {
	return MongoClient.connect(url).then((client) =>
		client.db('blog_with_mongodb')
	);
}

module.exports = async function () {
	let databases = await Promise.all([connect(mongo)]);

	return databases[0];
};
