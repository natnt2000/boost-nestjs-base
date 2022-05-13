import { Params } from 'nestjs-pino';
import { Environment } from '../common.constant';

export const pinoLoggerConfiguration: Params = {
  pinoHttp: {
    autoLogging: false,
    transport:
      process.env.NODE_ENV !== Environment.PRODUCTION
        ? {
            target: 'pino-pretty',
            options: {
              colorize: true,
              translateTime: 'SYS:standard',
            },
          }
        : undefined,
  },
};
