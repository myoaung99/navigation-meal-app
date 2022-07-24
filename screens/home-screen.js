import React from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import {CATEGORIES} from "../data/dummy_data";


function HomeScreen(props) {
    return (
        // <ScrollView>
        //     <View style={styles.container}>
        //         {CATEGORIES.map((category)=><View key={category.id} style={[styles.box, {backgroundColor: category.color}]}>
        //         <Text key={category.id}>{category.title}</Text>
        //             </View>)}
        //     </View>
        // </ScrollView>


            <FlatList style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}} data={CATEGORIES} renderItem={({item})=><View key={item.id} style={[styles.box, {backgroundColor: item.color}]}>
                <Text key={item.id}>{item.title}</Text>
            </View>} keyExtractor={(item)=>item.id}/>


    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: "wrap",
    },

    box: {
        width: 160,
        height: 160,
        margin: 4,
        borderRadius: 10,
        elevation: 4,

        shadowColor: 'black',
        shadowRadius: 4,
        shadowOffset: {width: 0, height: 0},

        justifyContent: 'center',
        alignItems: 'center',
    },

})
