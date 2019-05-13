React Native 提供了几个适用于展示长列表数据的组件，一般而言我们会选用FlatList或是SectionList。

FlatList组件用于显示一个垂直的滚动列表，其中的元素之间结构近似而仅数据不同。

FlatList更适于长列表数据，且元素个数可以增删。

FlatList组件必须的两个属性是data和renderItem。data是列表的数据源，而renderItem则从数据源中逐个解析数据，然后返回一个设定好格式的组件来渲染。

如果要渲染的是一组需要分组的数据，也许还带有分组标签的，那么SectionList将是个不错的选择