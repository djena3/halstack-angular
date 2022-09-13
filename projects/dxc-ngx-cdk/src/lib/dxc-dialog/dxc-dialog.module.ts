import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTooltipModule } from '@angular/material/tooltip';
import { DxcDialogComponent } from "./dxc-dialog.component";
import { AngularDraggableModule } from 'ngx-draggable-resize';
import { MatIconModule } from '@angular/material/icon';
import { DxcButtonModule } from './../dxc-button/dxc-button.module';

@NgModule({
  declarations: [DxcDialogComponent],
  imports: [CommonModule, MatTooltipModule,AngularDraggableModule,MatIconModule,DxcButtonModule],
  exports: [DxcDialogComponent],
})
export class DxcDialogModule {}
