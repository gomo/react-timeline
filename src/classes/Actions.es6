import Ruler from '../components/Ruler';
import Line from '../components/Line';

export default class Actions
{
  constructor(config){
    this.lineWidth = config.lineWidth;

    //MinViewは一時間下に余分が生成されるので60分プラス
    this.timeSpan = config.timeSpan.addMin(60);

    //minViewがいくつあるかカウント。minViewは15分おき
    const minViewCount = (this.timeSpan.getDistance() / 15);

    //高さを計算。border分1px足す
    this.lineHeight = minViewCount * (config.minHeight + 1);

    //1分あたりの高さを算出
    this.perMinHeight = this.lineHeight / this.timeSpan.getDistance();

    this.eventComponents = [];

    this.lineComponents = [];

    this.lineLabelComponents = [];

    this.frameComponent = null;

    this.draggingOverLineConponent = null;

    this.createdEventId = 0;
  }

  isFree(eventComponent){
    var newPosition = eventComponent.getDraggingPosition();
    if(!newPosition){
      return true;
    }

    for (var i = 0; i < this.eventComponents.length; i++) {
      let ev = this.eventComponents[i];
      if(ev === eventComponent) continue;
      if(ev.lineId != newPosition.lineId) continue;

      if(ev.timeSpan.overlaps(newPosition.timeSpan)){
        return false;
      }
    }

    return true;
  }

  createEventId(){
    return 'new_' + (++this.createdEventId);
  }

  draggingOver(left){
    const lineComponent = this.findLineByLeft(left);
    if(lineComponent && this.draggingOverLineConponent !== lineComponent){
      if(this.draggingOverLineConponent){
        this.draggingOverLineConponent.clearDraggingOver();
      }
      this.draggingOverLineConponent = lineComponent;
      this.draggingOverLineConponent.draggingOver();
    }

    return lineComponent;
  }

  clearDraggingOver(){
    if(this.draggingOverLineConponent){
      this.draggingOverLineConponent.clearDraggingOver();
    }
  }

  getTotalWidth(){
    return this.lineComponents.reduce((val, line) => {
      return val + (line.props.hasRuler ? this.lineWidth + Ruler.width : this.lineWidth);
    }, 0);
  }

  addEventComponent(event){
    this.eventComponents.push(event);
  }

  findEventById(eventId){
    return this.eventComponents.find(ev => ev.props.id == eventId);
  }

  findLineByLeft(left){
    var width = 0;
    return this.lineComponents.find(line => {
      width += line.props.hasRuler ? this.lineWidth + Ruler.width : this.lineWidth;
      if(left < width){
        return line;
      }
    });
  }

  getLineLeft(lineId){
    let left = 0;
    for (var i = 0; i < this.lineComponents.length; i++) {
      var line = this.lineComponents[i];

      if(line.props.hasRuler){
        left += Ruler.width;
      }

      if(line.props.lineId == lineId){
        break;
      }

      left += this.lineWidth;
    }

    left += Line.sidePadding;

    return left;
  }

  addLineComponent(line){
    this.lineComponents.push(line);
  }

  addLineLabelComponent(line){
    this.lineLabelComponents.push(line);
  }

  timeSpanToHeight(timeSpan){
    return (timeSpan.getDistance() * this.perMinHeight) - 1;
  }

  timeToTop(time){
    return this.timeSpan.getStartTime().getDistance(time) * this.perMinHeight;
  }

  topToTime(top){
    if(top <= 0){
      return this.timeSpan.getStartTime();
    }
    return this.timeSpan.getStartTime().addMin(top / this.perMinHeight);
  }
}
