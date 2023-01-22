import { Elevator } from './elevator.model';
import { ElevatorStatus, IAddress, IElevator } from './elevator.types';

export class ElevatorService {
    static async createElevator(data: IElevator): Promise<IElevator> {
        const elevator = new Elevator(data);
        await elevator.save();
        return elevator;
    }

    static async getElevators(): Promise<IElevator[]> {
        const elevators = await Elevator.find({});
        return elevators;
    }

    static async getElevatorsByAddress(address: Partial<IAddress>): Promise<IElevator[]> {
        const { state, city, street, houseNumber, houseNumberAddition, building, entrance } = address;
        const elevators = await Elevator.find({
            address: { state, city, street, houseNumber, houseNumberAddition, building, entrance }
        });
        return elevators;
    }

    static async getElevator(id: string): Promise<IElevator> {
        const [elevator] = await Elevator.find({ id });
        if (!elevator) {
            throw new Error('Elevator not found');
        }
        return elevator;
    }

    static async updateElevator(id: string, data: IElevator): Promise<IElevator> {
        const [elevator] = await Elevator.find({ id });
        if (!elevator) {
            throw new Error('Elevator not found');
        }
        elevator.set(data);
        await elevator.save();
        return elevator;
    }

    static async deleteElevator(id: string): Promise<IElevator> {
        const [elevator] = await Elevator.find({ id });
        if (!elevator) {
            throw new Error('Elevator not found');
        }
        await elevator.remove();
        return elevator;
    }

    static async getElevatorStatus(id: string): Promise<ElevatorStatus> {
        const [elevator] = await Elevator.find({ id });
        if (!elevator) {
            throw new Error('Elevator not found');
        }
        return elevator.status;
    }

    static async updateElevatorStatus(id: string, status: ElevatorStatus): Promise<ElevatorStatus> {
        const [elevator] = await Elevator.find({ id });
        if (!elevator) {
            throw new Error('Elevator not found');
        }
        elevator.status = status;
        await elevator.save();
        return elevator.status;
    }
}
