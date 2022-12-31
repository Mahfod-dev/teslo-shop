import mongoose from 'mongoose';

const mongooConnection = {
	isConnected: 0,
};

export const connect = async () => {
	if (mongooConnection.isConnected) {
		console.log('connecté');
		return;
	}

	if (mongoose.connections.length > 0) {
		mongooConnection.isConnected = mongoose.connections[0].readyState;

		if (mongooConnection.isConnected === 1) {
			console.log('utilise une connexion anterieure');
			return;
		}
		await mongoose.disconnect();
	}

	await mongoose.connect('....');
	mongooConnection.isConnected = 1;
	console.log('connecté a mongodb');
};

export const disconnect = async () => {
    if(mongooConnection.isConnected !== 0) return

	await mongoose.disconnect();
	console.log('Disconnect de mongo');
};
