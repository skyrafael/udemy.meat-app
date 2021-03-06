import {ModuleWithProviders, NgModule} from '@angular/core';
import {InputComponent} from './input/input.component';
import {RadioComponent} from './radio/radio.component';
import {RatingComponent} from './rating/rating.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ShoppingCartService} from '../restaurant-detail/shopping-cart/shopping-cart.service';
import {OrderService} from '../order/order.service';
import {RestaurantsService} from '../restaurants/restaurants.service';
import {SnackbarComponent } from './massages/snackbar/snackbar.component';
import {NotificationService} from './massages/snackbar/notification.service';
import {LoginService} from '../security/login/login.service';
import {LoggedInGuard} from '../security/loggedin.guard';
import {LeaveOrderGuard} from '../order/leave-order.guard';
import {AuthInterceptor} from '../security/auth.interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

@NgModule({
  declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [InputComponent, RadioComponent, RatingComponent,
  CommonModule, FormsModule, ReactiveFormsModule, SnackbarComponent]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ShoppingCartService,
        RestaurantsService,
        OrderService,
        NotificationService,
        LoginService,
        LoggedInGuard,
        LeaveOrderGuard,
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}]
    };
  }
}

