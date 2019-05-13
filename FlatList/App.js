import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, SectionList, } from 'react-native';

export default class FlatListBasics extends Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <FlatList
            data={[
              { key: 'Devin' },
              { key: 'Jackson' },
              { key: 'James' },
              { key: 'Joel' },
              { key: 'John' },
              { key: 'Jillian' },
              { key: 'Jimmy' },
              { key: 'Julie' },
              { key: 'January' },
              { key: 'Febrary' },
              { key: 'March' },
              { key: 'April' },
              { key: 'May' },
              { key: 'June' },
              { key: 'July' },
              { key: 'August' },
            ]}
            renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
          />
        </View>

        <View style={styles.container2}>
          <SectionList
            sections={[
              { title: 'D', data: ['Devin'] },
              { title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'] },
            ]}
            renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
            renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
            keyExtractor={(item, index) => index}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // FlatList部分
  container: {
    //  flex: 1,
    height: 250,
    padding: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

  // Section部分
  container2: {
    height: 100,
    paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})