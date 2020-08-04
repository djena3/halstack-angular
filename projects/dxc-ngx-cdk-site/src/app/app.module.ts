import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ThemeService, DXCHeaderModule,DXCFooterModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { ExampleService } from './service/example.service';
import { DesignGuidelinesPageComponent } from './pages/design-guidelines-page/design-guidelines-page.component';
import { AlertModule } from './pages/alert/alert.module';
import { AutocompleteModule } from './pages/autocomplete/autocomplete.module';
import { BoxModule } from './pages/box/box.module';
import { ButtonModule } from './pages/button/button.module';
import { CardModule } from './pages/card/card.module';
import { CheckboxModule } from './pages/checkbox/checkbox.module';
import { ChipModule } from './pages/chip/chip.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RadioModule } from './pages/radio/radio.module';
import { SelectModule } from './pages/select/select.module';
import { SpinnerModule } from './pages/spinner/spinner.module';
import { SwitchModule } from './pages/switch/switch.module';
import { OverviewPageModule } from './pages/overview-page/overview-page.module';
import { AccordionModule } from './pages/accordion/accordion.module';
import { DateModule } from './pages/date/date.module';
import { TextInputModule } from './pages/text-input/text-input.module';
import { SliderModule } from './pages/slider/slider.module';
import { FooterModule } from './pages/footer/footer.module';
import { DropdownModule } from './pages/dropdown/dropdown.module';
import { DialogModule } from './pages/dialog/dialog.module';
import { TableModule } from './pages/table/table.module';
import { TagModule } from './pages/tag/tag.module';
import { TabbedSectionInfoModule } from './pages/tabbed-section-info/tabbed-section-info.module';
import { ProgressbarModule } from './pages/progressbar/progressbar.module';
import { TabsModule } from './pages/tabs/tabs.module';
import { HeaderModule } from './pages/header/header.module';
import { UploadModule } from './pages/upload/upload.module';
import { PaginatorModule } from './pages/paginator/paginator.module';
import { ComponentsPageModule } from './pages/components-page/components-page.module';
import { ResultsetTableModule } from './pages/resultset-table/resultset-table.module';
import { WizardModule } from './pages/wizard/wizard.module';
import { SidenavModule } from './pages/sidenav/sidenav.module';
import { LinkModule } from './pages/link/link.module';
import { HeadingModule } from './pages/heading/heading.module';
import { ScullyLibModule } from '@scullyio/ng-lib-v8';
import { ComponentsSidenavModule } from './pages/components-sidenav/components-sidenav.module';

@NgModule({
  declarations: [
    AppComponent,
    DesignGuidelinesPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    OverviewPageModule,
    DXCHeaderModule,
    DXCFooterModule,
    AccordionModule,
    AlertModule,
    AutocompleteModule,
    BoxModule,
    ButtonModule,
    CardModule,
    CheckboxModule,
    ChipModule,
    DateModule,
    FooterModule,
    HeaderModule,
    RadioModule,
    SelectModule,
    SpinnerModule,
    SwitchModule,
    TextInputModule,
    DropdownModule,
    DialogModule,
    TabbedSectionInfoModule,
    TableModule,
    TagModule,
    PaginatorModule,
    ProgressbarModule,
    TabsModule,
    UploadModule,
    ComponentsPageModule,
    ComponentsSidenavModule,
    WizardModule,
    SidenavModule,
    ThemeModule,
    LinkModule,
    SliderModule,
    HeadingModule,
    ResultsetTableModule,
    ThemeModule,
    ScullyLibModule
  ],
  providers: [
    { provide: 'ThemeService', useClass: ThemeService },
    { provide: 'ExampleService', useClass: ExampleService }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
  ]
})
export class AppModule { }
