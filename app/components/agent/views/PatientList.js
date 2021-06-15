import React from 'react';
import { View, Button } from 'react-native';

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
        </>
    );
};

export {PatientList};