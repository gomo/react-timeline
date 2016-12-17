import Event from '../components/Event';

export default class TimelineActions
{
  constructor(component){
    this.component = component;
  }

  addEvents(events){
    return this.component.frameComponent.addEvents(events);
  }

  setHeight(height){
    this.component.frameComponent.setHeight(height);
  }

  removeEvent(eventId){
    this.component.frameComponent.removeEvent(eventId);
  }

  getLineLeft(lineId){
    return this.component.getLineLeft(lineId);
  }

  getTimeSpan(top, height){
    return this.component.getTimeSpan(top, height);
  }

  timeSpanToHeight(timeSpan){
    return this.component.timeSpanToHeight(timeSpan);
  }

  timeToTop(time){
    return this.component.timeToTop(time);
  }

  topToTime(top){
    return this.component.topToTime(top);
  }
}
