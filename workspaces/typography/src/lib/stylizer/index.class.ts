import MdcTypographyStylizer from "./index.type";

// import MdcTypographyFontWeightConfiguration from "../font-weight/configuration/index.type";
import MdcTypographyStyle                   from "../style/index.type";

class StandardMdcTypographyStylizer implements MdcTypographyStylizer
{
  public constructor(
    private body1Style      : MdcTypographyStyle,
    private body2Style      : MdcTypographyStyle,
    private buttonTextStyle : MdcTypographyStyle,
    private captionStyle    : MdcTypographyStyle,
    private headline1Style  : MdcTypographyStyle,
    private headline2Style  : MdcTypographyStyle,
    private headline3Style  : MdcTypographyStyle,
    private headline4Style  : MdcTypographyStyle,
    private headline5Style  : MdcTypographyStyle,
    private headline6Style  : MdcTypographyStyle,
    private overlineStyle   : MdcTypographyStyle,
    private subtitle1Style  : MdcTypographyStyle,
    private subtitle2Style  : MdcTypographyStyle
  ) {

  }

  public getBody1Style()  : MdcTypographyStyle
  {
    return this.body1Style
  }

  public getBody2Style()  : MdcTypographyStyle
  {
    return this.body2Style
  }

  public getButtonTextStyle() : MdcTypographyStyle
  {
    return this.buttonTextStyle
  }

  public getCaptionStyle()  : MdcTypographyStyle
  {
    return this.captionStyle
  }

  public getHeadline1Style()  : MdcTypographyStyle
  {
    return this.headline1Style;
  }

  public getHeadline2Style()  : MdcTypographyStyle
  {
    return this.headline2Style;
  }

  public getHeadline3Style()  : MdcTypographyStyle
  {
    return this.headline3Style
  }

  public getHeadline4Style()  : MdcTypographyStyle
  {
    return this.headline4Style
  }

  public getHeadline5Style()  : MdcTypographyStyle
  {
    return this.headline5Style
  }

  public getHeadline6Style()  : MdcTypographyStyle
  {
    return this.headline6Style
  }

  public getOverlineStyle()  : MdcTypographyStyle
  {
    return this.overlineStyle
  }

  public getSubtitle1Style()  : MdcTypographyStyle
  {
    return this.subtitle1Style
  }

  public getSubtitle2Style()  : MdcTypographyStyle
  {
    return this.subtitle2Style
  }
}

export default StandardMdcTypographyStylizer;
