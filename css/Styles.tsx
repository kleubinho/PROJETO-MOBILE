import { StyleSheet } from "react-native";

export const estilo = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#090909'
    },
    header:{
        flexDirection:"row",
        paddingTop:50,
        paddingLeft:20,
        paddingRight:20,
        paddingBottom:20,
        justifyContent:'center'



    },
    perfil:{


    },
    imgperfil:{
        width:80,
        height:80,
        resizeMode:'contain',
        borderRadius:100

    },
    titulo:{
        flex:2

    },
    nome:{
        color:'#989cac',
        fontWeight: "bold",
        fontSize: 15,
        padding: 10
    },
    descricao:{
        color:'#989cac',
        paddingLeft:20

    },
    pesquisa:{
        

    },
    imgpesquisa:{
        flex:1,
        width:30,
        height:30,
        resizeMode:'contain'

    },
    stories:{

    },
    titulostories:{
        color:'#fff',
        fontSize:20,
        margin:20
    },
    imgstories:{
        width:200,
        height:300,
        resizeMode:'contain',
        borderRadius:60,
        margin:5
    },
    scrollstories:{

    },
    blackbox:{
        backgroundColor:"#090909",
        color:"#989cac",
        fontSize:15,
        padding:10,
        width:50,
        position:"absolute",
        zIndex:1000,
        borderRadius:10,
        top:20,
        left:30,
        textAlign:"center"
        
    },
    redbox:{
        backgroundColor:"#600",
        color:"#989cac",
        fontSize:15,
        padding:10,
        width:80,
        borderRadius:20,
        position:"absolute",
        zIndex:1000,
        top:20,
        left:30,
        textAlign:"center"
        
    },
    txticon:{
        flexDirection:"row",
        alignItems: "center"
    },
    txt:{
        color:"#989cac",
        fontSize:15,
        padding:10,
        left:20,
        marginRight:12
    },
    icon:{
        width:18,
        height:18,
        resizeMode:'contain'
    }

})