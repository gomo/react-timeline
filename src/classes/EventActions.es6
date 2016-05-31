export default class EventActions
{
  constructor(component){
    this.component = component;
  }

  flexible(){
    this.component.setState({
      flexible: true
    });
  }

  float(){
    this.component.setState({
      draggable: true,
      draggingDisplay: this.component.timeSpan.getStartTime().getDisplayTime()
    });
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
    } else {
      this.component.setState({
        draggable: false,
        draggingDisplay: ''
      });
    }

    this.component.props.timeline.clearDraggingOver();
  }
}
