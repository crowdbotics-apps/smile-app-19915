import React from 'react';
import { Icon, View } from 'native-base';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';


// components
import { Text, ProgressCircle, Chart, ChartBar } from 'src/components';
import { Layout, Gutters, Global, Colors, Images } from 'src/theme';

const SmileCountablity = ({
  text,
  description,
  iconDescription,
  subText,
  weeks,
  cameraText,
  marginTop,
  loadingWeek,
  lineChart,
  barChart,
  dateText,
  date
}) => {
  const { border, transparentBg, tertiaryBg, secondaryBg } = Global;
  const {
    mediumHMargin,
    tinyVMargin,
    small2xHPadding,
    small2xVPadding,
    tinyVPadding,
    smallVPadding,
    smallHPadding,
    largeVPadding,
    mediumXTMargin,
  } = Gutters;
  const { firstText, secondText, mainWrapper } = styles;
  const { row, center, alignItemsCenter, justifyContentBetween } = Layout;

  const weeksData = [
    {
      progress: 1,
      week: 'M',
      color: Colors.primary,
      unfilledColor: Colors.viking,
    },
    {
      progress: 0.85,
      week: 'T',
      color: Colors.primary,
      unfilledColor: Colors.viking,
    },
    {
      progress: 0.75,
      week: 'W',
      color: Colors.primary,
      unfilledColor: Colors.viking,
    },
    {
      progress: 0.5,
      week: 'T',
      color: Colors.primary,
      unfilledColor: Colors.viking,
    },
    {
      progress: 0.85,
      week: 'F',
      color: Colors.primary,
      unfilledColor: Colors.viking,
    },
    {
      progress: 1,
      week: 'S',
      color: Colors.primary,
      unfilledColor: Colors.viking,
    },
    {
      progress: 0.35,
      week: 'S',
      color: Colors.carrotorange,
      unfilledColor: Colors.offyellow,
    },
  ]

  return (
    <View style={[
      secondaryBg,
      mediumHMargin,
      tinyVMargin,
      marginTop && mediumXTMargin,
      small2xHPadding,
      small2xVPadding,
      mainWrapper]}>
      <View style={[row, alignItemsCenter, justifyContentBetween]}>
        <Text text={text} color='primary' style={firstText} bold />
        <Text text={subText} color='primary' style={secondText} bold />
      </View>
      <View style={[row, alignItemsCenter, tinyVPadding, justifyContentBetween]}>
        <Text text={description} color='senary' medium bold />
      </View>
      {loadingWeek &&
        <View style={[alignItemsCenter, row, tinyVPadding, justifyContentBetween]}>
          {weeksData.map((item, i) => (
            <View key={i} style={alignItemsCenter}>
              <ProgressCircle
                size={25}
                showsText={false}
                progress={item.progress}
                color={item.color}
                unfilledColor={item.unfilledColor}
              />
              <Text text={item.week} color='senary' style={smallVPadding} medium bold />
            </View>
          ))}
        </View>
      }
      {lineChart && <Chart />}
      {barChart && <ChartBar />}
      {dateText && <Text text={date} color='primary' style={[secondText, small2xVPadding]} bold />}
      {cameraText && (
        <View style={[row, alignItemsCenter]}>
          <Image source={Images.camera} />
          <Text text={iconDescription} color='septenary' style={smallHPadding} medium bold />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    borderRadius: 10,
  },
  firstText: {
    fontSize: 20,
    lineHeight: 20
  },
  secondText: {
    fontSize: 30,
    lineHeight: 30
  },
  icon: {
    color: Colors.cinnamon
  },
  iconButtonWrapper: {
    width: 50,
    height: 50,
    borderRadius: 30,
  }
});

export default SmileCountablity
