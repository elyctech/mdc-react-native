import mdcThemeServiceFactory from "./factory";

import mdcThemeFunctionsFactory         from "../functions/factory";
import mdcThemeStylizerFactory          from "../stylizer/factory";
import mdcThemeTextEmphasisMapFactory   from "../text-emphasis-map/factory";
import mdcThemeTextToneColorMapFactory  from "../text-tone-color-map/factory";

const mdcThemeService = mdcThemeServiceFactory.construct(
  mdcThemeFunctionsFactory,
  mdcThemeStylizerFactory,
  mdcThemeTextEmphasisMapFactory,
  mdcThemeTextToneColorMapFactory
);

export default mdcThemeService;
