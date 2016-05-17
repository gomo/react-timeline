export default class Events
{
  constructor(){
    this.events = [];
  }

  addEvent(event){
    this.events.push(event);
  }

  find(callback){
    return this.events.find(callback);
  }
}
