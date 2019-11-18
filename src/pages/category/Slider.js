import React from 'react'
import { Tabs, WhiteSpace } from 'antd-mobile';
import Content from './Content'

export default class Slider extends React.Component {
  renderContent = tab => {
    return (
      <div style={{ height: '100%', overflow:'auto',backgroundColor: '#fff' }}>
         { tab.floors.map( (item,index) => <Content key = { index } { ...item } />)}
      </div>
  );
  }

  render() {
    const { data } = this.props 
    console.log(this.props.data)
    return (
       <Tabs 
         tabs={ data }
         renderTabBar={props => <Tabs.DefaultTabBar {...props} page={ 11 } />}
         tabBarPosition = "left"
      
       >
         {this.renderContent}
       </Tabs> 
    );
  }
}
