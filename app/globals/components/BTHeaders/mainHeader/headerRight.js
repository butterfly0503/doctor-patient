import React, { useContext } from 'react';
import { View, Image } from 'react-native';

import styled, { ThemeContext } from 'styled-components/native';
import { Icon } from 'react-native-elements'

const HeaderRight = (props) => {
    const themeContext = useContext(ThemeContext);
    const StyleIcon = styled(Icon)`
        padding: 0 10px;
    `;

    return (
        <StyleIcon
            name={props.icon}
            size={30}
            containerStyle={{paddingLeft:10, paddingRight:10}}
            color={themeContext.palette.TextColor}
            type='material'
            onPress={props.onPress}
        />
    );
};

export { HeaderRight };