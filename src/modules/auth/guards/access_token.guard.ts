import { AuthGuard } from '@nestjs/passport';

export class AtGuard extends AuthGuard('jwt') {
   //Run Passport authentication using strategy "jwt"
   constructor() {
      super();
   }
}


