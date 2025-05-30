


import { Controller, Get } from '@nestjs/common';
import * as os from 'os';

@Controller('ping')
export class PingController {
  @Get()
  ping() {
    const uptime = process.uptime();
    const load = os.loadavg();
    const memoryUsage = process.memoryUsage();

    return {
      message: 'pong',
      uptime: `${uptime.toFixed(2)}s`,
      version: process.env.npm_package_version || 'dev',
      system: {
        platform: os.platform(),
        arch: os.arch(),
        cpu: `${os.cpus().length} cores`,
        memory: {
          total: `${(os.totalmem() / 1024 ** 3).toFixed(2)} GB`,
          free: `${(os.freemem() / 1024 ** 3).toFixed(2)} GB`,
        },
        loadavg: {
          '1min': load[0].toFixed(2),
          '5min': load[1].toFixed(2),
          '15min': load[2].toFixed(2),
        },
      },
      process: {
        rss: `${(memoryUsage.rss / 1024 ** 2).toFixed(2)} MB`,
        heapUsed: `${(memoryUsage.heapUsed / 1024 ** 2).toFixed(2)} MB`,
        heapTotal: `${(memoryUsage.heapTotal / 1024 ** 2).toFixed(2)} MB`,
      },
    };
  }
}