import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput, Button } from 'react-native'

const BlogPostForm = ({ onSubmit, initialValues }) => {

    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);


    return (
        <View>
            <Text style={styles.titles}>Enter title:</Text>
            <TextInput style={styles.textInputs} value={title} onChangeText={(text) => setTitle(text)} />

            <Text style={styles.titles} >Enter content:</Text>
            <TextInput style={styles.textInputs} value={content} onChangeText={(text) => setContent(text)} />

            <Button
            title="Save Blog Post"
            onPress={() => onSubmit(title, content)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textInputs: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
        padding: 5,
        marginHorizontal: 5,
    },
    titles: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5,
    },
})

export default BlogPostForm