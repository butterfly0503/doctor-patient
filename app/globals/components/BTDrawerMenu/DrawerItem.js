import React from 'react';
import {Image, View, Text} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';

import styled from 'styled-components/native';

import Icons from '../../../images/icons';

const BTDrawerItem = (props) => {
    const SVGIcon = resolveAssetSource(Icons[props.iconName]).default;

    const BTDrawerLabel = ({focused, label, color, inactiveIconColor})=> {
        const labelColor = focused && color || inactiveIconColor;
        const StyledText = styled.Text`
            margin-left:10px;
            color:${labelColor};
        `;
        return (
            <View style={{flex:1, flexDirection:"row"}}>
                <SVGIcon style={{color:color}} width="30"/>
                <StyledText>{label}</StyledText>
            </View>
        );
    };

    return(
        <DrawerItem {...props} label={(labelProps) => <BTDrawerLabel {...labelProps} label={props.label} inactiveIconColor={props.inactiveIconColor}/>}/>
    );
};

export {BTDrawerItem}