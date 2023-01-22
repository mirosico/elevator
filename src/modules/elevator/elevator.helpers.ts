import { IAddress } from './index';

export const getAddressDataFromQuery = (query: Partial<IAddress>): Partial<IAddress> => {
    const address = {
        street: query.street,
        city: query.city,
        state: query.state,
        houseNumber: query.houseNumber,
        houseNumberAddition: query.houseNumberAddition,
        building: query.building,
        entrance: query.entrance
    };
    let addressData: Partial<IAddress> = {};
    Object.keys(address).forEach((key) => {
        if (address[key]) {
            addressData[`address.${key}`] = address[key];
        }
    });
    return addressData;
};
