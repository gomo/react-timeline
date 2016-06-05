import Event from '../components/Event';

export default class TimelineActions
{
  constructor(component){
    this.component = component;
  }

  addEvents(events){
    this.component.frameComponent.addEvents(events);
  }

  setHeight(height){
    this.component.frameComponent.setHeight(height);
  }
}
