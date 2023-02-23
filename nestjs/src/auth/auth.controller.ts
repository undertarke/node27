import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserLoginDto, UserSignupDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) { }

    @Post("/login")
    login(@Body() body: UserLoginDto): string {
        
        let { email, password } = body;
        return this.authService.login(email, password);
    }

    @Post("/signup")
    signup(@Body() body: UserSignupDto): any {
        return this.authService.signup(body);
    }

    
}

// nest g module auth 
// nest g controller auth --no-spec
// nest g service auth  --no-spec