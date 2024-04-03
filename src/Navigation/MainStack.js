/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import TabRoutes from './TabRoutes';
import Generate from '../components/Generate';

export default function (Stack) {
    return (
        <>
            <Stack.Screen
                name="Home"
                component={TabRoutes}
            />
        </>
    )
}