import MdcThemeTextEmphasisMapFactory  from "./factory.type";

import MdcThemeTextEmphasisMap         from "./index.type";
import StandardMdcThemeTextEmphasisMap from "./index.class";

import MdcThemeTextEmphasisLevel  from "../text-emphasis/index.type";

class StandardMdcThemeTextEmphasisMapFactory implements MdcThemeTextEmphasisMapFactory
{
  public construct(
    emphasisMap : Map<MdcThemeTextEmphasisLevel, number>
  ) : MdcThemeTextEmphasisMap
  {
    return new StandardMdcThemeTextEmphasisMap(
      emphasisMap
    );
  }
}

export default StandardMdcThemeTextEmphasisMapFactory;
