//if standalone is true for appp component
// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';
// import { HeaderComponet } from './header/header.component';
// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));
// //bootstrapApplication(HeaderComponet,appConfig);

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.Module";

// if stand alone is false
platformBrowserDynamic().bootstrapModule(AppModule)