import express from 'express';
import { ElevatorController } from './index';

const elevatorRouter = express.Router();

elevatorRouter.post('/', ElevatorController.addElevator);

elevatorRouter.get('/', ElevatorController.getElevators);

elevatorRouter.get('/:id', ElevatorController.getElevator);

elevatorRouter.put('/:id', ElevatorController.updateElevator);

elevatorRouter.delete('/:id', ElevatorController.deleteElevator);

elevatorRouter.get('/:id/status', ElevatorController.getElevatorStatus);

elevatorRouter.put('/:id/status', ElevatorController.updateElevatorStatus);

export { elevatorRouter };
