export default class TimelineActions
{
  constructor(timelineComponent){
    this.timelineComponent = timelineComponent;
  }

  isFree(eventComponent){
    var newPosition = eventComponent.getDraggingPosition();
    if(!newPosition){
      return true;
    }

    for (var i = 0; i < this.timelineComponent.eventComponents.length; i++) {
      let ev = this.timelineComponent.eventComponents[i];
      if(ev === eventComponent) continue;
      if(ev.lineId != newPosition.lineId) continue;

      if(ev.timeSpan.overlaps(newPosition.timeSpan)){
        return false;
      }
    }

    return true;
  }

  addEvents(events){
    this.timelineComponent.frameComponent.addEvents(events);
  }

  setHeight(height){
    this.timelineComponent.frameComponent.setHeight(height);
  }
}
