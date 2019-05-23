import MdcThemeService from "./index.type";

import MdcThemeFunctionsFactory         from "../functions/factory.type";
import MdcThemeStylizerFactory          from "../stylizer/factory.type";
import MdcThemeTextEmphasisMapFactory   from "../text-emphasis-map/factory.type";
import MdcThemeTextToneColorMapFactory  from "../text-tone-color-map/factory.type";

interface MdcThemeServiceFactory
{
  construct(
    themeFunctionsFactory         : MdcThemeFunctionsFactory,
    themeStylizerFactory          : MdcThemeStylizerFactory,
    themeTextEmphasisMapFactory   : MdcThemeTextEmphasisMapFactory,
    themeTextToneColorMapFactory  : MdcThemeTextToneColorMapFactory
  ) : MdcThemeService;
}

export default MdcThemeServiceFactory;
