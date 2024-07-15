import { Injectable, UnauthorizedException } from "@nestjs/common";
import { User, UserService } from "./userService";

export interface AuthenticationStrategy {
    authenticate(request: Request): Promise<User>;
  }
  
  @Injectable()
  export class JwtAuthenticationStrategy implements AuthenticationStrategy {
    async authenticate(request: Request): Promise<User> {
      const token = request.headers['authorization'];
    //   const user = await this.authService.verifyToken(token);
    const user = null;
      if (!user) {
        throw new UnauthorizedException('Invalid token');
      }
      return user;
    }
  }
  
  @Injectable()
  export class BasicAuthenticationStrategy implements AuthenticationStrategy {
    async authenticate(request: Request): Promise<User> {
      const authorizationHeader = request.headers['authorization'];
      if (!authorizationHeader) {
        throw new UnauthorizedException('Authorization header missing');
      }
      const [username, password] = Buffer.from(
        authorizationHeader.split(' ')[1],
        'base64',
      )
        .toString()
        .split(':');
    //   const user = await this.authService.authenticateUser(username, password);
    const user = null;
      if (!user) {
        throw new UnauthorizedException('Invalid username or password');
      }
      return user;
    }
  }
  
  @Injectable()
  export class AuthService {
    constructor(private readonly userService: UserService) {}
  
    async verifyToken(token: string): Promise<User> {
      // verify token and return user
      return null; // Replace null with the actual return value
    }
  
    async authenticateUser(username: string, password: string): Promise<User> {
      // authenticate user and return user
      return null
    }
  }