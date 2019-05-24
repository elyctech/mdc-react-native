import MdcElevationStyle from "../style/index.type";

interface MdcElevationStylizer
{
  getElevationStyle(
    elevation : number
  ) : MdcElevationStyle;
}

export default MdcElevationStylizer;
