import React, { Component } from 'react';
import { 
  Alert, Button, StyleSheet, AppRegistry, Text, TextInput, View, 
  Platform, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback,
  ScrollView, } from 'react-native';

const styles = StyleSheet.create({
  // 按钮的样式
  container: {
   flex: 1,
   flexDirection: 'row',
   justifyContent: 'center',
   alignItems: 'flex-start',
   margin: 10,
  },
  buttonContainer: {
    margin: 20,
    backgroundColor: 'blue',
    height: 200,
    width: 200,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    height: 200,
    width: 200,
  },

  // 翻译框的样式
  translator: {
    padding: 10,
  },

  // Touchable组件样式
  container2: {
    paddingTop: 60,
    alignItems: 'center',
    margin: 10,
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
})

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  _onLongPressButton() {
    Alert.alert('You long-pressed the button!')
  }

  render() {
    return (
      <View style = {{flex:1}}>
        {/*  onChange部分 */}
        <View style={styles.translator}>
          <TextInput
            style={{height: 40}}
            placeholder="Type here to translate!"
            onChangeText={(text) => this.setState({text})}
          />
          <Text style={{padding: 10, fontSize: 42}}>
          {/* 按照'空格'为阻断分隔text，结果为数组a，map数组a中每一个元素与😄做&&运算，输出并加上一个空格 */}
            {this.state.text.split(' ').map((a) => a && '😄').join(' ')}
          </Text>
        </View>

        {/*  按钮部分 */}
        <View style={styles.container}>
        {/* 这里增加了一个ScrollView滚动视图 */}
        <ScrollView style = {{height: 200,}}>
          <View style={styles.buttonContainer}>
            <Button
              onPress={this._onPressButton}
              title="Press Me"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              onPress={this._onPressButton}
              title="Press Me"
              color="#841584"
            />
          </View>
          <View style={styles.alternativeLayoutButtonContainer}>
            <Button
              onPress={this._onPressButton}
              title="This looks great!"
            />
            <Button
              onPress={this._onPressButton}
              title="OK!"
              color="#841584"
            />
          </View>
          </ScrollView>
        </View>
        
        {/* Touchable */}
        <View style={styles.container2}>
        <TouchableHighlight onPress={this._onPressButton} underlayColor="red">
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>
        <TouchableNativeFeedback
            onPress={this._onPressButton}
            background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableWithoutFeedback
            onPress={this._onPressButton}
            >
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Touchable with Long Press</Text>
          </View>
        </TouchableHighlight>
      </View>

      </View>
    );
  }
}

// AppRegistry.registerComponent('event', () => ButtonBasics);
