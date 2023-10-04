import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthLoginDto } from './dto/auth-login.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() authLoginDto: AuthLoginDto) {
    console.log(authLoginDto)
    return this.authService.login(authLoginDto);
  }

  // @Get('/by-email/:email')
  // getByEmail(@Param('email') email: string) {
  //   return this.usersService.findByEmail(email);
  // }
}
