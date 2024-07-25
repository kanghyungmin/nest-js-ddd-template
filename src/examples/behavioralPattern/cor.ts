// // Chain of Responsibility Pattern

// @Injectable()
// export class AuthenticationMiddleware implements NestMiddleware {
//   constructor(private readonly authService: AuthService) {}

//   async use(request: Request, response: Response, next: NextFunction) {
//     try {
//       const user = await this.authService.authenticate(request);
//       request.user = user;
//       next();
//     } catch (error) {
//       next(error);
//     }
//   }
// }

// @Injectable()
// export class AuthorizationMiddleware implements NestMiddleware {
//   async use(request: Request, response: Response, next: NextFunction) {
//     try {
//       const user = request.user;
//       if (!user.isAdmin) {
//         throw new ForbiddenException('You are not authorized');
//       }
//       next();
//     } catch (error) {
//       next(error);
//     }
//   }
// }


