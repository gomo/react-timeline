import React from 'react';
import DragLayer from 'react-dnd/lib/DragLayer';
import EventBase from './EventBase';

function collect (monitor){
  const props = {
    clientOffset: monitor.getSourceClientOffset()
  };
  const item = monitor.getItem();
  if(item){
    props['event'] = item.timeline.findEventById(item.id);
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
    return {
      position:'absolute',
      top: 0,
      left: 0,
      height: this.props.event.state.height,
      width: this.props.event.props.width,
      backgroundColor: this.props.event.state.color,
      transform: transform,
      WebkitTransform: transform
    };
  }

  render () {
    return (
      <div ref="preview" className="tlEventView tlDraggingEvent" style={this.getItemStyles()}>
        <EventBase
          draggingDisplay={this.props.event ? this.props.event.state.draggingDisplay : ''}
        />
      </div>
    );
  }
}

export default DragLayer(collect)(EventPreview);
