import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PingController } from './ping/ping.controller';
import { JobsModule } from './jobs/jobs.module';
import { EmployeesModule } from './employees/employees.module';
import { CustomersModule } from './customers/customers.module';
import { SchedulingModule } from './scheduling/scheduling.module';
import { TimesheetsModule } from './timesheets/timesheets.module';
import { BillingModule } from './billing/billing.module';
import { NotificationsModule } from './notifications/notifications.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AuthModule } from './auth/auth.module';
import { SettingsModule } from './settings/settings.module';
import { IntegrationsModule } from './integrations/integrations.module';
import { IntegrationService } from './integration/integration.service';

@Module({
  imports: [JobsModule, EmployeesModule, CustomersModule, SchedulingModule, TimesheetsModule, BillingModule, NotificationsModule, DashboardModule, AuthModule, SettingsModule, IntegrationsModule],
  controllers: [AppController, PingController],
  providers: [AppService, IntegrationService],
})
export class AppModule {}
