import { TextInput,StyleSheet, View, Button, Text } from "react-native";

export function LoginScreen ({navigation}) {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Sign In</Text>
            <TextInput style={styles.input} value="" placeholder="Email or phone number"/>
            <TextInput style={styles.input} value="" placeholder="Password" secureTextEntry={true}/>
            <View style={styles.btn1}>
                <Button title="Login" color={"#5EA33A"} onPress={()=> navigation.navigate('Success')}/>
            </View>
            <Text style={styles.text}>OR</Text>
            <View style={styles.btn2}>
                <Button title="FAcebook Login" color={"blue"} onPress={()=> navigation.navigate('Success')}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        backgroundColor: "white",
    },
    title:{
        fontSize:20,
        marginLeft:20,
        color:'#5EA33A'
    },
    input:{
        color:'gray',
        fontSize:17,
        backgroundColor: "white",
        paddingVertical: 20, 
        paddingHorizontal: 60,
        marginHorizontal: 30,
        marginTop:20,
        borderColor:'gray',
        borderWidth: 1,
        borderRadius: 999
    },
    btn1:{
        // paddingVertical: 20, 
        marginTop: 20,
        marginHorizontal: 60,
        borderRadius: 80,
        overflow: "hidden"
    },
    text:{
        textAlign: "center",
        marginVertical:40,
        fontSize:17
    },
    btn2:{
        // paddingVertical: 20, 
        marginTop: 20,
        marginHorizontal: 60,
        borderRadius: 80,
        overflow: "hidden"
    },
});