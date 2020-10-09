import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppComponent } from './app.component';
import { firebaseConfig } from '../environments/firebase-config';
import { HttpClientModule} from '@angular/common/http';
import { RepositoryData, ModelConnection} from './interfaces/repository';

export function RequestProvider(
  service: RepositoryData,
  options: ModelConnection
) {
  return new RequestService(service, options);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
