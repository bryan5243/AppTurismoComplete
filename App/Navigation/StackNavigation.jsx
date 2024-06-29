import { createStackNavigator } from "@react-navigation/stack";
import Inicio from "../View/Inicio";
import Login from "../View/Login";
import Register from "../View/Register";
import Home from "../View/Home";

const Stack = createStackNavigator();


export default function StackNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Inicio" component={Inicio} />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="register" component={Register} />

        </Stack.Navigator>

    )
}