import { css } from "emotion";
import { CssUtils } from "../utils";
import { BehaviorSubject } from "rxjs";
import {
  Component,
  OnInit,
  Input,
  Output,
  HostBinding,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "dxc-heading",
  templateUrl: "./dxc-heading.component.html",
  providers: [CssUtils],
})
export class DxcHeadingComponent {
  @Input() theme: string;
  @Input() level: number;
  @Input() text: string;
  @Input() weight: string;
  @Input() margin: string;

  @HostBinding("class") className;
  @HostBinding("class.light") isLight: boolean = true;
  @HostBinding("class.dark") isDark: boolean = false;

  defaultInputs = new BehaviorSubject<any>({
    theme: "light",
    level: 1,
    text: null,
    weight: null,
    margin: null,
  });

  constructor(private utils: CssUtils) {}

  ngOnInit() {
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
    if (this.theme === "dark") {
      this.isLight = false;
      this.isDark = true;
    } else {
      this.isLight = true;
      this.isDark = false;
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.theme === "dark") {
      this.isLight = false;
      this.isDark = true;
    } else {
      this.isLight = true;
      this.isDark = false;
    }
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});

    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    console.log(this.defaultInputs.getValue().margin);
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  getDynamicStyle(inputs) {
    return css`
      .container {
        ${this.utils.getMargins(inputs.margin)}
      }

      font-family: "Open Sans", sans-serif;
      color: ${inputs.theme === "light"
        ? "var(--lightThemeHeading, #000000DE)"
        : "var(--darkThemeHeading, #FFFFFF)"};

      h1 {
        font-size: 60px;
        line-height: 82px;
        font-weight: ${inputs.weight === "light" || inputs.weight == null
          ? 200
          : inputs.weight === "normal"
          ? 400
          : 600};
        letter-spacing: -0.53px;
      }

      h2,
      h3,
      h4,
      h5 {
        font-weight: ${inputs.weight === "normal" || inputs.weight == null
          ? 400
          : inputs.weight === "light"
          ? 200
          : 600};
      }

      h2 {
        font-size: 48px;
        line-height: 65px;
        letter-spacing: 0px;
      }

      h3 {
        font-size: 34px;
        line-height: 46px;
        letter-spacing: 0.24px;
      }

      h4 {
        font-size: 24px;
        line-height: 33px;
        letter-spacing: 0px;
      }

      h5 {
        font-size: 20px;
        line-height: 27px;
        letter-spacing: 0.26px;
      }
    `;
  }
}
