import mdcShapeServiceFactory from "./factory";

import mdcShapeStylizerFactory from "../stylizer/factory";

const mdcShapeService = mdcShapeServiceFactory.construct(
  mdcShapeStylizerFactory
);

export default mdcShapeService;
