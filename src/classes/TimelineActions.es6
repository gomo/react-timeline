export default class TimelineActions
{
  constructor(component){
    this.component = component;
  }

  isFree(eventComponent){
    var newPosition = eventComponent.getDraggingPosition();
    if(!newPosition){
      return true;
    }

    for (var i = 0; i < this.component.eventComponents.length; i++) {
      let ev = this.component.eventComponents[i];
      if(ev === eventComponent) continue;
      if(ev.lineId != newPosition.lineId) continue;
      if(ev.timeSpan.overlaps(newPosition.timeSpan)){
        return false;
      }
    }

    return true;
  }

  addEvents(events){
    this.component.frameComponent.addEvents(events);
  }

  setHeight(height){
    this.component.frameComponent.setHeight(height);
  }
}
