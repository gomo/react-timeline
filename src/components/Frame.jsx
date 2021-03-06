import React from 'react';
import TimeSpan from '../classes/TimeSpan';
import Line from './Line';
import classNames from 'classnames';
import { DragDropContext } from 'react-dnd';
import DndBackend from 'react-dnd-touch-backend';
import EventPreview from './EventPreview';
import Event from './Event';
import Ruler from './Ruler';
import LineLabel from './LineLabel';
import { DropTarget } from 'react-dnd';


const target = {
  drop(props, monitor, component) {
    const item = monitor.getItem();
    const delta = monitor.getDifferenceFromInitialOffset();

    const initalOffset = item.draggingComponent.getOffset();
    const top = Math.round(initalOffset.top + delta.y);
    const left = Math.round(initalOffset.left + delta.x);

    item.draggingComponent.moveTo(top, left);
  },
  hover(props, monitor, component){
    const clientOffset = monitor.getSourceClientOffset();
    if(clientOffset){
      const item = monitor.getItem();
      const lineWrapperBounds = component.refs.linesWrapper.getBoundingClientRect();
      const lineComponent = props.timeline.draggingOver(clientOffset.x - lineWrapperBounds.left + (item.draggingComponent.props.width / 2/*eventの真ん中を基準にする*/));
      const time = props.timeline.topToTime(clientOffset.y + component.refs.linesWrapper.scrollTop - lineWrapperBounds.top);
      item.draggingComponent.dragging(time, lineComponent ? lineComponent.props.id : null);
    }
  },
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  };
}

class Frame extends React.Component
{
  constructor(props) {
    super(props);

    const rulerInterval = 4;

    this.state = {
      minWidth: 0,
    }

    this.resizingEvent = null;
    this.element = null;
    this.props.timeline.frameComponent = this;
  }

  resizeUp(eventComponent, clickedTop){
    const initialHeight = eventComponent.state.height;
    const prevBottom = this.props.timeline.getPrevBottom(eventComponent);
    const mouseMoveEvent = (moveEvent) => {
      eventComponent.resizing = true;
      const targetHeight = initialHeight + clickedTop - moveEvent.clientY;
      if(targetHeight > 36){
        let targetTop = eventComponent.state.top - (targetHeight - eventComponent.state.height);
        if(targetTop <= prevBottom){
          targetTop = prevBottom;
        }

        eventComponent.resizingTimeSpan = new TimeSpan(this.props.timeline.topToTime(targetTop), eventComponent.currentTimeSpan.getEndTime());
        eventComponent.setState({
          height: this.props.timeline.timeSpanToHeight(eventComponent.resizingTimeSpan),
          top: this.props.timeline.timeToTop(eventComponent.resizingTimeSpan.getStartTime()),
          draggingDisplay: eventComponent.resizingTimeSpan.getStartTime().getDisplayTime()
        });
      }
    };

    const stopMoveEvent = (mouseEvent) => {
      this.refs.linesWrapper.removeEventListener('mousemove', mouseMoveEvent);
      this.refs.linesWrapper.removeEventListener('mouseup', stopMoveEvent);
      this.refs.linesWrapper.removeEventListener('mouseleave', stopMoveEvent);
      eventComponent.endResizing(mouseEvent);
    };

    this.refs.linesWrapper.addEventListener('mousemove', mouseMoveEvent);
    this.refs.linesWrapper.addEventListener('mouseup', stopMoveEvent);
    this.refs.linesWrapper.addEventListener('mouseleave', stopMoveEvent);
  }

  resizeDown(eventComponent, clickedTop){
    const initialHeight = eventComponent.state.height;
    const nextTop = this.props.timeline.getNextTop(eventComponent);
    const mouseMoveEvent = (moveEvent) => {
      eventComponent.resizing = true;
      const targetHeight = initialHeight + moveEvent.clientY - clickedTop;
      if(targetHeight > 36){
        let targetBottom = eventComponent.state.top + targetHeight;
        if(targetBottom >= nextTop){
          targetBottom = nextTop;
        }

        eventComponent.resizingTimeSpan = new TimeSpan(eventComponent.currentTimeSpan.getStartTime(), this.props.timeline.topToTime(targetBottom));
        eventComponent.setState({
          height: this.props.timeline.timeSpanToHeight(eventComponent.resizingTimeSpan),
          draggingDisplay: eventComponent.resizingTimeSpan.getEndTime().getDisplayTime(),
          draggingDisplayTop: targetHeight - 10
        });
      }
    };

    const stopMoveEvent = (mouseEvent) => {
      this.refs.linesWrapper.removeEventListener('mousemove', mouseMoveEvent);
      this.refs.linesWrapper.removeEventListener('mouseup', stopMoveEvent);
      this.refs.linesWrapper.removeEventListener('mouseleave', stopMoveEvent);
      eventComponent.endResizing(mouseEvent);
    };

    this.refs.linesWrapper.addEventListener('mousemove', mouseMoveEvent);
    this.refs.linesWrapper.addEventListener('mouseup', stopMoveEvent);
    this.refs.linesWrapper.addEventListener('mouseleave', stopMoveEvent);
  }

  setHeight(height){
    this.setState({height: height});
  }

  getRelativePos(e){
    return {
      top: e.clientY - e.currentTarget.offsetTop + e.currentTarget.scrollTop,
      left: e.clientX - e.currentTarget.offsetLeft + e.currentTarget.scrollLeft
    };
  }

  componentDidMount(){
    const newState = {
      minWidth: this.props.timeline.getTotalWidth()
    }

    this.setState(newState, this.correctOutsideEvents);
  }

  componentWillReceiveProps(nextProps){
    const newState = {};

    if(nextProps.lineData !== this.props.lineData){
      newState.minWidth = this.props.timeline.getTotalWidth()
    }

    this.setState(newState, this.correctOutsideEvents)
  }

  correctOutsideEvents(){
    this.props.timeline.eventComponents.forEach(event => event.correctPosition())
  }

  render(){
    const { connectDropTarget } = this.props;
    return (
      <div ref={elem => this.element = elem} className="tlFrameView scrollWrapper" style={{width: this.props.width, overflowX: 'auto'}}>
        <div style={{minWidth: this.state.minWidth + this.props.childWidth, display:"flex"}}>
          {(() => {
            return connectDropTarget(
              <div className="linesFrame" style={{width: this.state.minWidth, overflow: 'hidden'}}>
                <div style={{width: this.state.minWidth + 20}}>
                  <div className="tlLabelView" style={{height: LineLabel.height}}>
                    {this.props.lineData.map((data, key) => {
                      const hasRuler = key % this.props.rulerInterval === 0;
                      const prevRuler = (key + 1) % this.props.rulerInterval === 0;
                      return(
                        <LineLabel
                          key={data.id + "@" + key}
                          width={this.props.lineWidth}
                          hasRuler={hasRuler}
                          prevRuler={prevRuler}
                          label={data.label}
                          timeline={this.props.timeline}
                          isLast={key == this.props.lineData.length - 1}
                        />
                      )
                    })}
                  </div>
                  <div ref="linesWrapper" className="tlLinesWrapper scrollWrapper" style={{height: this.props.height - LineLabel.height}}>
                    <div style={{height: this.props.lineHeight, overflowY: "hidden", position:"relative"}}>
                      {this.props.lineData.map((data, key) => {
                        const hasRuler = key % this.props.rulerInterval === 0;
                        const prevRuler = (key + 1) % this.props.rulerInterval === 0;
                        return(
                          <Line
                            ref={"line@" + data.id}
                            hasRuler={hasRuler}
                            key={data.id + "@" + key}
                            id={data.id}
                            width={this.props.lineWidth}
                            minHeight={this.props.minHeight}
                            timeSpan={this.props.timeSpan}
                            even={key % 2 === 0}
                            timeline={this.props.timeline}
                            vars={data.vars}
                            frame={this}
                          />
                        )
                      })}
                      {this.props.events.map(event => {
                        return (
                          <Event
                            ref={"event@" + event.id}
                            key={event.id}
                            id={event.id}
                            initialColor={event.color}
                            initialTimeSpan={event.timeSpan}
                            initialDisplay={event.display}
                            initialLineId={event.lineId}
                            timeline={this.props.timeline}
                            width={this.props.timeline.props.lineWidth - 2 - (Line.sidePadding * 2)}
                            vars={event.vars}
                            float={event.float}
                          />
                        )
                      })}
                    </div>
                    <EventPreview timeline={this.props.timeline} />
                  </div>
                </div>
              </div>
            )
          })()}
          <div>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

// Frame.propTypes = {
//   timeSpan: React.PropTypes.instanceOf(TimeSpan).isRequired,
//   lineData: React.PropTypes.arrayOf(React.PropTypes.shape({
//     id: React.PropTypes.string.isRequired,
//     label: React.PropTypes.string.isRequired
//   })).isRequired,
//   lineWidth: React.PropTypes.number.isRequired,
//   minHeight: React.PropTypes.number.isRequired,
//   onClick: React.PropTypes.func,
//   timeline: React.PropTypes.any.isRequired,
//   rulerInterval: React.PropTypes.number.isRequired,
//   height: React.PropTypes.number.isRequired
// }

Frame.defaultProps = {
  events: [],
  childWidth: 0
};

export default DragDropContext(DndBackend({ enableMouseEvents: true }))(DropTarget("Event", target, collect)(Frame));
