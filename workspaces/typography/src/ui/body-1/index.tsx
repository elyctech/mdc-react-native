import React, {
  ReactElement,
  ReactNode
} from "react";

import {
  Text
} from "react-native";

import MdcTypographyStyle     from "../../lib/style/index.type";
import MdcTypographyStylizer  from "../../lib/stylizer/index.type";

import mdcTypographyService from "../../app/service/index";

interface MdcBody1Props
{
  style     ?: MdcTypographyStyle;
  stylizer  ?: MdcTypographyStylizer;

  children  : ReactNode;
}

export default function MdcBody1(
  props : MdcBody1Props
) : ReactElement
{
  const {
    style     = {},
    stylizer  = mdcTypographyService.getTypographyStylizer()
  } = props;

  const finalStyle  = Object.assign(
    {},
    stylizer.getBody1Style(),
    style
  );

  return (
    <Text
      style = {finalStyle}
    >
      {props.children}
    </Text>
  );
}
