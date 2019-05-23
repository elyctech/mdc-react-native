import MdcThemeTextEmphasisMap from "./index.type";

import MdcThemeTextEmphasisLevel from "../text-emphasis/index.type";

interface MdcThemeTextEmphasisMapFactory
{
  construct(
    emphasisMap : Map<MdcThemeTextEmphasisLevel, number>
  ) : MdcThemeTextEmphasisMap;
}

export default MdcThemeTextEmphasisMapFactory;
