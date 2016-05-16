export default class Actions
{
  constructor(){
    this.lines = {};
  }

  setLine(lineId, line){
    this.lines[lineId] = line;
  }

  addEvents(events){
    const lineEvents = {};
    events.forEach(event => {
      if(lineEvents[event.lineId] == undefined){
        lineEvents[event.lineId] = [];
      }

      lineEvents[event.lineId].push(event);
    });

    for(var lineId in lineEvents){
      this.lines[lineId].addEvents(lineEvents[lineId]);
    }
  }
}
