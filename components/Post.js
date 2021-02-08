import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { postBlogs } from '../actions';
import { connect } from 'react-redux';

class Post extends Component {

    state = {
        title: "",
        content:"",
    }
    submit = () => {
        this.props.postBlogs(this.state.title,this.state.content)
        console.log('----------', this.state);
        this.setState({
            title: "",
            content:"",
        })
        this.props.navigation.navigate('NavStack')
    }
    render() {
        return (
            <View style={styles.container}>
                <Text> Post There!!! </Text>
                <TextInput style={styles.textInput1}
                    placeholder="Title"
                    onChangeText={title => this.setState({ title })}
                    value={this.state.title} />
                <TextInput style={styles.textInput2}
                    placeholder="Content"
                    onChangeText={content => this.setState({ content })}
                    value={this.state.content} />
                <Button title="Submit" onPress={this.submit} />
            </View>
        )
    }
}
export default connect(null, { postBlogs })(Post)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin:5,
        backgroundColor:'#fff',
    },
    textInput1:{
        marginTop: 20,
        marginBottom: 20,
        
        height:50,
        
        width: 300,
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth:2,
    },
    textInput2:{
        marginTop: 20,
        marginBottom:50,
        height: 100,
        
        
        width: 300,
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth:2,
    }
})