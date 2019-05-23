import MdcThemeServiceFactory  from "./factory.type";

import MdcThemeService         from "./index.type";
import StandardMdcThemeService from "./index.class";

import MdcThemeFunctionsFactory         from "../functions/factory.type";
import MdcThemeStylizerFactory          from "../stylizer/factory.type";
import MdcThemeTextEmphasisMapFactory   from "../text-emphasis-map/factory.type";
import MdcThemeTextToneColorMapFactory  from "../text-tone-color-map/factory.type";

class StandardMdcThemeServiceFactory implements MdcThemeServiceFactory
{
  public construct(
    themeFunctionsFactory         : MdcThemeFunctionsFactory,
    themeStylizerFactory          : MdcThemeStylizerFactory,
    themeTextEmphasisMapFactory   : MdcThemeTextEmphasisMapFactory,
    themeTextToneColorMapFactory  : MdcThemeTextToneColorMapFactory
  ) : MdcThemeService
  {
    return new StandardMdcThemeService(
      themeFunctionsFactory,
      themeStylizerFactory,
      themeTextEmphasisMapFactory,
      themeTextToneColorMapFactory
    );
  }
}

export default StandardMdcThemeServiceFactory;
