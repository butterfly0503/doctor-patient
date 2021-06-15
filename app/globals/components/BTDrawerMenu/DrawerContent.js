import React, {useContext} from 'react';
import {Image, View, Text} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';

import styled, {ThemeContext } from 'styled-components/native';

import {BTDrawerItem} from './DrawerItem';

const BTDrawerContent = (props) => {
    const Avatar = (props) => {
        const StyledText = styled.Text`
            color:${(props)=> props.theme.palette.mainTextColor};
            font-size:20px;
            margin-left:10px;
        `;
        const StyledImage = styled.Image`
            border-radius:30px;
            width:60px;
            height:60px;
        `;
        const StyledView = styled.View`
            background-color:${(props)=> props.theme.palette.mainBackgroundColor};
            flex-direction:row;
            align-items:center;
            padding:10px;
            paddingTop:60px;
        `;
        return (
            <StyledView>
                <StyledImage source={require('../../../images/avatars/girl1.png')}/>
                <StyledText title="Agent">Agent</StyledText>
            </StyledView>
        );
    };

    const navigateTo = (url) => {
      props.navigation.navigate(url);
    };

    const themeContext = useContext(ThemeContext);

    return (
      <>
        <Avatar onPress={()=>navigateTo('Profile')}/>
        <DrawerContentScrollView  {...props}>
            {props.routes.map(({icon, url, title}, key)=>{
                const isCurrent = (key==props.state.index);
                return(
                <BTDrawerItem
                    key = {key}
                    label={title}
                    iconName={icon}
                    onPress={()=>navigateTo(url)}
                    focused={isCurrent}
                    activeBackgroundColor={themeContext.palette.mainBackgroundColor}
                    activeTintColor={themeContext.palette.mainTextColor}
                    inactiveTintColor={themeContext.palette.thirdTextColor}
                    inactiveIconColor={themeContext.palette.secondaryTextColor}
                />
                );
            })}
        </DrawerContentScrollView>
      </>
    );
};

export {BTDrawerContent};