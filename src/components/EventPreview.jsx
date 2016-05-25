import React from 'react';
import DragLayer from 'react-dnd/lib/DragLayer';

function collect (monitor){
  const props = {
    clientOffset: monitor.getSourceClientOffset()
  };
  const item = monitor.getItem();
  if(item){
    props['event'] = item.timeline.actions.findEventByProps(item);
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

    const parentBounds = this.refs.preview.parentNode.getBoundingClientRect();
    const x = this.props.clientOffset.x;
    const y = this.props.clientOffset.y;
    const transform = `translate(${x}px, ${y}px)`;
    return {
      position:'absolute',
      top: 0,
      left: 0,
      height: this.props.event.state.height,
      width: this.props.event.state.width,
      backgroundColor: this.props.event.state.color,
      transform: transform,
      WebkitTransform: transform
    };
  }

  render () {
    return (
      <div ref="preview" className="tlEventView tlDraggingEvent" style={this.getItemStyles()}>
        &nbsp;
      </div>
    );
  }
}

export default DragLayer(collect)(EventPreview);
