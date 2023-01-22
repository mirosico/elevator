import httpStatus from 'http-status';
import { Request, Response } from 'express';
import { ElevatorStatus, IElevator, ElevatorService } from './index';

const addElevator = async (req: Request, res: Response) => {
    try {
        const data: IElevator = req.body;
        const elevator = await ElevatorService.createElevator(data);
        res.status(httpStatus.CREATED).json({ success: true, data: elevator });
    } catch (e: any) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, error: e?.message });
    }
};

const getElevators = async (req: Request, res: Response) => {
    try {
        const address = req.query;
        let elevators: IElevator[] = [];
        const hasQuery = Object.keys(address).length > 0;
        if (hasQuery) {
            console.log(address);
            elevators = await ElevatorService.getElevatorsByAddress(address);
        } else {
            elevators = await ElevatorService.getElevators();
        }
        res.status(httpStatus.OK).json({ success: true, data: elevators });
    } catch (e: any) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, error: e?.message });
    }
};

const getElevator = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const elevator = await ElevatorService.getElevator(id);
        res.status(httpStatus.OK).json({ success: true, data: elevator });
    } catch (e: any) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, error: e?.message });
    }
};

const updateElevator = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data: IElevator = req.body;
        const elevator = await ElevatorService.updateElevator(id, data);
        res.status(httpStatus.OK).json({ success: true, data: elevator });
    } catch (e: any) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, error: e?.message });
    }
};

const deleteElevator = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const elevator = await ElevatorService.deleteElevator(id);
        res.status(httpStatus.OK).json({ success: true, data: elevator });
    } catch (e: any) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, error: e?.message });
    }
};

const getElevatorStatus = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const status = await ElevatorService.getElevatorStatus(id);
        res.status(httpStatus.OK).json({ success: true, data: status });
    } catch (e: any) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, error: e?.message });
    }
};

const updateElevatorStatus = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { status }: { status: ElevatorStatus } = req.body;
        const data = await ElevatorService.updateElevatorStatus(id, status);
        res.status(httpStatus.OK).json({ success: true, data });
    } catch (e: any) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, error: e?.message });
    }
};
export {
    addElevator,
    getElevators,
    getElevator,
    updateElevator,
    deleteElevator,
    getElevatorStatus,
    updateElevatorStatus
};
