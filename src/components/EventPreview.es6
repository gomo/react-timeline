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
    //borderの幅を引く
    const borderHeight = parentBounds.height - this.refs.preview.parentNode.clientHeight;
    const borderWidth = parentBounds.width - this.refs.preview.parentNode.clientWidth;
    const x = this.props.clientOffset.x - parentBounds.left - (borderWidth ? borderWidth / 2 : 0);
    const y = this.props.clientOffset.y - parentBounds.top - (borderHeight ? borderHeight / 2 : 0);
    const transform = `translate(${x}px, ${y}px)`;
    return {
      position:'absolute',
      top: 0,
      left: 0,
      height: this.props.eventProps.line.timeline.util.timeSpanToHeight(this.props.eventProps.timeSpan),
      width: this.props.eventProps.line.props.width - 2 + 'px',
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
