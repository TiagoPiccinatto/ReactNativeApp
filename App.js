import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Telas/Login';
import Principal from './Telas/Principal';
import Cadastro from './Telas/Cadastro';
import EsqueceuSenha from './Telas/EsqueceuSenha';



const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Principal" component={Principal} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="EsqueceuSenha" component={EsqueceuSenha} />
    </Stack.Navigator>
  );
}


export default function App() {

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );

}
      
    