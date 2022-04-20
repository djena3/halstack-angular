import { Component, Inject, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef, AfterViewInit, HostListener, HostBinding, ChangeDetectorRef, OnDestroy, SimpleChanges, OnChanges } from '@angular/core';
import { ComplexThemeBindingStrategy } from '../theme/complexThemeBindingStrategy';
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";
import { IThemeInfo } from '../models/startup/configuration.model';

@Component({
  selector: 'dxc-theme-palette',
  templateUrl: './dxc-theme-palette.component.html',
  styleUrls: ['./dxc-theme-palette.component.scss'],
  providers: [CssUtils, ComplexThemeBindingStrategy]
})

export class DxcThemePaletteComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {
  @Input('isThemeOpen') isThemeOpen: boolean = false;

  //@Input('themeColors') themeColors: { 'color': { 'primary': string, 'effect': string }, active: boolean }[] = null;
  //@Input('selectedThemeColor') selectedThemeColor: { [key: string]: any } = {};
  //@Input('themeBackgrounds') themeBackgrounds: { 'id': string, 'title': string, 'background': string, 'active': boolean }[] = null;
  //@Input('isDarkMode') isDarkMode: boolean = false;
  //@Input('enableTransparency') enableTransparency: boolean = false;
  @Input('themeInfo') themeInfo: IThemeInfo = null;

  @Input('enablePopupMode') enablePopupMode: boolean = true;
  @Input('tabIndexValue') tabIndexValue: number = 0;
  @Input('showThemeToggle') showThemeToggle: boolean = true;
  @Input('label') label: string = '';
  @Input('labelDefault') labelDefault: string = '';
  @Input('labelCustom') labelCustom: string = '';
  @Input('backgroundLabel') backgroundLabel: string = '';
  @Input('switchLabel') switchLabel: string = '';
  @Input('colorLabel') colorLabel: string = '';
  @Input('backgroundSwitchLabel') backgroundSwitchLabel: string = '';
  @Input('themePaletteLabel') themePaletteLabel: string = '';
  @Input('closeLabel') closeLabel: string = '';
  @Input('colorShades') colorShades: Array<number> = [];
  @Input() border: boolean = false;
  @Input() public disabled: boolean = false;

  // isCustomMode: boolean = false;
  colorIndex: number = 0;
  @Output() themeChanged: EventEmitter<{ 'themeInfo': IThemeInfo, 'shades': any[] }> = new EventEmitter<{ 'themeInfo': IThemeInfo, 'shades': any[] }>();
  @Output() themeOpenChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() customThemeSelected: EventEmitter<boolean> = new EventEmitter<boolean>();
 // @Input() isCustomThemeSelected:boolean = false;
  // @Output() transparencyModeChanged: EventEmitter<any> = new EventEmitter<any>();
  // @Output() backgroundChange: EventEmitter<any> = new EventEmitter<any>();
  // @Output() themeColorChanged: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('dialogstart', { read: ElementRef, static: false }) dialogstart: ElementRef;
  @ViewChild('returntoend', { read: ElementRef, static: false }) returntoend: ElementRef;
  @ViewChild('dialogend', { read: ElementRef, static: false }) dialogend: ElementRef;

  @HostBinding("class") className;

  @HostListener('keydown.escape')
  escape() {
    if (this.enablePopupMode)
      this.closeThemePalette();
  }
  isCustomThemeSelected: boolean = false;
  defaultInputs = new BehaviorSubject<any>({
    value: null,
    checked: false,
    disabled: false,
    required: false,
    label: null,
    name: null,
    id: null,
    margin: null,
    size: "fitContent",
    tabIndexValue: 0,
    border: false
  });

  sizes = {
    small: "42px",
    medium: "240px",
    large: "480px",
    fillParent: "100%",
  };

  constructor(private utils: CssUtils, private ref: ChangeDetectorRef, private complexThemeBindingStrategy: ComplexThemeBindingStrategy) { }

  ngOnInit(): void {
    // let selectedThemeColor = this.themeColors.filter((colors) => { return colors.active == true; });
    // this.selectedThemeColor = selectedThemeColor.length > 0 ? selectedThemeColor[0].color : '';
    this.setCustomTheme(this.themeInfo);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
    if (JSON.stringify(changes.themeInfo?.currentValue) != JSON.stringify(changes.themeInfo?.previousValue)) {
      this.setCustomTheme(changes.themeInfo?.currentValue);
    }
  }

  private setCustomTheme(themeInfo: IThemeInfo) {
    let customColorIndex = themeInfo.themeColors.findIndex(colorsObj => colorsObj?.color?.custom == true);
    let selectedColorIndex = themeInfo.themeColors.findIndex(colorsObj => colorsObj.active == true);
    if (customColorIndex == selectedColorIndex && customColorIndex != -1) {
      this.isCustomThemeSelected = true;
    } else {
      this.colorIndex = selectedColorIndex;
    }
  }

  ngOnDestroy(): void {
  }

  ngAfterViewInit(): void {
    if (this.enablePopupMode) {
      setTimeout(() => {
        this.dialogstart.nativeElement.focus();
      }, 1);
    }
  }

  closeThemePalette() {
    this.themeOpenChanged.emit(!this.isThemeOpen);
  }

  themeChange(event) {
    this.themeInfo.isDarkMode = event;
    this.emitEvent();
  }

  transparencyChange(event) {
    this.themeInfo.isTransparent = event;
    this.emitEvent();
  }

  changeThemeColor = (index) => {
    this.themeInfo.themeColors.forEach(color => color.active = false);
    let customColorIndex = this.themeInfo.themeColors.findIndex(colorsObj => colorsObj?.color?.custom == true);
    this.themeInfo.themeColors[index].active = true;
    this.colorIndex = customColorIndex != index ? index : this.colorIndex;
    this.emitEvent();
  }

  changeBackground = (index) => {
    this.themeInfo.backgrounds.forEach(color => color.active = false);
    this.themeInfo.backgrounds[index].active = true;
    this.emitEvent();
  }

  startKeyPress($event: any) {
    if (this.enablePopupMode) {
      if ($event.shiftKey && $event.keyCode == 9 && $event.srcElement == this.dialogstart.nativeElement) {
        if (this.returntoend.nativeElement.focus) {
          this.returntoend.nativeElement.tabindex = "0";
          this.returntoend.nativeElement.focus();
        }
      }
    }
  }

  customColor(event) {
    let selectedColorIndex = this.themeInfo.themeColors.findIndex(colorsObj => colorsObj?.color?.custom != true && colorsObj.active == true);
    this.colorIndex = event != true && selectedColorIndex > 0 ? selectedColorIndex : this.colorIndex;
    this.isCustomThemeSelected = event;
    this.themeInfo.themeColors.forEach((colorObj, index) => {
      colorObj.active = this.isCustomThemeSelected == true && colorObj.color?.custom == true ? true : this.isCustomThemeSelected != true && index == this.colorIndex ? true : false;
    });
    this.emitEvent();
  }

  onPrimaryColor(index: any, event: any): void {
    this.themeInfo.themeColors[index].color.primary = event?.color;
    this.themeInfo.themeColors[index].color.effect = this.hexToRgb(this.complexThemeBindingStrategy.setOpacity(event?.color, 0.4), 0.4);
    this.emitEvent();
  }

  onEffectColor(index: any, event: any): void {
    this.themeInfo.themeColors[index].color.effect = event?.color;
    this.emitEvent();
  }

  

  endFocus($event: any) {
    if (this.enablePopupMode) {
      if (this.dialogstart.nativeElement.focus)
        this.dialogstart.nativeElement.focus();
    }
  }

  returnFocusOut($event: any) {
    if (this.enablePopupMode) {
      this.returntoend.nativeElement.tabindex = "-1";
    }
  }

  calculateWidth(inputs) {
    if (inputs.size === "fillParent") {
      return this.utils.calculateWidth(this.sizes, inputs);
    }
    return css`
      width: ${this.sizes[inputs.size]};
    `;
  }

  getDynamicStyle(inputs) {
    return css`
    ${this.border == true ? `div.theme-palette-border { border: 1px solid var(--theme-palette-borderColor);}` : ``}
    `;
  }

  emitEvent() {
    let colorShadesList = [];
    let selectedThemeColor = this.themeInfo.themeColors.filter(color => color.active == true);
    if (selectedThemeColor.length > 0) {
      this.colorShades.forEach((shadesPoint) => {
        colorShadesList.push(this.complexThemeBindingStrategy.setOpacity(selectedThemeColor[0].color?.primary, shadesPoint));
      });
    }
    this.themeChanged.emit({ 'themeInfo': this.themeInfo, 'shades': colorShadesList });
  }

  private hexToRgb = (hex, opacity) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex.substring(0, 7));
    if(result){
    var r= parseInt(result[1], 16);
    var g= parseInt(result[2], 16);
    var b= parseInt(result[3], 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }
    return '#fffff';
    }
}
