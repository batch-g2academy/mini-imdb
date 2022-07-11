import React from 'react';
import {View, StyleSheet, Text, Image, Alert } from 'react-native';

import {  GestureHandlerRootView, PanGestureHandler, Swipeable } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

const Movie = (props) => {
    const { title, image } = props;
    const translateX = useSharedValue(0);

    const panGesture = useAnimatedGestureHandler({
        onStart: () => {
            console.log("masuk");
        },
        onActive: (event) => {
            translateX.value = event.translationX
        },
    })

    const swipeRStyle = useAnimatedStyle(() => ({
        transform: [
            {
                translateX: translateX.value
            }
        ]
    }))

    const swipeRightAction = (direction) => {
        Alert.alert('Deleted');
    }

    return (
        <View style={styles.container}>
            <GestureHandlerRootView>
                <Swipeable 
                    renderRightActions={RightSwipeAction}
                    onSwipeableOpen={swipeRightAction}
                    
                >
                    <View style={styles.movie}>
                        <Text>{title}</Text>
                        <Image
                            style={{ width: 50, height: 50}}
                            source={{
                                uri: image
                            }}
                        />
                    </View>
                </Swipeable>
            </GestureHandlerRootView>

            {/* PAN GESTURE HANDLER */}
            {/* <RightSwipeAction />
            <GestureHandlerRootView>
                <PanGestureHandler onGestureEvent={panGesture}>
                    <Animated.View style={[styles.movie, swipeRStyle]}>
                        <Text>{title}</Text>
                        <Image
                            style={{ width: 50, height: 50}}
                            source={{
                                uri: image
                            }}
                        />
                    </Animated.View>
                </PanGestureHandler>
            </GestureHandlerRootView> */}
        </View>
    );
}

const RightSwipeAction = () => {
    return (
        <View
          style={{
            backgroundColor: '#ff8303',
            justifyContent: 'center',
            alignItems: 'center',
            height: 70
          }}
        >
          <Text
            style={{
              color: '#1b1a17',
              paddingHorizontal: 10,
              fontWeight: '600',
              paddingHorizontal: 30,
              paddingVertical: 20,
            }}
          >
            Delete
          </Text>
        </View>
      );
}

const styles = StyleSheet.create({
    // container: {
    //     width: '100%',
    //     alignItems: 'center'
    // },
    movie: {
        width: '90%',
        height: 80,
        margin: 5,
        paddingLeft: 20,
        justifyContent: 'center',
        backgroundColor: 'salmon',
        // shadowing android
        // elevation: 4,
        //shadowing ios
            shadowOpacity: 0.8, 
            // shadowRadius: 10,
        
    }
})

export default Movie;
