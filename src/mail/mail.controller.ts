import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MailService } from './mail.service';
import { AuthService } from 'src/auth/auth.service';

@ApiTags('Mail')
@Controller('mail')
export class MailController {
  constructor(
    private readonly mailService: MailService) {}

  @Post("sendMail")
  async sendMail(@Body('email') dbEmail:string):Promise <void> {
    return this.mailService.sendMail(dbEmail);
  }
}