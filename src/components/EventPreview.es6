import React from 'react';
import DragLayer from 'react-dnd/lib/DragLayer';

function collect (monitor){
  return {
    clientOffset: monitor.getSourceClientOffset(),
    eventProps: monitor.getItem()
  };
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
      height: this.props.eventProps.timeline.actions.timeSpanToHeight(this.props.eventProps.timeSpan),
      width: this.props.eventProps.timeline.actions.lineWidth - 2 + 'px',
      backgroundColor: this.props.eventProps.color,
      transform: transform,
      WebkitTransform: transform
    };
  }

  render () {
    return (
      <div ref="preview" className="tlEventView" style={this.getItemStyles()}>
        &nbsp;
      </div>
    );
  }
}

export default DragLayer(collect)(EventPreview);
