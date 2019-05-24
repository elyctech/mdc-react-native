import MdcElevationStylizer from "./index.type";

import MdcElevationStyleFactory from "../style/factory.type";

interface MdcElevationStylizerFactory
{
  construct(
    elevationStyleFactory : MdcElevationStyleFactory
  ) : MdcElevationStylizer;
}

export default MdcElevationStylizerFactory;
