import { ElevatorStatus, IElevator } from '../index';

const elevatorMock: IElevator = {
    address: {
        state: 'CA',
        city: 'Los Angeles',
        street: 'Main Street',
        houseNumber: '123',
        houseNumberAddition: 'A',
        building: '1',
        entrance: '1'
    },
    capacity: 10,
    floors: [1, 2, 3, 4, 5],
    speed: 1,
    status: 'active'
};

const ServiceMock = {
    createElevator: jest.fn((elevator: IElevator) => {
        return Promise.resolve(elevatorMock);
    }),
    getElevators: jest.fn(() => {
        return Promise.resolve([elevatorMock]);
    }),
    getElevator: jest.fn((id: string) => {
        return Promise.resolve(elevatorMock);
    }),
    updateElevator: jest.fn((id: string, elevator: IElevator) => {
        return Promise.resolve(elevatorMock);
    }),
    deleteElevator: jest.fn((id: string) => {
        return Promise.resolve(elevatorMock);
    }),
    getElevatorStatus: jest.fn((id: string) => {
        return Promise.resolve(elevatorMock.status);
    }),
    updateElevatorStatus: jest.fn((id: string, status: ElevatorStatus) => {
        elevatorMock.status = status;
        return Promise.resolve(elevatorMock.status);
    })
};

export { elevatorMock, ServiceMock };
