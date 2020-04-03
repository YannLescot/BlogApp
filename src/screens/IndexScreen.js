import React, {useContext} from 'react'
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native'
import { Context } from '../context/BlogContext'
import {Entypo} from '@expo/vector-icons'
import {AntDesign} from '@expo/vector-icons'
import { NavigationEvents } from 'react-navigation'

const IndexScreen = ({ navigation }) => {
    const {state, addBlogPost, deleteBlogPost} = useContext(Context)

    return (
        <View>
            <FlatList 
                data={state}
                keyExtractor={ (blogPost) => blogPost.title}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
                            <View style={styles.flatListContainer}>
                                <Text style={styles.text}>{item.title} - {item.id}</Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                <Entypo name="trash" style={styles.trashIcon}/>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => <TouchableOpacity onPress={ () => navigation.navigate('Create') }>
            <AntDesign name="pluscircle" style={styles.plusIcon} />
        </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    flatListContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,

        borderColor: 'grey',
    },
    text: {
        fontSize: 18,

    },
    trashIcon: {
        fontSize: 24,
        marginRight: 5,
    },
    plusIcon: {
        fontSize: 30,
        marginRight: 25,
    }

})

export default IndexScreen;