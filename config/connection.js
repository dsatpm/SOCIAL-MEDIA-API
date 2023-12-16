// connect to MongoDB
const { connect, connection } = require('mongoose');

// import environmental variables from our variables.env file
const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialMediaDb';

// connect to the database with the connection string
connect(connectionString, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

// log the connection
connection.on('connected', () => {
	console.log('MongoDB connection established successfully');
});

// log any errors
connection.on('error', (err) => {
	console.error(`MongoDB connection error: ${err}`);
});

// log when disconnected
connection.on('disconnected', () => {
	console.log('MongoDB connection disconnected');
});

module.exports = connection;
