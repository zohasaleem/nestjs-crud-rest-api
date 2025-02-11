import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-custom';
import { Request } from 'express';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ApiKeyStrategy extends PassportStrategy(Strategy, 'api-key') {
  private readonly validApiKey: string;

  constructor(private configService: ConfigService) {
    super();
    
    this.validApiKey = this.configService.get<string>('API_KEY', ''); 

    if (!this.validApiKey) {
      throw new Error('Missing API_KEY in environment variables');
    }
  }

  validate(req: Request): any {
    const apiKey = req.headers['x-api-key'] as string;

    if (!apiKey || apiKey !== this.validApiKey) {
      throw new UnauthorizedException('Invalid API Key');
    }

    return true;
  }
}
