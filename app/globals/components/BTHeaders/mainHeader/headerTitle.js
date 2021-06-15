import React from 'react';
import { Text } from 'react-native';

import styled from 'styled-components/native';

const HeaderTitle = (props) => {
    const StyledText = styled.Text`
        font-size:${(props) => props.theme.fontSizes.secondaryFontSize};
        color:${(props) => props.theme.palette.secondaryTextColor};
    `;
    return (
        <StyledText>
            {props.title}
        </StyledText>
    );
};

export { HeaderTitle };