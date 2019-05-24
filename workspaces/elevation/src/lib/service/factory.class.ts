import MdcElevationServiceFactory  from "./factory.type";

import MdcElevationService         from "./index.type";
import StandardMdcElevationService from "./index.class";

import MdcElevationStyleFactory     from "../style/factory.type";
import MdcElevationStylizerFactory  from "../stylizer/factory.type";

class StandardMdcElevationServiceFactory implements MdcElevationServiceFactory
{
  public construct(
    elevationStyleFactory     : MdcElevationStyleFactory,
    elevationStylizerFactory  : MdcElevationStylizerFactory
  ) : MdcElevationService
  {
    return new StandardMdcElevationService(
      elevationStyleFactory,
      elevationStylizerFactory
    );
  }
}

export default StandardMdcElevationServiceFactory;
