import {
  Body,
  Controller,
  HttpStatus,
  Logger,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { AuthGuard } from '@nestjs/passport';
import { LoginAuthDto } from './dto/login-auth.dto';
import { StandardResponse } from '../common/standard-response';

@Controller('auth')
export class AuthController {
  private logger: Logger = new Logger(AuthController.name);

  constructor(private readonly authService: AuthService) {}

  @Post()
  async create(@Body() createAuthDto: CreateAuthDto) {
    try {
      return new StandardResponse(
        HttpStatus.CREATED,
        'Success',
        await this.authService.create(createAuthDto),
      );
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  @Post('login')
  @UseGuards(AuthGuard('local'))
  async login(@Body() dto: LoginAuthDto) {
    try {
      return new StandardResponse(
        HttpStatus.OK,
        'Success',
        await this.authService.login(dto),
      );
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
}
