import MdcThemeTextEmphasisMap from "./index.type";

import MdcThemeTextEmphasisLevel from "../text-emphasis/index.type";

class StandardMdcThemeTextEmphasisMap implements MdcThemeTextEmphasisMap
{
  public constructor(
    private emphasisMap : Map<MdcThemeTextEmphasisLevel, number>
  ) {

  }

  public getEmphasisOpacity(
    emphasisLevel : MdcThemeTextEmphasisLevel
  ) : number | undefined
  {
    return this.emphasisMap.get(emphasisLevel);
  }
}

export default StandardMdcThemeTextEmphasisMap;
