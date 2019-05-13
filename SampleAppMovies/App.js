import React, {Component} from 'react';
import {
  Platform,
  StyleSheet, 
  Text, 
  View,
  Image,
  FlatList,} from 'react-native';

var REQUEST_URL ="https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";

// var MOCKED_MOVIES_DATA = [
//   {
//     title: "标题",
//     year: "2015",
//     posters: { thumbnail: "http://i.imgur.com/UePbdph.jpg" }
//   }
// ];

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

export default class SampleAppMovies extends Component {
  constructor(props) {
    super(props);   //这一句不能省略，照抄即可
    this.state = {
      // movies: null,  //这里放你自己定义的state变量及初始值
      data: [],
      loaded: false,
    };
    // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向不对
    // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
    this.fetchData = this.fetchData.bind(this);
  }
// componentDidMount是 React 组件的一个生命周期方法，它会在组件刚加载完成的时候调用一次，以后不会再被调用。
  componentDidMount() {
    this.fetchData();
  }
// 请求数据
  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
        this.setState({
          // movies: responseData.movies,
          data: this.state.data.concat(responseData.movies),
          loaded: true,
        });
      });
  }

  render() {
    // var movie = MOCKED_MOVIES_DATA[0];
    if (!this.state.movies){
      return this.renderLoadingView();
    }
    // var movie = this.state.movies[0];   
    // return this.renderMovie(movie)     // 返回单个影片
    return (
      <FlatList
        data={this.state.data}
        renderItem={this.renderMovie}
        style={styles.list}
        keyExtractor={item => item.id}
      />
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          正在加载电影数据……
        </Text>
      </View>
    );
  }
  renderMovie(item) {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: item.posters.thumbnail}}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.year}>{item.year}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  thumbnail: {
    marginLeft: 1,
    width: 53,
    height: 81,
    backgroundColor: 'black',
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  list: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});
