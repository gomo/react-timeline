export default class Util
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
    //MinViewは一時間下に余分が生成されるので60分プラス
    this.lineTimeSpan = config.lineTimeSpan.addMin(60);

    //minViewがいくつあるかカウント。minViewは15分おき
    const minViewCount = (this.lineTimeSpan.getDistance() / 15);

    //高さを計算。border分1px足す
    this.lineHeight = minViewCount * (config.minHeight + 1);

    //1分あたりの高さを算出
    this.perMinHeight = this.lineHeight / this.lineTimeSpan.getDistance();
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
