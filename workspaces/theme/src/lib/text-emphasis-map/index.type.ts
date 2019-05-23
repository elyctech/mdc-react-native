import MdcThemeTextEmphasisLevel from "../text-emphasis/index.type";

interface MdcThemeTextEmphasisMap
{
  getEmphasisOpacity(
    emphasisLevel : MdcThemeTextEmphasisLevel
  ) : number | undefined;
}

export default MdcThemeTextEmphasisMap;
