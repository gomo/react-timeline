export default class EventActions
{
  constructor(component){
    this.component = component;
  }

  resize(){
    this.component.setState({
      resizable: true
    });
  }

  float(){
    this.component.setState({
      draggable: true,
      draggingDisplay: this.component.timeSpan.getStartTime().getDisplayTime()
    });
  }

  isFixed(){
    return !this.component.state.draggable && !this.component.state.resizable;
  }

  fix(){
    if(this.component.draggingPosition){
      this.component.lineId = this.component.draggingPosition.lineId;
      this.component.timeSpan = this.component.timeSpan.shiftStartTime(this.component.draggingPosition.time);
      this.component.setState({
        top: this.component.props.timeline.timeToTop(this.component.draggingPosition.time),
        left: this.component.props.timeline.getLineLeft(this.component.draggingPosition.lineId),
        draggable: false,
        draggingDisplay: ''
      });
      this.component.draggingPosition = null;
    } else if(this.component.resizingTimeSpan){
      this.component.timeSpan = this.component.resizingTimeSpan;
      this.component.resizingTimeSpan = null;
      this.component.setState({
        resizable: false,
        draggingDisplay: ''
      });
    } else {
      this.component.setState({
        draggable: false,
        resizable: false,
        draggingDisplay: ''
      });
    }

    this.component.props.timeline.clearDraggingOver();
  }
}
