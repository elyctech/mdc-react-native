import MdcElevationStylizerFactory  from "./factory.type";

import MdcElevationStylizer         from "./index.type";
import StandardMdcElevationStylizer from "./index.class";

import MdcElevationStyleFactory from "../style/factory.type";

class StandardMdcElevationStylizerFactory implements MdcElevationStylizerFactory
{
  public construct(
    elevationStyleFactory : MdcElevationStyleFactory
  ) : MdcElevationStylizer
  {
    return new StandardMdcElevationStylizer(
      elevationStyleFactory
    );
  }
}

export default StandardMdcElevationStylizerFactory;
