import React from 'react';
import classNames from 'classnames';
import TimeSpan from '../classes/TimeSpan';
import {DragSource} from 'react-dnd';

const source = {
  beginDrag: function (props) {
    return props;
  }
}

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class Event extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      height: this.props.height,
      top: this.props.top,
      left: this.props.left,
      width: this.props.width,
      color: this.props.color
    }

    this.props.timeline.actions.addEventComponent(this);
  }

  toFloat(){

  }

  moveTo(top, left){
    this.setState({top: top, left: left});
  }

  render(){
    const style = {
      height: this.state.height,
      position: 'absolute',
      top: this.state.top + 'px',
      left: this.state.left + 'px',
      width: this.state.width + 'px',
      backgroundColor: this.state.color,
      display: this.props.isDragging ? 'none' : 'block'
    };

    return this.props.connectDragSource(
      <div className="tlEventView" style={style}>
        &nbsp;
      </div>
    );
  }
}

Event.propTypes = {
  timeSpan: React.PropTypes.instanceOf(TimeSpan).isRequired,
  color: React.PropTypes.string.isRequired,
  //TODO 循環参照になるのでimportできず。とりあえずanyでごまかしてます。
  timeline: React.PropTypes.any.isRequired
}

export default DragSource("Event", source, collect)(Event);
