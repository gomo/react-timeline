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

  isFixable(){
    var newPosition = this.component.nextPosition;
    if(!newPosition){
      return true;
    }

    return this.component.isFreePosition(newPosition);
  }

  isCancelable(){
    var newPosition = this.component.prevPosition;
    if(!newPosition){
      return true;
    }

    return this.component.isFreePosition(newPosition);
  }

  cancel(){
    if(this.component.draggingPosition){
      const left = this.component.props.timeline.getLineLeft(this.component.lineId);
      const top = this.component.props.timeline.timeToTop(this.component.timeSpan.getStartTime());
      this.component.draggingPosition = null;
      this.component.setState({
        draggable: false,
        draggingDisplay: '',
        top: top,
        left: left
      });
    } else if(this.component.resizingTimeSpan){
      const top = this.component.props.timeline.timeToTop(this.component.timeSpan.getStartTime());
      const height = this.component.props.timeline.timeSpanToHeight(this.component.timeSpan);
      this.component.resizingTimeSpan = null;
      this.component.setState({
        resizable: false,
        draggingDisplay: '',
        top: top,
        height: height
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

  remove(){
    this.component.props.timeline.actions.removeEvent(this.component.props.id);
  }

  fix(){
    if(this.component.draggingPosition){
      const state = {
        top: this.component.props.timeline.timeToTop(this.component.draggingPosition.time),
        left: this.component.props.timeline.getLineLeft(this.component.draggingPosition.lineId),
        draggable: false,
        draggingDisplay: ''
      };
      const newTimeSpan = this.component.timeSpan.shiftStartTime(this.component.draggingPosition.time);
      if(this.component.props.timeline.props.eventWillFix){
        this.component.props.timeline.props.eventWillFix({
          component: this.component,
          state: state,
          lineId: this.component.draggingPosition.lineId,
          timeSpan: newTimeSpan
        })
      }
      this.component.setState(state);
      this.component.lineId = this.component.draggingPosition.lineId;
      this.component.timeSpan = newTimeSpan;
      this.component.draggingPosition = null;
    } else if(this.component.resizingTimeSpan){
      const state = {
        resizable: false,
        draggingDisplay: ''
      }
      if(this.component.props.timeline.props.eventWillFix){
        this.component.props.timeline.props.eventWillFix({
          component: this.component,
          state: state,
          lineId: this.component.lineId,
          timeSpan: this.component.resizingTimeSpan
        })
      }
      this.component.setState(state);
      this.component.timeSpan = this.component.resizingTimeSpan;
      this.component.resizingTimeSpan = null;
    } else {
      this.component.setState({
        draggable: false,
        resizable: false,
        draggingDisplay: ''
      });
    }

    this.component.props.timeline.clearDraggingOver();
    if(this.component.props.timeline.props.eventDidFix){
      this.component.props.timeline.props.eventDidFix({
        component: this.component
      })
    }
  }

  setVar(key, value){
    this.component.vars[key] = value;
  }

  getVar(key){
    return this.component.vars[key];
  }
}
