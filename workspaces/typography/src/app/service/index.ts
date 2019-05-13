import mdcTypographyServiceFactory from "./factory";

import mdcTypographyStylizerFactory from "../stylizer/factory";

const mdcTypographyService = mdcTypographyServiceFactory.construct(
  mdcTypographyStylizerFactory
);

export default mdcTypographyService;
