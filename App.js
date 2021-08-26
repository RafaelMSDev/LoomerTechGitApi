import React, {useState, useEffect} from 'react';
import { SafeAreaView, 
        View, Text, 
        FlatList, ActivityIndicator, 
        Image, TextInput, 
        TouchableOpacity} from 
        'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import axios from 'axios';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { WebView } from 'react-native-webview';


export default function App(){
    const baseURL ='https://api.github.com'
    const perPage = 10;

    const [url, setUrl] = useState('');
    const [go, setGo] = useState(false);
  
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() =>{
      loadApi();
    },[]);

    async function loadApi(){
      if(loading) return;

      setLoading(true);
        //search/repositories?q=react&per_page=5&page=1
      const response = await axios.get(`${baseURL}/search/repositories?q=type:org&per_page=${perPage}&page=${page}`)

      setData([...data, ...response.data.items]);
      setPage(page + 1);
      setLoading(false);
    }
  if ( go == false) { 
  return(
    
    <SafeAreaView>
      <View style={styles.containerSearch}> 
          <View style={styles.inputArea}>
            <TextInput
            style={styles.input}
            placeholder="Procurar organizações..."        
            />
            <TouchableOpacity style={styles.icon}>
            <Ionicons name="search-outline" color="#707070" size={25}/>              
            </TouchableOpacity>
          </View>
      </View>  
      <View style={styles.iconSignal}>
      <Ionicons name="cellular-outline" color="#2194f3" size={20}/>
      </View>
      <View style={styles.tituloContainer}>
        <Text style={styles.tituloSuperior}> Organizações em destaque</Text>
      </View>
      <View style={styles.tituloContainer}>
        <Text style={styles.subTitulo}> Veja as organizações em tendência no GitHub</Text>
      </View>
      <View>
        <FlatList
        style={{marginTop: 35}}
        contentContainerStyle={{marginHorizontal: 30}}
        data={data}
        keyExtractor={ item => String(item.id)}
        renderItem={({item}) => <ListItem data={item} />}
        onEndReached={loadApi}
        onEndReachedThreshold={0.1}
        ListFooterComponent={<FooterList load={loading} />}
        />
        
      </View> 
    </SafeAreaView>
  )
}

function ListItem({data}){
  return(
    <View style={styles.container}> 
        <View style={styles.avatarContainer}>
        <Image
        style={styles.avatar}
        source={{ uri: data.owner.avatar_url}}
        />

      <View style={styles.orgInfo}>
        <Text style={styles.name}>{data.owner.login}</Text>
        <Text style={styles.bio}>{data.full_name}</Text>
        

        <View style={styles.buttonContainer}> 
       
        
        
          </View>
        </View>
      </View>
    </View>
  )
}

function FooterList({ load }){
  if (!load) return null;
  return(
    <View style={styles.loading}>
      <ActivityIndicator
      size={25}
      color="#121212"
      />
    </View>
  )
}
}
