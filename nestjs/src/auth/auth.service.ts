import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaClient } from '@prisma/client';
import { UserSignupDto } from './dto/auth.dto';

@Injectable()
export class AuthService {

    constructor(
        private config: ConfigService,
        private jwt: JwtService
    ) { }

    private prisma = new PrismaClient();

    login(email: string, password: string): any {

        // bcrypt
        // check email
        // check password
        // bcrypt.verify(password,checkUser.password)

        //login thành công
        //tạo token
        let token = this.jwt.sign({ data: "thông tin user" }, { secret: this.config.get("SECRET_KEY"), expiresIn: "10m" });

        return token;
    }

    signup(newUser: UserSignupDto): any {



    }
}
