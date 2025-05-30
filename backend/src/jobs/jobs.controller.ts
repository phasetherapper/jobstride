import { Controller, Get, Post, Body } from '@nestjs/common';
import { JobsService } from './jobs.service';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get()
  getJobs() {
    return this.jobsService.findAll();
  }

  @Post()
  createJob(@Body() jobData: any) {
    return this.jobsService.create(jobData);
  }
}