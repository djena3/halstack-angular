const globalTokens = {
  black: "#000000",
  lightBlack: "#212121",
  yellow: "#FFED00",
  lightGrey: "#D9D9D9",
  darkRed: "#D0011B",
  lightRed: "#FF6161",
  lightBlue: "#CEE0F5",
  lightYellow: "#FCF2BD",
  lightPink: "#F9CFCF",
  lightGreen: "#DBF1C4",
  blue: "#005FCC",
  lighterGrey: "#F8F8F8",
  red: "#D0011B",
  violet: "#8800F6",
  darkBlue: "#006BF6",
  inherit: "inherit",
  transparent: "transparent",
  purple: "#6f2c91",
  mediumPurple: "#ead8f3",
  lightPurple: "#f5ebf9",
  lighterPurple: "#d0bddb",
  white: "#ffffff",
  darkGrey: "#666666",
  mediumGrey: "#bfbfbf",
  mediumWhite: "#f9f9f9",
  mediumBlue: "#0067b3",
  softBlue: "#b1cee6",
  darkWhite: "#eeeeee",
  lighterBlack: "#b1b1b1",
  mediumBlack: "#676767",
  mediumGreyBlack: "#dbdbdb",
  lightWhite: "#f2f2f2",
  softGrey: "#cecece",
};

export const componentTokens = {
  //ACCORDION
  "--accordion-arrowColor": globalTokens.purple,
  "--accordion-fontColor": globalTokens.darkGrey,
  "--accordion-backgroundColor": globalTokens.white,
  "--accordion-hoverBackgroundColor": globalTokens.lightPurple,
  "--accordion-disabledFontColor": globalTokens.mediumGrey,
  "--accordion-focusOutline": globalTokens.purple,

  //TABS
  "--tabs-selectedFontColor": globalTokens.purple,
  "--tabs-backgroundColor": globalTokens.white,
  "--tabs-fontColor": globalTokens.darkGrey,
  "--tabs-disabledFontColor": globalTokens.mediumGrey,
  "--tabs-focusColor": globalTokens.purple,
  "--tabs-selectedUnderlinedColor": globalTokens.purple,
  "--tabs-divider": globalTokens.mediumGrey,
  "--tabs-selectedIconColor": globalTokens.purple,
  "--tabs-hoverBackgroundColor": globalTokens.lightPurple,
  "--tabs-pressedBackgroundColor": globalTokens.mediumPurple,

  //------------Sin Hacer---------------------

  //ALERT
  "--alert-infoColor": globalTokens.lightBlue,
  "--alert-confirmColor": globalTokens.lightGreen,
  "--alert-warningColor": globalTokens.lightYellow,
  "--alert-errorColor": globalTokens.lightPink,
  "--alert-overlayColor": globalTokens.black,
  "--alert-focusColor": globalTokens.blue, //ponerlo en el componente

  //BOX
  "--box-backgroundColor": globalTokens.white,

  //BUTTON
  //Themable
  "--button-color": globalTokens.purple,
  "--button-hoverColor": globalTokens.black,
  "--button-primaryFontColor": globalTokens.white,
  "--button-primaryHoverFontColor": globalTokens.white,
  "--button-secondaryFontColor": globalTokens.black,
  "--button-secondaryHoverFontColor": globalTokens.black,
  "--button-textFontColor": globalTokens.purple,
  "--button-textHoverFontColor": globalTokens.white,
  //No Themable
  "--button-primaryDisabledOpacity": globalTokens.lighterPurple,
  "--button-primaryActiveOpacity": globalTokens.mediumPurple,
  "--button-primaryActiveHoverOpacity": globalTokens.darkGrey,
  "--button-secondaryDisabledOpacity": 0.34,
  "--button-secondaryActiveOpacity": globalTokens.lightPurple,
  "--button-secondaryActiveHoverOpacity": globalTokens.lightGrey,
  "--button-secondaryHoverOpacity": globalTokens.lightGrey,
  "--button-secondaryBackgroundColor": globalTokens.transparent,
  "--button-textDisabledOpacity": 0.34,
  "--button-textActiveOpacity": globalTokens.mediumPurple,
  "--button-textActiveHoverOpacity": globalTokens.darkGrey,
  "--button-textBackgroundColor": globalTokens.transparent,
  "--button-focusColor": globalTokens.blue,

  //CARD
  "--card-backgroundColor": globalTokens.white,

  //CHECKBOX
  "--checkbox-borderColor": globalTokens.mediumBlue,
  "--checkbox-checkColor": globalTokens.white,
  "--checkbox-backgroundColorChecked": globalTokens.mediumBlue,
  "--checkbox-fontColor": globalTokens.inherit,
  "--checkbox-focusColor": globalTokens.blue,
  "--checkbox-disabledBackgroundColorChecked": globalTokens.softBlue,
  "--checkbox-disabledBorderColor": globalTokens.softBlue,
  "--checkbox-disabledCheckColor": globalTokens.white,
  "--checkbox-disabledFontColor": globalTokens.lighterBlack,

  //CHIP
  "--chip-backgroundColor": globalTokens.darkWhite,
  "--chip-outlinedColor": "",
  "--chip-fontColor": globalTokens.black,
  "--chip-focusColor": globalTokens.blue,
  "--chip-disabledBackgroundColor": globalTokens.mediumWhite,
  "--chip-disabledFontColor": globalTokens.lighterBlack,

  //DATE
  //Themable
  "--date-pickerSelectedDateBackgroundColor": globalTokens.purple,
  "--date-pickerSelectedDateColor": globalTokens.white,
  //No Themable
  "--date-pickerBackgroundColor": globalTokens.white,
  "--date-pickerTextColor": globalTokens.black,
  "--date-pickerActualDate": globalTokens.lightGrey,
  "--date-pickerHoverDateBackgroundColor": globalTokens.mediumPurple,
  "--date-pickerHoverDateTextColor": globalTokens.black,
  "--date-invalidColor": globalTokens.darkRed,
  "--date-focusColor": globalTokens.blue,

  //DIALOG
  "--dialog-overlayColor": globalTokens.black,
  "--dialog-separator": globalTokens.lightGrey,
  "--dialog-backgroundColor": globalTokens.white,
  "--dialog-scrollBarThumbColor": globalTokens.darkGrey,
  "--dialog-scrollBarTrackColor": globalTokens.lightGrey,

  //DROPDOWN
  "--dropdown-backgroundColor": globalTokens.white,
  "--dropdown-fontColor": globalTokens.black,
  "--dropdown-dropdownBackgroundColor": globalTokens.white,
  "--dropdown-dropdownFontColor": globalTokens.black,
  "--dropdown-hoverBackgroundOption": globalTokens.white,
  "--dropdown-hoverBackgroundColor": globalTokens.white,
  "--dropdown-scrollBarThumbColor": globalTokens.darkGrey,
  "--dropdown-scrollBarTrackColor": globalTokens.lightGrey,
  "--dropdown-focusColor": globalTokens.blue, //añadir al componente

  //FOOTER
  "--footer-backgroundColor": globalTokens.black,
  "--footer-fontColor": globalTokens.white,
  "--footer-lineColor": globalTokens.mediumBlue,

  //HEADER
  "--header-backgroundColor": globalTokens.white,
  "--header-underlinedColor": globalTokens.black,
  "--header-fontColor": globalTokens.black,
  "--header-backgroundColorMenu": globalTokens.white,
  "--header-fontColorMenu": globalTokens.black,
  "--header-hamburguerColor": globalTokens.black,
  "--header-hoverHamburguerColor": globalTokens.mediumGrey,
  "--header-overlayColor": globalTokens.black,
  "--header-focusColor": globalTokens.blue,

  //HEADING
  "--heading-fontColor": globalTokens.inherit,

  //LINK
  "--link-fontColor": globalTokens.blue,
  "--link-visitedFontColor": globalTokens.purple,
  "--link-disabledColor": globalTokens.lightGrey,
  "--link-hoverFontColor": globalTokens.darkBlue,
  "--link-underlinedBackgroundColor": globalTokens.blue,
  "--link-disabledUnderlinedBackgroundColor": globalTokens.lightGrey,
  "--link-visitedUnderlinedBackgroundColor": globalTokens.purple,

  //PAGINATOR
  "--paginator-paginatorBackgroundColor": globalTokens.darkWhite,
  "--paginator-paginatorFontColor": globalTokens.black,

  //PROGRESSBAR
  "--progressbar-trackLine": globalTokens.purple,
  "--progressbar-totalLine": globalTokens.lightGrey,
  "--progressbar-overlayColor": globalTokens.black,
  "--progressbar-fontColor": globalTokens.inherit,

  //RADIO
  "--radio-color": globalTokens.black,
  "--radio-disabledColor": globalTokens.mediumGrey,
  "--radio-fontColor": globalTokens.inherit,
  "--radio-disabledFontColor": globalTokens.mediumGrey,
  "--radio-focusColor": globalTokens.blue,

  //SELECT
  //Themable
  "--select-selectedOptionBackgroundColor": globalTokens.lightGrey,
  //No Themable
  "--select-color": globalTokens.black,
  "--select-invalidColor": globalTokens.darkRed,
  "--select-focusColor": globalTokens.blue,
  "--select-disabled": 0.34,
  "--select-scrollBarThumbColor": globalTokens.darkGrey,
  "--select-scrollBarTrackColor": globalTokens.lightGrey,
  "--select-hoverOptionBackgroundColor": globalTokens.lighterGrey,

  //SIDENAV
  "--sidenav-backgroundColor": globalTokens.lighterGrey,
  "--sidenav-arrowContainerColor": globalTokens.lightGrey,
  "--sidenav-arrowColor": globalTokens.black,

  //SLIDER
  "--slider-color": globalTokens.blue,
  "--slider-totalLine": globalTokens.lightBlue,
  "--slider-disabledThumbBackgroundColor": globalTokens.lightBlue,
  "--slider-disabledDotsBackgroundColor": globalTokens.lightBlue,
  "--slider-disabledTrackLine": globalTokens.lightBlue,
  "--slider-disabledtotalLine": globalTokens.lightBlue,
  "--slider-focusColor": globalTokens.blue,

  //SPINNER
  "--spinner-trackCircleColor": globalTokens.purple,
  "--spinner-totalCircleColor": globalTokens.white,
  "--spinner-overlayColor": globalTokens.black,
  "--spinner-fontColor": globalTokens.inherit,

  //SWITCH
  "--switch-checkedTrackBackgroundColor": globalTokens.darkGrey,
  "--switch-checkedThumbBackgroundColor": globalTokens.white,
  "--switch-uncheckedThumbBackgroundColor": globalTokens.white,
  "--switch-uncheckedTrackBackgroundColor": globalTokens.lightGrey,
  "--switch-requiredColor": globalTokens.darkRed,
  "--switch-focusColor": globalTokens.blue,
  "--switch-fontColor": globalTokens.black,
  "--switch-disabledCheckedTrackBackgroundColor": globalTokens.softGrey,
  "--switch-disabledUncheckedTrackBackgroundColor": globalTokens.lightWhite,
  "--switch-disabledFontColor":globalTokens.lighterBlack,

  //TABLE
  "--table-headerBackgroundColor": globalTokens.purple,
  "--table-headerFontColor": globalTokens.white,
  "--table-separatorColor": globalTokens.lightGrey,
  "--table-bodyBackgroundColor": globalTokens.white,
  "--table-bodyFontColor": globalTokens.black,

  //TAG
  "--tag-backgroundColor": globalTokens.white,

  //TEXT INPUT
  "--inputText-selectedOptionBackgroundColor": globalTokens.lightGrey,
  "--inputText-placeholderColor": globalTokens.lightGrey,
  "--inputText-invalidColor": globalTokens.darkRed,
  "--inputText-focusColor": globalTokens.blue,
  "--inputText-fontColor": globalTokens.black,
  "--inputText-hoverOptionBackgroundColor": globalTokens.lighterGrey,
  "--inputText-hoverOptionColor": globalTokens.black,
  "--inputText-scrollBarThumbColor": globalTokens.darkGrey,
  "--inputText-scrollBarTrackColor": globalTokens.lightGrey,
  "--inputText-disabledFontColor": globalTokens.lighterBlack,

  //TEXTAREA
  "--textarea-fontColor": globalTokens.black,
  "--textarea-placeholderColor": globalTokens.lightGrey,
  "--textarea-disabledFontColor": globalTokens.lighterBlack,
  "--textarea-invalidColor": globalTokens.darkRed,
  "--textarea-scrollBarThumbColor": globalTokens.darkGrey,
  "--textarea-scrollBarTrackColor": globalTokens.lightGrey,

  //TOGGLE GROUP
  "--toggle-unselectedBackgroundColor": globalTokens.lightGrey,
  "--toggle-unselectedHoverBackgroundColor": globalTokens.darkWhite,
  "--toggle-unselectedFontColor": globalTokens.black,
  "--toggle-unselectedHoverFontColor": globalTokens.black,
  "--toggle-selectedBackgroundColor": globalTokens.purple,
  "--toggle-selectedHoverBackgroundColor": globalTokens.black,
  "--toggle-selectedFontColor": globalTokens.white,
  "--toggle-selectedHoverFontColor": globalTokens.white,
  "--toggle-disabledSelectedBackgroundColor": globalTokens.mediumPurple,
  "--toggle-disabledSelectedFontColor": globalTokens.white,
  "--toggle-disabledUnselectedBackgroundColor": globalTokens.lighterGrey,
  "--toggle-disabledUnselectedFontColor": globalTokens.lightGrey,

  //WIZARD
  //Themable
  "--wizard-selectedBackgroundColor": globalTokens.purple,
  "--wizard-selectedFont": globalTokens.white,
  // borderColor: globalTokens.black,
  //No Themable
  "--wizard-fontColor": globalTokens.inherit,
  "--wizard-lineColor": globalTokens.lightGrey,
  "--wizard-disabledBackground": globalTokens.lightGrey,
  "--wizard-disabledFont": globalTokens.darkGrey,
  "--wizard-focusColor": globalTokens.blue,
};

export const componentIcons = {
  footer: {
    logo: "assets/dxc_logo_wht.png",
  },
  header: {
    logo: "assets/dxc_logo_blk_rgb.svg",
    logoResponsive: "assets/dxc_logo_blk_rgb.svg",
  },
};
