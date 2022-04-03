import jwt from 'jsonwebtoken';

const X_ACCESS_TOKEN_EXPIRE = { expiresIn: '24h' };

export class JWTService {
    public sign(email: string) {
        return jwt.sign({ email: email }, process.env.JWT_TOKEN_SECRET as string, X_ACCESS_TOKEN_EXPIRE);
    }

    public decode(token: string) {
        try {
            return jwt.decode(token);
        } catch (error) {
            return null;
        }
    }
}