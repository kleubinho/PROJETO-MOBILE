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

      <ScrollView horizontal={false}>


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
                <Image source={require("./assets/verificado.png")} style={estilo.icon} />
              </View>

            </View>

            <View>
              <Text style={estilo.redbox}>Premiere</Text>
              <Image source={{ uri: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" }} style={estilo.imgstories} />

              <View style={estilo.txticon}>
                <Text style={estilo.txt}>Cooper</Text>
                <Image source={require("./assets/verificado.png")} style={estilo.icon} />
              </View>

            </View>

            <View>
              <Text style={estilo.blackbox}>Live</Text>
              <Image source={{ uri: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" }} style={estilo.imgstories} />

              <View style={estilo.txticon}>
                <Text style={estilo.txt}>Roberto</Text>
                <Image source={require("./assets/verificado.png")} style={estilo.icon} />
              </View>
            </View>

            <View>
              <Text style={estilo.blackbox}>Live</Text>
              <Image source={{ uri: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" }} style={estilo.imgstories} />

              <View style={estilo.txticon}>
                <Text style={estilo.txt}>Francis</Text>
                <Image source={require("./assets/verificado.png")} style={estilo.icon} />
              </View>
            </View>

            <View>
              <Text style={estilo.blackbox}>Live</Text>
              <Image source={{ uri: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" }} style={estilo.imgstories} />

              <View style={estilo.txticon}>
                <Text style={estilo.txt}>Alfred</Text>
                <Image source={require("./assets/verificado.png")} style={estilo.icon} />
              </View>
            </View>
          </ScrollView>

        </View>
        {/* FIM DOS STORYS =========*/}

        {/*Inicio do Trending  =========*/}
        <View style={estilo.trending}>
          <View style={estilo.cxtitulo}>
            <Text style={estilo.trendingtitulo}>
              Trending
            </Text>
            <Image source={require("./assets/more.png")} style={estilo.trendingmore} />
          </View>
          <View style={estilo.cxtrendingdetalhe}>
            <View>
              <Image source={{ uri: "https://magazine.zarpo.com.br/wp-content/uploads/2019/02/A-sensacao-de-saltar-de-paraquedas-1200x900.jpg" }} style={estilo.detalheimg} />
              <Text style={estilo.detalhelike}>Like</Text>
            </View>

            <View style={estilo.trendingusuario}>
              <Image source={{ uri: "https://br.web.img3.acsta.net/c_310_420/pictures/19/08/14/22/33/0632419.jpg" }} style={estilo.trendingusuarioimg} />
              <View>
                <Text style={estilo.trendingusuariotitulo}>Lionel Messi</Text>
                <Text style={estilo.trendingusuariosub}>2 minutos atrás</Text>
              </View>
            </View>


            <Text style={estilo.trendingobs}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
          </View>

        </View>

        {/* FIm do Trending */}

        {/* Todos os elementos devem ficar acima do ScrollView */}
      </ScrollView>
    </View>


  );
}


