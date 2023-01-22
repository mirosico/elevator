export default {
    type: 'object',
    properties: {
        id: { type: 'string', readonly: true },
        status: { $ref: '#/components/schemas/ElevatorStatus' },
        address: {
            type: 'object',
            properties: {
                state: { type: 'string' },
                city: { type: 'string' },
                street: { type: 'string' },
                houseNumber: { type: 'string' },
                houseNumberAddition: { type: 'string' },
                building: { type: 'string' },
                entrance: { type: 'string' }
            }
        },
        capacity: { type: 'number' },
        floors: {
            type: 'array',
            items: { type: 'number' }
        },
        speed: { type: 'number' }
    }
};
