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
    this.lineTimeSpan = config.lineTimeSpan.addMin(60);

    //minViewがいくつあるかカウント。minViewは15分おき
    const minViewCount = (this.lineTimeSpan.getDistance() / 15);

    //高さを計算。border分1px足す
    this.lineHeight = minViewCount * (config.minHeight + 1);

    //1分あたりの高さを算出
    this.perMinHeight = this.lineHeight / this.lineTimeSpan.getDistance();

    this.events = [];

    this.lines = [];

    //横幅を計算するためにrulerとlineの幅が入っている
    this.widths = [];
  }

  getTotalWidth(){
    return this.widths.reduce((prev, current) => prev + current, 0);
  }

  addEvent(event){
    this.events.push(event);
  }

  addWidth(index, width){
    if(this.widths[index] === undefined){
      this.widths[index] = 0;
    }

    this.widths[index] += width;
  }

  getLineLeft(lineId){
    const index = this.lines.findIndex(line => line.props.lineId == lineId);
    var left = 0;
    for (var i = 0; i < index; i++) {
      left += this.widths[i];
    }

    return left;
  }

  addLine(line){
    this.lines.push(line);
  }

  addEvents(events){
    this.frame.addEvents(events);
  }

  timeSpanToHeight(timeSpan){
    return (timeSpan.getDistance() * this.perMinHeight) - 1;
  }

  timeToTop(time){
    return this.lineTimeSpan.getStartTime().getDistance(time) * this.perMinHeight;
  }

  topToTime(top){
    return this.lineTimeSpan.getStartTime().addMin(top / this.perMinHeight);
  }
}
