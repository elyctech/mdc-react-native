import MdcElevationService from "./index.type";

import MdcElevationStyleFactory     from "../style/factory.type";
import MdcElevationStylizerFactory  from "../stylizer/factory.type";

interface MdcElevationServiceFactory
{
  construct(
    elevationStyleFactory     : MdcElevationStyleFactory,
    elevationStylizerFactory  : MdcElevationStylizerFactory
  ) : MdcElevationService;
}

export default MdcElevationServiceFactory;
