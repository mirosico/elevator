import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
import { IElevator } from './index';

const { Schema } = mongoose;

const elevatorSchema = new Schema({
    id: {
        type: Number,
        unique: true
    },
    address: {
        state: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        street: {
            type: String,
            required: true
        },
        houseNumber: {
            type: String,
            required: true
        },
        houseNumberAddition: {
            type: String,
            required: false
        },
        building: {
            type: String,
            required: false
        },
        entrance: {
            type: String,
            required: false
        }
    },
    capacity: {
        type: Number,
        required: true
    },
    floors: {
        type: [Number],
        required: true
    },
    speed: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['active', 'inactive', 'out-of-service']
    }
});

autoIncrement.initialize(mongoose.connection);

elevatorSchema.plugin(autoIncrement.plugin, {
    model: 'Elevator',
    field: 'id',
    startAt: 1
});

export const Elevator = mongoose.model<IElevator>('Elevator', elevatorSchema);
