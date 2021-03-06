import React from 'react';

// components
import {SafeAreaView} from 'react-native';
import {Title, View} from 'native-base';

// styles
import {Layout, Gutters} from 'src/theme';
import styles from './styles';

const Header = ({body, title, left, right, color}) => {
  const {leftStyle, bodyStyle, titleText, rightStyle} = styles;

  const {center, row, justifyContentCenter} = Layout;
  const {small2xVPadding, small2xHPadding} = Gutters;

  return (
    <SafeAreaView style={styles[color]}>
      <View style={[row, small2xVPadding, small2xHPadding]}>
        <View style={[center, leftStyle]}>{left}</View>
        <View style={bodyStyle}>
          {title && <Title style={[]}>{title}</Title>}
          {body && body}
        </View>
        <View style={[center, rightStyle]}>{right}</View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
