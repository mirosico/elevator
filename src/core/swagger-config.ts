import elevatorDoc from '../modules/elevator/swagger/swagger.docs';

import Elevator from '../modules/elevator/swagger/elevator';
import ElevatorStatus from '../modules/elevator/swagger/elevator-status';

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Elevators API',
            version: '1.0.0',
            description: 'This is the documentation of the Elevators API'
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Local development environment'
            }
        ],
        paths: {
            ...elevatorDoc
        },
        components: {
            schemas: {
                Elevator,
                ElevatorStatus
            },
            parameters: {
                id: {
                    in: 'path',
                    name: 'id',
                    schema: {
                        type: 'string'
                    }
                }
            }
        }
    },
    apis: ['./app.ts']
};

export default swaggerOptions;
