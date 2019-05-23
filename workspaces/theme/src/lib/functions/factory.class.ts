import MdcThemeFunctionsFactory  from "./factory.type";

import MdcThemeFunctions         from "./index.type";
import StandardMdcThemeFunctions from "./index.class";

import MdcThemeTextToneColorMap from "../text-tone-color-map/index.type";
import MdcThemeTextEmphasisMap  from "../text-emphasis-map/index.type";

class StandardMdcThemeFunctionsFactory implements MdcThemeFunctionsFactory
{
  public construct(
    textColors    : MdcThemeTextToneColorMap,
    textEmphasis  : MdcThemeTextEmphasisMap
  ) : MdcThemeFunctions
  {
    return new StandardMdcThemeFunctions(
      textColors,
      textEmphasis
    );
  }
}

export default StandardMdcThemeFunctionsFactory;
