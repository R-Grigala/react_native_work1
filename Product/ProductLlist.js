import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProductListScreen() {
  // პროდუქტის მონაცემების შენახვა state-ში
  const [products, setProducts] = useState([]);

  // API-დან პროდუქტის მონაცემების წამოღება კომპონენტის mount-ის დროს
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data)) // მონაცემების შენახვა state-ში
      .catch(err => console.log(err)); // შეცდომის კონტროლი
  }, []);

  // თითოეული პროდუქტის ბარათის (card) რენდერინგი
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      
      {/* ქმედებების (like, refresh) आइკონები ბარათის ზედა კუთხეში */}
      <View style={styles.icons}>
        <TouchableOpacity style={styles.iconBtn}>
          <Ionicons name="repeat" size={18} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBtn}>
          <Ionicons name="heart-outline" size={18} />
        </TouchableOpacity>
      </View>

      {/* პროდუქტის გამოსახულება */}
      <Image
        source={{ uri: item.image }}
        style={styles.image}
        resizeMode="contain"
      />

      {/* პროდუქტის სათაური */}
      <Text numberOfLines={2} style={styles.title}>
        {item.title}
      </Text>

      {/* პროდუქტის ფასი */}
      <Text style={styles.price}>{item.price} ₾</Text>

      {/* ყიდვის ღილაკი */}
      <TouchableOpacity style={styles.button}>
        <Ionicons name="cart-outline" size={18} color="#fff" />
        <Text style={styles.buttonText}>ყიდვა</Text>
      </TouchableOpacity>
    </View>
  );

  // FlatList კომპონენტი პროდუქტების სიის ასაჩვენებლად
  return (
    <FlatList
      data={products} // მონაცემთა წყარო
      keyExtractor={item => item.id.toString()} // უნიკალური key
      renderItem={renderItem} // თითოეული ელემენტის რენდერინგი
      contentContainerStyle={styles.list} // სიის სტილი
    />
  );
}


const styles = StyleSheet.create({
  list: {
    padding: 16 // სიის შიგთავსის padding
  },
  card: {
    backgroundColor: '#fff', // ბარათის ფონური ფერი
    borderRadius: 20, // კუთხეების გასკუპება
    padding: 16,
    marginBottom: 20,
    elevation: 4 // ჩრდილის ეფექტი Android-ში
  },
  icons: {
    position: 'absolute', // პოზიციაზე განთავსება
    right: 12,
    top: 12,
    gap: 10 // ელემენტებს შორის გასწორება
  },
  iconBtn: {
    backgroundColor: '#f2f2f2',
    padding: 6,
    borderRadius: 20
  },
  image: {
    height: 180,
    width: '100%',
    marginBottom: 10
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12
  },
  button: {
    backgroundColor: '#7b5cff',
    borderRadius: 30,
    paddingVertical: 12,
    flexDirection: 'row', // აიკონები და ტექსტი ერთ ხაზში
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  }
});
