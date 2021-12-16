import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcCronEditorComponent } from './dxc-cron-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { DxcTimePickerComponent } from './dxc-time-picker/dxc-time-picker.component';
import { DxcSelectModule } from '../dxc-select/select-module';

@NgModule({
  imports: [
    CommonModule,
    DxcSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatListModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule
  ],
  exports: [DxcTimePickerComponent, DxcCronEditorComponent],
  declarations: [DxcTimePickerComponent, DxcCronEditorComponent]
})


export class DxcCronEditorModule { }


