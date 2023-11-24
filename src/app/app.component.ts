import { Component } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Capacitor } from '@capacitor/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(
    private platform: Platform
  ) {
    this.initializeApp();
  }

 
  initializeApp() {

    this.platform.ready().then(async () => {
      if (Capacitor.getPlatform() !== 'web') {
      }

     
      setTimeout(async () => {
        await SplashScreen.hide();
      }, 2000);
    });
  }
}
