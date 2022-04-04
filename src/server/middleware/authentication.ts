import { NextFunction, Request, Response } from 'express';
import { JWTService } from '../services/jwt.service';

export function authenticate(jwtService: JWTService) {
  return async function (req: Request, res: Response, next: NextFunction) {
    const token = req.headers['x-auth-token'] as string;

    if (!token) throw new Error('There is no token');

    const isValid = jwtService.decode(token);

    if (!isValid) throw new Error('Invalid token');

    next();
  };
}
