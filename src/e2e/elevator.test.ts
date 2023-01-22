import supertest from 'supertest';
import app from '../core/app';
import { connectToDatabase, disconnectFromDatabase, clearDatabase } from '../database';
import { elevatorMock } from '../modules/elevator/__tests__/elevator.mocks';

const request = supertest(app);

describe('Elevator api tests', () => {
    beforeAll(async () => {
        await connectToDatabase();
    });

    afterEach(async () => {
        await clearDatabase();
    });

    afterAll(async () => {
        jest.clearAllMocks();
        await disconnectFromDatabase();
    });

    it('should add elevator', async () => {
        const res = await request.post('/elevators').send(elevatorMock);
        expect(res.status).toBe(201);
        expect(res.body.data.address).toEqual(elevatorMock.address);
    });

    it('should get elevators', async () => {
        const res = await request.get('/elevators');
        expect(res.status).toBe(200);
        expect(res.body.data).toHaveLength(0);
        expect(res.body.success).toEqual(true);
    });

    it('should get elevator', async () => {
        const res = await request.get('/elevators/1');
        expect(res.status).toBe(500);
        expect(res.body.success).toEqual(false);
    });
});
