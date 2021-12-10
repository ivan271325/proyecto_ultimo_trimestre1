import React, { useState } from 'react';
import { Text, View, Image, ScrollView, StyleSheet, SafeAreaView, FlatList, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

//estilos de las cosas
const styles = StyleSheet.create(
  {
    letraGordita: {
      fontSize: 20,
      fontWeight: 'bold'
    },
    letra: {
      fontSize: 20,
      color: 'black',
    },
    view: {
      padding: 10,
    },
    informacion: {
      textAlign: 'center',
      padding: 30,
      fontWeight: 'bold',
      fontSize: 20,
      color: 'black',
    },
    tinyLogo: {
      padding: 40,
      marginHorizontal: 170,
      width: 50, 
      height: 50,
    },
    input: {

      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 20,
      color: 'black',
      borderWidth: 1,
    }
  }
)

function ListadoStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Listado" component={ListadoPantalla}
        options={{
          title: 'Busqueda',
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center'
        }} />
      <HomeStack.Screen name="Detalles" component={DetalleUsuarioPantalla}
        options={{
          title: 'Usuarios',
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center'
        }} />
    </HomeStack.Navigator>
  );
}

function InformacionPantalla() {
  return (
    <ScrollView >

      <Text style={styles.informacion}> Bienvenido a la historia de los dispositivos </Text>

      <Image
        style={styles.tinyLogo}
        source={ require('./src/imagenes/blackberry.jpg')}
      />
      <Text style={styles.informacion}> Esto es un blackberry, a continuacion comentaremos un poco su historia </Text>
      <Text style={styles.informacion}> El primer dispositivo de la familia fue la BlackBerry 850, el dispositivo
        móvil tenía un teclado completo, lo que era inusual en ese momento. Podía enviar mensajes, acceder al correo
        electrónico, enviar y recibir páginas de internet completas e implementaba una agenda para organizar tareas,
        con tan solo una pequeña pantalla que podía mostrar ocho líneas de texto.
      </Text>

      <Image
        style={styles.tinyLogo}
        source={ require('./src/imagenes/samsung.jpg')}
      />
      <Text style={styles.informacion}> Esto es un SamSung, a continuacion comentaremos un poco su historia </Text>
      <Text style={styles.informacion}> Los orígenes del actual grupo Samsung se remontan al 1 de marzo de 1938. Ese
        día el empresario Lee Byung-chul (1910-1987) inauguró en Daegu una compañía de importación y exportación de
        productos perecederos a la que llamó Samsung Sanghoe (en coreano, «tres estrellas»). Durante el tiempo que
        Corea estuvo ocupada por Japón, el principal negocio fue la venta de pescado seco y frutas a Manchukuo.Al
        finalizar la Segunda Guerra Mundial, Corea recobró su independencia y Samsung prospera al ampliar su actividad
        al proceso de alimentos y fabricación de textiles.
      </Text>

      <Image
        style={styles.tinyLogo}
        source={ require('./src/imagenes/huawey.jpg')}
      />
      <Text style={styles.informacion}> Esto es un Huawey, a continuacion comentaremos un poco su historia </Text>
      <Text style={styles.informacion}> Huawei fue fundada por Ren Zhengfei en 1987, como distribuidor de productos
        PBX importados, con un capital inicial registrado de 24000 RMB. En 1989, comenzó el desarrollo y posterior
        venta de su propia PBX. Después de acumular conocimientos y recursos en el negocio de las centrales telefónicas,
        Huawei alcanzó su primer avance en la cadena principal del mercado de telecomunicaciones en 1993, lanzando su C&C08
        switch digital telefónico que tenía una capacidad de más de diez mil circuitos. Hasta ese momento, las compañías
        de telecomunicaciones domésticas chinas, no eran capaces de construir conmutadores con tal capacidad. Los
        conmutadores Huawei fueron los primeros instalados solo en pequeñas ciudades y áreas rurales.
      </Text>

      <Image
        style={styles.tinyLogo}
        source={ require('./src/imagenes/xiaomi.jpg')}
      />
      <Text style={styles.informacion}> Esto es un Xiaomi, a continuacion comentaremos un poco su historia </Text>
      <Text style={styles.informacion}> Xiaomi Corporation (en chino, 小米集團 PY Xiǎomǐ jítuán) es una empresa china dedicada
        a crear equipos electrónicos, tanto telefónicos como artículos para el hogar. Xiaomi se ha abierto paso al mercado
        mundial abriendo varias tiendas físicas y en determinados países de Asia, Europa e Iberoamérica, además de su sitio
        web y distribuidores oficiales. Desde el lanzamiento de su primer teléfono inteligente en agosto de 2011, Xiaomi ha
        ganado cuota de mercado en China y ha ampliado su línea productos a otros dispositivos electrónicos.
        En 2013, la empresa consiguió convertir al Xiaomi Mi 2S en el móvil más popular de China, por delante del Galaxy S4
        de Samsung y del iPhone 5 de Apple, según los datos de la consultora especializada AnTuTu.
      </Text>

    </ScrollView >
  );
}

function DetalleUsuarioPantalla({ route }) {

  const { edad } = route.params;

  const users = [
    { id: 1, nombre: 'Antonio Morlanes', edad: 34, sexo: 'Varón' },
    { id: 2, nombre: 'Margarita Fuentes', edad: 29, sexo: 'Mujer' },
    { id: 4, nombre: 'Manuel Machado', edad: 51, sexo: 'Varón' },
    { id: 5, nombre: 'Cai Lun', edad: 81, sexo: 'Varón' },
    { id: 6, nombre: 'Manuela Aparicia', edad: 19, sexo: 'Varón' },
    { id: 7, nombre: 'Manuel Lara', edad: 20, sexo: 'Varón' },
    { id: 9, nombre: 'Álvaro Andrade', edad: 43, sexo: 'Varón' },
    { id: 10, nombre: 'Ángel Andrade', edad: 23, sexo: 'Varón' },
    { id: 11, nombre: 'Araceli Castillo', edad: 61, sexo: 'Mujer' },
    { id: 12, nombre: 'Sara Sacristán', edad: 49, sexo: 'Mujer' },
    { id: 13, nombre: 'Esther Arroyo', edad: 18, sexo: 'Mujer' },
    { id: 14, nombre: 'Martina Danta', edad: 45, sexo: 'Mujer' },
    { id: 15, nombre: 'Julia Praena', edad: 38, sexo: 'Mujer' },
    { id: 16, nombre: 'Pedro Flecha', edad: 53, sexo: 'Varón' },
    { id: 17, nombre: 'Miguel Berral', edad: 60, sexo: 'Varón' },
    { id: 18, nombre: 'Lorena Aparicio', edad: 53, sexo: 'Mujer' },
    { id: 19, nombre: 'David Toral', edad: 61, sexo: 'Varón' },
    { id: 20, nombre: 'Daniel Cifuentes', edad: 52, sexo: 'Varón' }
  ];

  function renderItem(edad, item) {

    if (edad > item.edad)
      return <Text style={styles.informacion}> {item.nombre}, Edad: {item.edad}, Sexo: {item.sexo} </Text>
  }

  return (
    <ScrollView style={styles.view}>
      <Text style={styles.informacion}> Tus usuarios son los siguientes </Text>
      <FlatList
        data={users}
        renderItem={({ item }) => (<View>{renderItem(edad, item)}</View>)}
      />
    </ScrollView>
  );
}

function ListadoPantalla({ navigation }) {

  const [edad, setEdad] = useState();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.informacion}> Busca aquí tus usuarios por edad </Text>
      <Text style={styles.informacion}> Edad </Text>
      <TextInput style={styles.input} onChangeText={edad => setEdad(edad)} />

      <Button title='Buscar' style={styles.informacion} onPress={() => navigation.navigate('Detalles', { edad: edad })} />

    </SafeAreaView>
  );
}

function App() {
  return (

    <NavigationContainer>

      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Listado') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            } else if (route.name === 'Historia') {
              iconName = focused ? 'ios-filter' : 'ios-filter-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },

          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'grey',
        })}
      >


        <Tab.Screen options={{ headerShown: false }} name="Historia" component={InformacionPantalla}
          options={{
            title: 'Historia',
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center'
          }} />
        <Tab.Screen options={{ headerShown: false }} name="Listado" component={ListadoStackScreen} />

      </Tab.Navigator>
    </NavigationContainer>


  )
}
export default App;