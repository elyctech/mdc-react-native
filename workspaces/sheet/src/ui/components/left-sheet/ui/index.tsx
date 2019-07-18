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
  children      ?: ReactNode;
  closeDuration ?: number;
  modal         ?: boolean;
  openDuration  ?: number;
  scrimOpacity  ?: number;
  theme         ?: MdcThemeStylizer;
  width         ?: number;

  open  : boolean;

  onClose ?: () => void;
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
