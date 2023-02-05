import { View, Text } from 'react-native'
import React, { memo } from 'react'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated'

const ListItem = memo(({ item, viewableItems }) => {

    const rStyle = useAnimatedStyle(() => {
        const isVisible = viewableItems.value.filter((vItem) => vItem.isViewable).find((vItem) => vItem.item.id === item.id)
        return {
            opacity: withTiming(isVisible ? 1 : 0),
            transform: [
                { scale: withTiming(isVisible ? 1 : 0.6) }
            ]
        }
    })
    return (
        <Animated.View
            style={[rStyle, { height: 80, width: '90%', backgroundColor: '#78CAD2', marginTop: 20, borderRadius: 15, alignSelf: 'center' }]}
        />
    )
})

export default ListItem