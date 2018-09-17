import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { LoadingBarService } from './services/loading-bar.service';
import { LoadingBarInterceptor } from './interceptors/loadstate.interceptor.service';
@NgModule({
  imports: [CommonModule, HttpClientModule],
  exports: [ProgressBarComponent],
  declarations: [ProgressBarComponent]
})
export class LoaderModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LoaderModule,
      providers: [
        LoadingBarService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: LoadingBarInterceptor,
          multi: true
        }
      ]
    };
  }
}
