import React, {useContext} from 'react'
import {Context} from '../context/BlogContext'
import { StyleSheet} from 'react-native'
import BlogPostForm from '../components/BlogPostForm'

    const EditScreen = ({navigation}) => {
        const id = navigation.getParam('id')
        const {state, editBlogPost} = useContext(Context);
        
        const blogPost = state.find(
            blogPost => blogPost.id === id);

    return ( 
        <BlogPostForm
        initialValues={{ title: blogPost.title, content: blogPost.content}}
        onSubmit={(title, content) => {
            editBlogPost(id, title, content, () => navigation.pop() )
        }} />
    )
}

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: '',
    }
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

export default EditScreen