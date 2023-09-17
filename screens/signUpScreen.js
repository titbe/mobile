import { TextInput,StyleSheet, View, Button, Text } from "react-native";

export function SignUpScreen({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Create new accout</Text>
            <TextInput style={styles.input} value="" placeholder="Full Name"/>
            <TextInput style={styles.input} value="" placeholder="Phone Number"/>
            <TextInput style={styles.input} value="" placeholder="Email Address"/>
            <TextInput style={styles.input} value="" placeholder="Password" secureTextEntry={true}/>
            <View style={styles.btn1}>
                <Button title="Sign Up" color={"blue"} onPress={()=> navigation.navigate('Success')}/>
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
        paddingVertical:7, 
        paddingLeft:10,
        marginHorizontal: 30,
        marginTop:20,
        borderColor:'gray',
        borderWidth: 1,
        borderRadius: 999
    },
    btn1:{
        // paddingVertical: 20, 
        marginTop: 40,
        marginHorizontal: 60,
        borderRadius: 80,
        overflow: "hidden"
    },
});