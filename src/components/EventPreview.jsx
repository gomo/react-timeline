import React from 'react';
import {DragLayer} from 'react-dnd';
import EventBase from './EventBase';
import assign from 'object-assign';

function collect (monitor){
  const props = {
    clientOffset: monitor.getDifferenceFromInitialOffset()
  };

  const item = monitor.getItem();
  if(item && item['draggingComponent']){
    props['draggingComponent'] = item['draggingComponent'];
  }

  return props;
}

class EventPreview extends React.Component {
  getItemStyles () {
    if (!this.props.clientOffset) {
      return {
        display: 'none'
      };
    }

    const x = this.props.clientOffset.x;
    const y = this.props.clientOffset.y;
    const transform = `translate(${x}px, ${y}px)`;

    return assign(this.props.draggingComponent.getDraggingStyle(), {
      position:'absolute',
      transform: transform,
      WebkitTransform: transform
    });
  }

  getRight(){
    if(!this.props.draggingComponent) return undefined

    const width = this.props.draggingComponent.props.width
    if(this.props.clientOffset){
      return this.props.draggingComponent.state.left + this.props.clientOffset.x + width
    } else {
      return this.props.draggingComponent.state.left + width
    }
  }

  render () {

    let draggingDisplay = '';
    if(this.props.draggingComponent && this.props.draggingComponent.state.draggingDisplay){
      draggingDisplay = this.props.draggingComponent.state.draggingDisplay;
    }

    let display = [];
    if(this.props.draggingComponent && this.props.draggingComponent.state.display){
      display = this.props.draggingComponent.state.display;
    }
    return (
      <div ref="preview" className="tlEventView tlDraggingEvent" style={this.getItemStyles()}>
        <EventBase
          draggingDisplay={draggingDisplay}
          display={display}
          timeline={this.props.timeline}
          right={this.getRight()}
        />
      </div>
    );
  }
}

export default DragLayer(collect)(EventPreview);
