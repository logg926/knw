import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { FilePondModule, registerPlugin } from 'ngx-filepond';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
// import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import { ColorPickerModule } from 'ngx-color-picker';
// import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

// import FilePondPluginImageResize from 'filepond-plugin-image-resize';
registerPlugin(FilePondPluginFileValidateType);

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }]),
    FilePondModule, // add filepond module here
    // ColorChromeModule, // added to imports
    // ColorCircleModule

    ColorPickerModule,
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
