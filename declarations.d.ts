declare module "*.svg" {
    import React from "react";
    import { SvgProps } from "react-native-svg";
    const content: React.FC<SvgProps>;
    export default content;
  }

declare module 'react-native-vector-icons/FontAwesome5' {
    import { Icon } from 'react-native-vector-icons/Icon';
    const FontAwesome5: Icon;
    export = FontAwesome5;
}
  