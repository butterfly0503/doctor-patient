import React from 'react';
import { View } from 'react-native';

import styled from 'styled-components/native';

const Header = (props) => {
    const StyledView = styled.View`
        /*flex:1;*/
        flex-direction:row;
        align-items:center;
        height:${(props) => props.theme.headers.mainHeaderHeight};
        padding-top: 20px;
        background-color:${(props) => props.theme.palette.thirdBackgroundColor};
    `;

    return (
        <StyledView>
            {props.children}
        </StyledView>
    );
};

export { Header };