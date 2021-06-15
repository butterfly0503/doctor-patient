import React from 'react';
import { View, Button } from 'react-native';
import GradientButton from 'react-native-gradient-buttons';

import { MainHeader, MainHeaderRight, MainHeaderTitle } from '../../../globals/components/BTHeaders';

const PatientList = ({ navigation }) => {
    return (
        <>
            <MainHeader>
                <MainHeaderRight icon="menu" onPress={() => {navigation.openDrawer()}}/>
                <MainHeaderTitle title={'Patients'} />
            </MainHeader>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'white' }}>
                <Button onPress={() => navigation.goBack()} title="Go back home" />
            </View>
            <GradientButton
                style={{ marginVertical: 8 }}
                text="Gradient Button #1"
                textStyle={{ fontSize: 20 }}
                gradientBegin="#874f00"
                gradientEnd="#f5ba57"
                gradientDirection="diagonal"
                height={60}
                width={300}
                radius={15}
                impact
                impactStyle='Light'
                onPressAction={() => alert('You pressed me!')}
            />
        </>
    );
};

export {PatientList};