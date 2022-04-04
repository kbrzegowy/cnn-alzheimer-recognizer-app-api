import { UserController } from '../api/users/user.controller';
import { ServicesFactory } from './services.factory';

export interface Controllers {
  userController: UserController;
}

export class ControllersFactory {
  public readonly controllers: Controllers;

  constructor(private servicesFactory: ServicesFactory) {
    this.servicesFactory = servicesFactory;

    const userController = new UserController(
      servicesFactory.services.userService
    );

    this.controllers = {
      userController,
    };
  }

  public getServices() {
    return this.servicesFactory.services;
  }
}
