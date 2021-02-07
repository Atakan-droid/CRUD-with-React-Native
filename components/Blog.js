import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

export default class Blog extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Blog burada!!! </Text>
                <Button
                    title="Go to Edit"
                    onPress={() => this.props.navigation.navigate('Edit')} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#fff',
    }
})
