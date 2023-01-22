import { getMockReq, getMockRes } from '@jest-mock/express';
import { elevatorMock, ServiceMock } from './elevator.mocks';
import { ElevatorController, ElevatorStatus } from '../index';

jest.mock('../elevator.service', () => {
    return {
        ElevatorService: ServiceMock
    };
});

describe('Elevator module tests', () => {
    afterAll(() => {
        jest.clearAllMocks();
    });

    it('should add elevator', async () => {
        const req = getMockReq({
            body: elevatorMock
        });
        const { res } = getMockRes();
        await ElevatorController.addElevator(req, res);
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith({
            success: true,
            data: elevatorMock
        });
        expect(res.status).toHaveBeenCalledTimes(1);
        expect(res.json).toHaveBeenCalledTimes(1);
    });

    it('should get elevators', async () => {
        const req = getMockReq();
        const { res } = getMockRes();
        await ElevatorController.getElevators(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({
            success: true,
            data: [elevatorMock]
        });
        expect(res.status).toHaveBeenCalledTimes(1);
        expect(res.json).toHaveBeenCalledTimes(1);
    });

    it('should get elevator', async () => {
        const req = getMockReq({
            params: { id: '1' }
        });
        const { res } = getMockRes();
        await ElevatorController.getElevator(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({
            success: true,
            data: elevatorMock
        });
        expect(res.status).toHaveBeenCalledTimes(1);
        expect(res.json).toHaveBeenCalledTimes(1);
    });

    it('should update elevator', async () => {
        const req = getMockReq({
            params: { id: '1' },
            body: elevatorMock
        });
        const { res } = getMockRes();
        await ElevatorController.updateElevator(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({
            success: true,
            data: elevatorMock
        });
        expect(res.status).toHaveBeenCalledTimes(1);
        expect(res.json).toHaveBeenCalledTimes(1);
    });

    it('should delete elevator', async () => {
        const req = getMockReq({
            params: { id: '1' }
        });
        const { res } = getMockRes();
        await ElevatorController.deleteElevator(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({
            success: true,
            data: elevatorMock
        });
        expect(res.status).toHaveBeenCalledTimes(1);
        expect(res.json).toHaveBeenCalledTimes(1);
    });

    it('should get elevator status', async () => {
        const req = getMockReq({
            params: { id: '1' }
        });
        const { res } = getMockRes();
        await ElevatorController.getElevatorStatus(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({
            success: true,
            data: elevatorMock.status
        });
        expect(res.status).toHaveBeenCalledTimes(1);
        expect(res.json).toHaveBeenCalledTimes(1);
    });

    it('should update elevator status', async () => {
        const newStatus: ElevatorStatus = 'inactive';
        const req = getMockReq({
            params: { id: '1' },
            body: { status: newStatus }
        });
        const { res } = getMockRes();
        await ElevatorController.updateElevatorStatus(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({
            success: true,
            data: newStatus
        });
        expect(res.status).toHaveBeenCalledTimes(1);
        expect(res.json).toHaveBeenCalledTimes(1);
    });
});
