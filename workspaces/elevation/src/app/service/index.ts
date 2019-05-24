import mdcElevationServiceFactory from "./factory";

import mdcElevationStyleFactory     from "../style/factory";
import mdcElevationStylizerFactory  from "../stylizer/factory";

const mdcElevationService = mdcElevationServiceFactory.construct(
  mdcElevationStyleFactory,
  mdcElevationStylizerFactory
);

export default mdcElevationService;
