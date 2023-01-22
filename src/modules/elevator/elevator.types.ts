export interface IElevator {
    status: ElevatorStatus;
    address: IAddress;
    capacity: number;
    floors: number[];
    speed: number;
}

export type ElevatorStatus = 'active' | 'inactive' | 'out-of-service';

export interface IAddress {
    state: string;
    city: string;
    street: string;
    houseNumber: string;
    houseNumberAddition?: string;
    building?: string;
    entrance?: string;
}
