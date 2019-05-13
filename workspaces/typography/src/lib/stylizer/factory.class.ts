import MdcTypographStylizerFactory  from "./factory.type";

import MdcTypographStylizer         from "./index.type";
import StandardMdcTypographStylizer from "./index.class";

import MdcTypographyStyle from "../style/index.type";

class StandardMdcTypographStylizerFactory implements MdcTypographStylizerFactory
{
  public construct(
    body1Style      : MdcTypographyStyle,
    body2Style      : MdcTypographyStyle,
    buttonTextStyle : MdcTypographyStyle,
    captionStyle    : MdcTypographyStyle,
    headline1Style  : MdcTypographyStyle,
    headline2Style  : MdcTypographyStyle,
    headline3Style  : MdcTypographyStyle,
    headline4Style  : MdcTypographyStyle,
    headline5Style  : MdcTypographyStyle,
    headline6Style  : MdcTypographyStyle,
    overlineStyle   : MdcTypographyStyle,
    subtitle1Style  : MdcTypographyStyle,
    subtitle2Style  : MdcTypographyStyle
  ) : MdcTypographStylizer
  {
    return new StandardMdcTypographStylizer(
      body1Style,
      body2Style,
      buttonTextStyle,
      captionStyle,
      headline1Style,
      headline2Style,
      headline3Style,
      headline4Style,
      headline5Style,
      headline6Style,
      overlineStyle,
      subtitle1Style,
      subtitle2Style
    );
  }
}

export default StandardMdcTypographStylizerFactory;
