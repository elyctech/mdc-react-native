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

interface MdcHeadline3Props
{
  style     ?: MdcTypographyStyle;
  stylizer  ?: MdcTypographyStylizer;

  children  : ReactNode;
}

export default function MdcHeadline3(
  props : MdcHeadline3Props
) : ReactElement
{
  const {
    style     = {},
    stylizer  = mdcTypographyService.getTypographyStylizer()
  } = props;

  const finalStyle  = Object.assign(
    {},
    stylizer.getHeadline3Style(),
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
