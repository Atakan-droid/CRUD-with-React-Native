import React, { Component } from 'react'
import { Text, StyleSheet, View, Button,FlatList } from 'react-native'
import { getBlogs,deleteBlogs } from '../actions';
import { connect } from 'react-redux';
import _ from 'lodash';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Blog extends Component {

    componentDidMount() {
        this.props.getBlogs()
    }
    render() {
        console.log('Blogs.js',this.props.listOfBlogs)
        return (
            <View style={styles.container}>
                <FlatList style={{width:'100%' }}
                    data={this.props.listOfBlogs}
                    keyExtractor={(item) => item.key}
                    renderItem={({ item }) => {
                    
                        return (
                            <View style={styles.View1}>
                                <Text style={styles.text1}>{item.title}
                                </Text>
                                <Text>{item.content}
                                </Text>
                                <View style={{flexDirection:'row',justifyContent: 'space-between',marginTop:20}} >
                                    <TouchableOpacity onPress={()=> this.props.deleteBlogs()} >
                                        <Button  title='Delete' />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('Edit',{...item})} >
                                        <Button title='Edit' />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                }}/>
            </View>
        )
    }
}
function mapStateToProps(state) {

    const listOfBlogs = _.map(state.blogsList.blogsList, (val, key) => {
        return {
            ...val,
            key:key
        }
    }) 
    return {
        listOfBlogs
    }
};
export default connect(mapStateToProps, { getBlogs ,deleteBlogs})(Blog);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#fff',
    },
    View1: {
        elevation: 8,
        margin:15,
        borderRadius: 10,
        backgroundColor: '#42c155',
        padding:20
    },
    text1: {
        fontSize: 20,
        color: '#fff',
        borderBottomEndRadius:10,
        borderColor: 'black',
        fontWeight: 'bold'
        
    }
})
