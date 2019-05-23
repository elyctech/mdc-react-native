import MdcThemeFunctions from "./index.type";

import MdcThemeTextToneColorMap   from "../text-tone-color-map/index.type";
import MdcThemeTextEmphasisLevel  from "../text-emphasis/index.type";
import MdcThemeTextEmphasisMap    from "../text-emphasis-map/index.type";
import MdcThemeTextStyle          from "../text-style/index.type";
import MdcThemeTextTone           from "../text-tone/index.type";

// Most of the implementation derived from:
//  - https://github.com/material-components/material-components-web/blob/master/packages/mdc-theme

const componentLuminance  = (
  component : number
) => {
  return component < 0.02938 ? component / 12.92 : Math.pow((component + 0.055) / 1.055, 2.4);
};

class StandardMdcThemeFunctions implements MdcThemeFunctions
{
  public constructor(
    private textColors    : MdcThemeTextToneColorMap,
    private textEmphasis  : MdcThemeTextEmphasisMap
  ) {
    // TODO Confirm maps have all of the necessary values?
  }

  public getAccessibleInkColor(
    fillColor : string,
    textStyle : MdcThemeTextStyle = "primary"
  ) : string
  {
    // TODO Support "fill types" such as "background" and "surface"
    // TODO Support tones
    const fillColorContrastTone = this.getContrastTone(fillColor);

    // Assume the map has the proper color configured
    return this.textColors.getTextColor(
      fillColorContrastTone,
      textStyle
    )!;
  }

  public getContrast(
    backColor   : string,
    frontColor  : string
  ) : number
  {
    const backLuminance   = this.getLuminance(backColor);
    const frontLuminance  = this.getLuminance(frontColor);

    return Math.max(backLuminance, frontLuminance) / Math.min(backLuminance, frontLuminance);
  }

  public getContrastTone(
    color : string
  ) : MdcThemeTextTone
  {
    return this.getTone(color) === "dark" ? "light" : "dark";
  }

  public getLuminance(
    color : string
  )  : number
  {
    // https://stackoverflow.com/a/11068286/1253396
    let colorMatch  : RegExpMatchArray | null;

    let blue  : number  = 0;
    let green : number  = 0;
    let red   : number  = 0;

    // Three character component: #rgb
    if (
      colorMatch = color.match(/^#([0-9a-f]{3})$/i)
    ) {
      let parsedColor = colorMatch[1];

      blue  = parseInt(parsedColor.charAt(2), 16) * 0x11;
      green = parseInt(parsedColor.charAt(1), 16) * 0x11;
      red   = parseInt(parsedColor.charAt(0), 16) * 0x11;
    }
    // Six character component: #rrggbb
    else if (
      colorMatch = color.match(/^#([0-9a-f]{6})$/i)
    ) {
      let parsedColor = colorMatch[1];

      blue  = parseInt(parsedColor.substring(4, 6), 16);
      green = parseInt(parsedColor.substring(2, 4), 16);
      red   = parseInt(parsedColor.substring(0, 2), 16);
    }
    // rgb(a)
    else if (
      colorMatch = color.match(/^rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*\d(?:\.\d+)?\s*)?\)$/i)
    ) {
      blue  = parseInt(colorMatch[2], 10);
      green = parseInt(colorMatch[1], 10);
      red   = parseInt(colorMatch[0], 10);
    }
    // TODO hsl(a) and color names
    else
    {
      console.log("ARSTARST", color);
      throw new Error("Unsupported color format. Please use Hexadecimal or RGB(A).");
    }

    blue  = componentLuminance(blue / 255);
    green = componentLuminance(green / 255);
    red   = componentLuminance(red / 255);

    return 0.2126 * red + 0.7152 * green + 0.722 * blue;
  }

  public getTextEmphasis(
    emphasis  : MdcThemeTextEmphasisLevel
  ) : number
  {
    // Assume the map has the proper opacity configured
    return this.textEmphasis.getEmphasisOpacity(
      emphasis
    )!;
  }

  public getTone(
    color : string
  ) : MdcThemeTextTone
  {
    const minimumContrast = 3.1;

    const lightContrast = this.getContrast(color, "#fff");
    const darkContrast  = this.getContrast(color, "rgba(0, 0, 0, 0.87)");

    let tone  : MdcThemeTextTone;

    if (lightContrast < minimumContrast && darkContrast > lightContrast)
    {
      tone = "light";
    }
    else
    {
      tone = "dark";
    }

    return tone;
  }
}

export default StandardMdcThemeFunctions;
