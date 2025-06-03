import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootStackParamList } from "../types";
import Home from "../views/Home";
import Detail from "../views/Detail";
import ImagenFullScreen from "../components/ImagenFullScreen/ImagenFullScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'rgba(7, 26, 93, 255)',

    },
    headerTitle: {
        fontWeight: "bold" as "bold",
        color: "#fff",
    },
});


const routeScreenDefaultOptions = {
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle,
    headerTintColor: '#fff', // color de los íconos y botones del header
};


const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" id={undefined}>
            <Stack.Screen
                name="Home"
                component={Home}
                options={routeScreenDefaultOptions}
            />
            <Stack.Screen
                name="Detalles"
                component={Detail}
                options={routeScreenDefaultOptions}
            />
            <Stack.Screen
                name="ImagenFullScreen"
                component={ImagenFullScreen}
                options={{ ...routeScreenDefaultOptions, headerShown: false }}
            />
        </Stack.Navigator>
    </NavigationContainer>
);


export default Routes;