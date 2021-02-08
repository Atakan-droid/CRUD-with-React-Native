import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { editBlogs } from '../actions';
import { connect } from 'react-redux';

class Edit extends Component {

    state = {
        title: this.props.navigation.state.params.title,
        content: this.props.navigation.state.params.content,
        key:this.props.navigation.state.params.key
    }
    submit = () => {
        this.props.editBlogs(this.state.title, this.state.content, this.state.key);
        this.setState({ title: "", content: "", key: "" });
        this.props.navigation.navigate('Blogs');
    }
    render() {
        return (
            <View style={styles.container}>
               
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
export default connect(null, { editBlogs })(Edit)
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