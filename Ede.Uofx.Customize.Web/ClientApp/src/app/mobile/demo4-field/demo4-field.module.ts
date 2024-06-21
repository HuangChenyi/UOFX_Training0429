import { BASIC_HTTP_HANDLER, BasicHttpHandler } from '@service/basic-http-handler';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UofxCameraPlugin, UofxGeolocationPlugin, UofxToastPlugin } from '@uofx/app-native';

import { BasicHttpClient } from '@service/basic-http-client';
import { CommonModule } from '@angular/common';
import { Demo4FieldComponent } from './demo4-field.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { UofxFormFieldBaseModule } from '@uofx/app-components/form';
import { UofxPluginApiService } from '@uofx/plugin/api';

const UOF_MODULES = [
  UofxFormFieldBaseModule,
];

const BASIC_SERVICES = [
  { provide: BASIC_HTTP_HANDLER, useClass: BasicHttpHandler },
  BasicHttpClient
];

const COMPONENTS = [
  Demo4FieldComponent
];

const UOF_PLUGINS = [
  UofxGeolocationPlugin,
  UofxToastPlugin,
  UofxCameraPlugin
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: Demo4FieldComponent, pathMatch: 'full' }
    ]),
    TranslateModule.forChild(),
    IonicModule,
    ...UOF_MODULES,
  ],
  providers: [UofxPluginApiService, ...UOF_PLUGINS,...BASIC_SERVICES],
  exports: [...COMPONENTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [...COMPONENTS]
})
export class Demo4AppFieldModule {
  static comp = {
    write: Demo4FieldComponent,
    view: Demo4FieldComponent
  }
}
