import { Injectable } from '@nestjs/common';

@Injectable()
export class JobsService {
  private jobs = [
    { id: 1, title: 'AC Repair', customer: 'John Doe', status: 'scheduled' },
    { id: 2, title: 'Electrical Wiring', customer: 'Jane Smith', status: 'completed' },
  ];

  findAll() {
    return this.jobs;
  }

  create(job: any) {
    const newJob = { id: Date.now(), ...job };
    this.jobs.push(newJob);
    return newJob;
  }
}
