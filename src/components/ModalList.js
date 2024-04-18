/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

const ModalList = ({modalVisible, setModalVisible, apiData,calorie}) => {
const myItemSeparator = () => {
  return <View style={{height: 5, backgroundColor: 'transparent'}} />;
};

const myListEmpty = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Text style={styles.item}>Data not found</Text>
    </View>
  );
};

const HeaderComponent = () => {
  return (
    <Text
      style={{
        fontSize: 22,
        textAlign: 'center',
        marginTop: 20,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        marginBottom: 10,
      }}>
      List of Foods
    </Text>
  );
};

// const ListItems
const ListItem = ({item, onPress}) => (
  <TouchableOpacity onPress={() => onPress(item)}>
    <View style={{padding: 20}}>
      <Text>{item.title}</Text>
    </View>
  </TouchableOpacity>
);


  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>X</Text>
            </Pressable>
            <FlatList
              data={apiData}
              renderItem={({item}) => (
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#ddffff',
                  }}>
                  <Image
                    height={70}
                    width={70}
                    source={{
                      uri: item.image,
                    }}
                    borderRadius={5}
                  />
                  <View style={{flex: 1, margin: 5}}>
                    <Text style={styles.text}>{item.title}</Text>
                    <Text style={styles.item}>
                      {
                        item.nutrition.nutrients.find(
                          nutrient => nutrient.name === 'Calories').amount
                      }
                    </Text>
                  </View>
                </View>
              )}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={myItemSeparator}
              ListEmptyComponent={myListEmpty}
              ListHeaderComponent={HeaderComponent}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    paddingHorizontal: 20,
    borderRadius: 20,
    padding: 10,
    elevation: 5,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default ModalList;
