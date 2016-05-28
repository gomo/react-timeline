import Ruler from '../components/Ruler';

export default class Actions
{
  static get windowSize(){
    const width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

    const height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

    return {width: width, height: height};
  }

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
    const index = this.lineComponents.findIndex(line => line.props.lineId == lineId);
    var left = 0;
    for (var i = 0; i < index; i++) {
      var line = this.lineComponents[i];
      left += (line.props.hasRuler ? this.lineWidth + Ruler.width : this.lineWidth)
    }

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
