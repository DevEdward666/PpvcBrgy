import React from 'react';
import {BottomSheet} from 'react-native-elements';
import {View} from 'react-native';
import {Card} from 'react-native-elements/dist/card/Card';
const CustomBottomSheet = ({isVisible, color, UI, Footer}) => {
  //  const  onSwipeUp = useCallback((gestureState) {
  //     this.setState({myText: 'You swiped up!'});
  //   })

  //  const onSwipeDown  = useCallback((gestureState) {
  //     this.setState({myText: 'You swiped down!'});
  //   })

  //   const onSwipeLeft  = useCallback((gestureState) {
  //     this.setState({myText: 'You swiped left!'});
  //   })

  //   const onSwipeRight = useCallback((gestureState) {
  //     this.setState({myText: 'You swiped right!'});
  //   })

  return (
    <BottomSheet
      isVisible={isVisible}
      containerStyle={{backgroundColor: color}}>
      <View>{UI}</View>

      <View>{Footer}</View>
    </BottomSheet>
  );
};

CustomBottomSheet.propTypes = {};

export default CustomBottomSheet;
