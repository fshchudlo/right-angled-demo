import './polyfills.browser';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { decorateModuleRef } from './environment';

if ('production' === ENV) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(decorateModuleRef)
  // tslint:disable-next-line:no-console
  .catch((err) => console.error(err));
