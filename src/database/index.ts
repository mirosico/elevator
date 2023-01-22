import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

const mongodbConnection = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_URL}?retryWrites=true&w=majority`;

const connectToDatabase = async () => {
    try {
        await mongoose.connect(mongodbConnection);
        console.log('Connected to database');
    } catch (e: any) {
        console.error(e);
    }
};

const disconnectFromDatabase = async () => {
    try {
        await mongoose.connection.close();
        console.log('Disconnected from database');
    } catch (e: any) {
        console.error(e);
    }
};

const clearDatabase = async () => {
    try {
        const collections = mongoose.connection.collections;
        for (const key in collections) {
            const collection = collections[key];
            await collection.deleteMany({});
        }
    } catch (e: any) {
        console.error(e);
    }
};

export { connectToDatabase, disconnectFromDatabase, clearDatabase };
