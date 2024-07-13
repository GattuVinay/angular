import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';

bootstrapApplication(AppComponent,
  {
    providers: [provideRouter(routes),provideHttpClient(),
      {
        provide: "SocialAuthServiceConfig",
        useValue: {
          autoLogin: false,
          providers: [
            {
              id: GoogleLoginProvider.PROVIDER_ID,
              provider: new GoogleLoginProvider(
                '537044861560-3oen5352r9qt5bvq43mb0oorsofklrkr.apps.googleusercontent.com'
              )
            },
          ],
          onError: (error) => {
            console.error(error);
          }
        } as SocialAuthServiceConfig,
      },
    ],
    
  })
  .catch((err) => console.error(err));
