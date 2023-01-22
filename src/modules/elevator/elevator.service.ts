import { ElevatorStatus, IAddress, IElevator, getAddressDataFromQuery, Elevator } from './index';

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

    static async getElevatorsByAddress(query: Partial<IAddress>): Promise<IElevator[]> {
        const address: Partial<IAddress> = getAddressDataFromQuery(query);
        const elevators = await Elevator.find({
            ...address
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
