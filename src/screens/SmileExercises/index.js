import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {View, TouchableOpacity, ImageBackground, Image} from 'react-native';
import {Content} from 'native-base';

//styles
import styles from './styles';

//actions
import {getExercises, markFavourite} from './redux/actions';

// components
import {Text, Header, MenuIcon, Avatar, DataAvailability} from 'src/components';
import {Gutters, Images, Layout, Global, Fonts} from 'src/theme';
const {
  mediumBPadding,
  mediumVMargin,
  smallBMargin,
  smallTMargin,
  mediumHMargin,
} = Gutters;

const {backImage, star, text, image, dataWrapper, title} = styles;

const {row, fill, alignItemsCenter, justifyContentStart} = Layout;

const {titleSmall, titleRegular, textMedium} = Fonts;
const {border} = Global;

const SmileExercises = (props) => {
  const {
    route: {
      params: {selectedActivity},
    },
    navigation: {openDrawer},
    user,
    requesting,
  } = props;

  useEffect(() => {
    props.getExercises();
  }, []);

  const onFavourite = () => {
    const data = {
      user: user.id,
      favorite_exercise: selectedActivity.id,
    };
    console.log('data', data);
    props.markFavourite(data);
  };

  console.log('selectedActivity', selectedActivity);
  return (
    <>
      <ImageBackground source={Images.loginbg} style={fill}>
        <Header
          left={<MenuIcon action={() => openDrawer()} />}
          right={<Avatar size="regular" />}
        />
        <DataAvailability
          requesting={requesting}
          hasData={Boolean(selectedActivity)}
          style={dataWrapper}>
          <View style={[row, alignItemsCenter, smallBMargin]}>
            <View style={fill}>
              <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <Image source={Images.camarrowback} style={backImage} />
              </TouchableOpacity>
            </View>
            <View style={[fill, justifyContentStart]}>
              <Text
                bold
                text={selectedActivity.exercise_name}
                color="river"
                style={[titleSmall]}
              />
            </View>
            <View style={fill} />
          </View>
          <Content contentContainerStyle={mediumBPadding}>
            <View style={[smallTMargin]}>
              <View style={star}>
                <TouchableOpacity onPress={(data) => onFavourite(data)}>
                  <Image
                    source={
                      selectedActivity.is_favorite
                        ? Images.bigstar
                        : Images.star
                    }
                    style={{width: 50, height: 50}}
                  />
                </TouchableOpacity>
              </View>
              <Image
                source={{uri: selectedActivity.image_or_video}}
                style={image}
              />
            </View>
            <View style={[mediumHMargin]}>
              <Text
                color="river"
                text={selectedActivity.title}
                style={[titleRegular, mediumVMargin]}
              />
              <Text
                color="river"
                style={[textMedium, text]}
                text={selectedActivity.description}
              />
            </View>
          </Content>
          {/* <Footer /> */}
        </DataAvailability>
      </ImageBackground>
    </>
  );
};

const mapStateToProps = (state) => ({
  requesting: state.exercises.requesting,
  user: state.app.user,
});

const mapDispatchToProps = (dispatch) => ({
  getExercises: () => dispatch(getExercises()),
  markFavourite: (data) => dispatch(markFavourite(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SmileExercises);
