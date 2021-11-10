import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { estilo } from './css/Styles';

export default function App() {
  return (
    <View style={estilo.container}>
      <StatusBar style="auto" />



      {/* inicio do header =========*/}
      <View style={estilo.header}>
        <View style={estilo.perfil}>
          <Image source={{ uri: "https://img.olympicchannel.com/images/image/private/t_1-1_600/f_auto/v1538355600/primary/pcxgwhoweqzzhiuqbwqw" }} style={estilo.imgperfil} />
        </View>


        <View style={estilo.titulo}>
          <Text style={estilo.nome}>Cristiano Ronaldo</Text>
          <Text style={estilo.descricao}>Programador</Text>
        </View>

        <View style={estilo.pesquisa}>
          <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/meta/thumb/7/7e/Vector_search_icon.svg/709px-Vector_search_icon.svg.png" }} style={estilo.imgpesquisa} />
        </View>

      </View>
      {/* fim do header =========*/}


      {/* INICIO DOS STORYS =========*/}
      <View style={estilo.stories}>
        <Text style={estilo.titulostories}>
          Stories
        </Text>

        <ScrollView horizontal={true} style={estilo.stories}>

          <View>
            <Text style={estilo.blackbox}>Live</Text>
            <Image source={{ uri: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }} style={estilo.imgstories} />
            
            <View style={estilo.txticon}>
            <Text style={estilo.txt}>Savanna</Text>
            <Image source={require("./assets/verificado.png")} style={estilo.icon}/>
            </View>
          
          </View>

          <View>
            <Text style={estilo.redbox}>Premiere</Text>
            <Image source={{ uri: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" }} style={estilo.imgstories} />
          
            <View style={estilo.txticon}>
            <Text style={estilo.txt}>Cooper</Text>
            <Image source={require("./assets/verificado.png")} style={estilo.icon}/>
            </View>
          
          </View>

          <View>
            <Text style={estilo.blackbox}>Live</Text>
            <Image source={{ uri: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" }} style={estilo.imgstories} />
          
            <View style={estilo.txticon}>
            <Text style={estilo.txt}>Roberto</Text>
            <Image source={require("./assets/verificado.png")} style={estilo.icon}/>
            </View>
          </View>

          <View>
            <Text style={estilo.blackbox}>Live</Text>
            <Image source={{ uri: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" }} style={estilo.imgstories} />
          
            <View style={estilo.txticon}>
            <Text style={estilo.txt}>Francis</Text>
            <Image source={require("./assets/verificado.png")} style={estilo.icon}/>
            </View>
          </View>

          <View>
            <Text style={estilo.blackbox}>Live</Text>
            <Image source={{ uri: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" }} style={estilo.imgstories} />
          
            <View style={estilo.txticon}>
            <Text style={estilo.txt}>Alfred</Text>
            <Image source={require("./assets/verificado.png")} style={estilo.icon}/>
            </View>
          </View>
        </ScrollView>

      </View>
      {/* FIM DOS STORYS =========*/}
    </View>


  );
}


