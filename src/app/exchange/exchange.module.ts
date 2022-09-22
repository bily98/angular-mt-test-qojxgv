import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ExchangeRoutingModule } from './exchange-routing.module';
import { CoreModule } from '../core/core.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ExchangeRoutingModule,
    CoreModule,
    NgxPaginationModule,
  ],
})
export class ExchangeModule {}
