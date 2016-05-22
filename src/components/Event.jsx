import React from 'react';
import classNames from 'classnames';
import TimeSpan from '../classes/TimeSpan';
import {DragSource} from 'react-dnd';

const source = {
  beginDrag: function (props) {
    console.log(props)
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
    this.line = this.props.line;
    this.line.events.addEvent(this);

    this.state = {
      height: this.line.timeline.util.timeSpanToHeight(this.props.timeSpan),
      top: this.line.timeline.util.timeToTop(this.props.timeSpan.getStartTime()),
      color: this.props.color
    }
  }

  toFloat(){

  }

  render(){
    const style = {
      height: this.state.height,
      position: 'absolute',
      top: this.state.top + 'px',
      width: this.line.props.width - 2 + 'px',
      backgroundColor: this.state.color
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
  line: React.PropTypes.any.isRequired
}

export default DragSource("Event", source, collect)(Event);
