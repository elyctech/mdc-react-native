import React, {
  ReactElement,
  ReactNode
} from "react";

import mdcThemeService, {
  MdcThemeStylizer
}  from "@mdc-react-native/theme";

import MdcLeftSheetMain from "./main";

interface MdcLeftSheetProps
{
  children  ?: ReactNode;
  modal     ?: boolean;
  theme     ?: MdcThemeStylizer;
  width     ?: number;

  open  : boolean;

  setOpen : (
    open  : boolean
  ) => void;
}

const defaultProps  = {
  "theme" : mdcThemeService.getThemeStylizer()
};

export default function MdcLeftSheet(
  props : MdcLeftSheetProps
) : ReactElement
{
  const fullProps = Object.assign(
    {},
    defaultProps,
    props
  );

  return (
    <MdcLeftSheetMain
      {...fullProps}
    />
  );
}
