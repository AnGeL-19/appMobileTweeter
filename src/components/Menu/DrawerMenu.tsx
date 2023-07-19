import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { DrawerContentComponentProps, DrawerContentScrollView } from "@react-navigation/drawer";
import  Icon  from "react-native-vector-icons/Ionicons";
import { useContext } from "react";
import { AuthContext } from "../../context/auth/AuthProvider";

const DrawerMenu = ( { navigation }: DrawerContentComponentProps) => {

    const { user, signOut } = useContext(AuthContext)

    return (
      <DrawerContentScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        <View style={styles.containerNavigation}>
            <View style={styles.avatarContainer}>
                <Image 
                    style={styles.avatarImage}
                    source={{
                        uri: user?.imgUser
                    }}
                />
            </View>

            <View>
                <Text style={styles.namePerfil}>{user?.name}</Text>
            </View>

            <View style={ styles.menuContainer }>

                <TouchableOpacity 
                    style={ styles.menuBoton }
                    onPress={ () => navigation.navigate('ProfileScreen') }
                >
                    <Icon name='person' color="black" size={ 20 } />
                    <Text style={ styles.menuTexto } >
                        Profile
                    </Text>
                </TouchableOpacity>

                {/* <TouchableOpacity 
                    style={ styles.menuBoton }
                    onPress={ () => navigation.navigate('TabsNavigation') }
                >
                    <Icon name='home' color="black" size={ 20 } />
                    <Text style={ styles.menuTexto } >
                        Home
                    </Text>
                </TouchableOpacity> */}

                <TouchableOpacity 
                    style={ styles.menuBoton }
                    onPress={ () => navigation.navigate('SettingsScreen') }
                >
                    <Icon name='settings' color="black" size={ 20 } />
                    <Text style={ styles.menuTexto } >
                        Settings
                    </Text>
                </TouchableOpacity>
            
            </View>
        </View>
        <View>
            <TouchableOpacity 
                style={ styles.menuBoton }
                onPress={ signOut }
            >
                <Icon name='log-out-outline' color="red" size={ 20 } />
                <Text style={ {...styles.menuTexto, color: '#FF5E5E'} }>
                    Logout
                </Text>
            </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    )
  
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    containerNavigation: {
        alignItems: 'center',
    },
    avatarContainer: {
        width: 100,
        height: 100,
        marginBottom: 10,
        borderRadius: 100,
        overflow: 'hidden'
    },
    avatarImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    namePerfil: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    menuContainer: {
        padding: 10,
        gap: 10,
      },
    menuBoton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuTexto: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10
    }
})

export default DrawerMenu