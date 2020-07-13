import React, { Component } from 'react';
import sizeMe from 'react-sizeme'
import { SegmentedControl, SegmentedControlItem, Text } from 'react-desktop/macOs';

class ClientScorce extends Component {
  constructor() {
    super();
    this.state = { selected: 1 }
  }

  render() {
    // const widthM = (width , col)=>{
    //   let colgrid = width / 12
    //   return colgrid * col 
    // }
    // const heightM =(height ,row)=>{
    //   let rowgrid = height /12
    //   return rowgrid * row
    // }

    return (

      <SegmentedControl 
      box
      >
        {this.renderItems()}
      </SegmentedControl>
     
    );
  }

  renderItems() {
    return [
      this.renderItem(1, 'Tables', <Text>Content 1</Text>),
      this.renderItem(2, 'Take Away', <Text>Content 2</Text>),
      this.renderItem(3, 'Online', <Text>Content 3</Text>)
    ];
  }

  renderItem(key, title, content) {

    return (
     
      <SegmentedControlItem
        key={key}
        title={title}
        selected={this.state.selected === key}
        onSelect={() => this.setState({ selected: key })}
      >
        {content}
      </SegmentedControlItem>
      
    );
  }
}
export default sizeMe({ monitorHeight: true })(ClientScorce);