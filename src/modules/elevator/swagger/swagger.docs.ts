export default {
    '/elevators': {
        get: {
            tags: ['Elevators'],
            description: 'Get all elevators',
            operationId: 'getElevators',
            parameters: [],
            responses: {
                200: {
                    description: 'Elevators were obtained',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    success: { types: 'boolean' },
                                    data: {
                                        type: 'array',
                                        items: {
                                            $ref: '#/components/schemas/Elevator'
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                500: {
                    description: 'Server error',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    success: { types: 'boolean' },
                                    error: { type: 'string' }
                                }
                            }
                        }
                    }
                }
            }
        },
        post: {
            tags: ['Elevators'],
            description: 'Create elevator',
            operationId: 'createElevator',
            parameters: [],
            requestBody: {
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Elevator'
                        }
                    }
                }
            },
            responses: {
                200: {
                    description: 'Elevator was created',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    success: { types: 'boolean' },
                                    data: { $ref: '#/components/schemas/Elevator' }
                                }
                            }
                        }
                    }
                }
            }
        },
        put: {
            tags: ['Elevators'],
            description: 'Update elevator',
            operationId: 'updateElevator',
            parameters: [
                {
                    $ref: '#/components/parameters/id'
                }
            ],
            requestBody: {
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Elevator'
                        }
                    }
                }
            },
            responses: {
                200: {
                    description: 'Elevator was updated',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    success: { types: 'boolean' },
                                    data: { $ref: '#/components/schemas/Elevator' }
                                }
                            }
                        }
                    }
                },
                500: {
                    description: 'Server error',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    success: { types: 'boolean' },
                                    error: { type: 'string' }
                                }
                            }
                        }
                    }
                }
            }
        },
        delete: {
            tags: ['Elevators'],
            description: 'Delete elevator',
            operationId: 'deleteElevator',
            parameters: [
                {
                    $ref: '#/components/parameters/id'
                }
            ],
            responses: {
                200: {
                    description: 'Elevator was deleted',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    success: { types: 'boolean' },
                                    data: { $ref: '#/components/schemas/Elevator' }
                                }
                            }
                        }
                    }
                },
                500: {
                    description: 'Server error',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    success: { types: 'boolean' },
                                    error: { type: 'string' }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    '/elevators/{id}/status': {
        get: {
            tags: ['Elevators'],
            description: 'Get elevator status',
            operationId: 'getElevatorStatus',
            parameters: [
                {
                    $ref: '#/components/parameters/id'
                }
            ],
            responses: {
                200: {
                    description: 'Elevator status was obtained',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    success: { types: 'boolean' },
                                    data: { $ref: '#/components/schemas/ElevatorStatus' }
                                }
                            }
                        }
                    }
                },
                500: {
                    description: 'Server error',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    success: { types: 'boolean' },
                                    error: { type: 'string' }
                                }
                            }
                        }
                    }
                }
            }
        },
        put: {
            tags: ['Elevators'],
            description: 'Update elevator status',
            operationId: 'updateElevatorStatus',
            parameters: [
                {
                    $ref: '#/components/parameters/id'
                }
            ],
            requestBody: {
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                status: { $ref: '#/components/schemas/ElevatorStatus' }
                            }
                        }
                    }
                }
            },
            responses: {
                200: {
                    description: 'Elevator status was updated',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    success: { types: 'boolean' },
                                    data: { $ref: '#/components/schemas/ElevatorStatus' }
                                }
                            }
                        }
                    }
                },
                500: {
                    description: 'Server error',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    success: { types: 'boolean' },
                                    error: { type: 'string' }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};
