import React from 'react';
import {View, Text, Image} from 'react-native';
import imageConstant from '../constant/imageConstant';
import scale from '../utils/scale';

const LogoTitle = () => {
  return (
    <Image
      style={{width: scale(50), height: scale(50)}}
      source={imageConstant.kissan_icon}
    />
  );
};
export default LogoTitle;
