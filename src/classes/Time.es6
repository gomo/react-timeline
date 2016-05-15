/**
 * 一度生成したオブジェクトは変更しません。
 * 変更メソッドは新しいオブジェクトを帰します。
 */
export default class Time
{
  static eachMin(callback, minuteInterval){
      var count = 60 / minuteInterval;
      for (var i = 0; i < count; i++) {
          var min = i * minuteInterval;
          if(min < 60){
              var displayMin = min < 10 ? '0' + min : min + '';
              callback.call(min, i, min, displayMin);
          }
      };
  };

  /**
   * 配列からTimeを生成
   * @param  {array} time [hour, min]の配列
   * @return {Time}
   */
  static create(time){
      return new Time(time[0], time[1]);
  };

  constructor(hour, min){
    this._hour = hour === undefined ? 0 : parseInt(hour, 10);
    this._min = min === undefined ? 0 : parseInt(min, 10);
    while(this._min < 0){
        --this._hour;
        this._min = 60 + this._min;
    }

    while(this._min > 59){
        ++this._hour;
        this._min = this._min - 60;
    }

    if(this._hour < 0)
    {
        throw new Error(this.toString()+' is not valid time.');
    }
  }

  getHour(){ return this._hour; };
  getMin(){ return this._min; };

  clone(){
      return new Time(this.getHour(), this.getMin());
  };

  addMin(min){
      return new Time(this.getHour(), this.getMin() + parseInt(min, 10));
  };

  equals(time){
      return this.getHour() === time.getHour() && this.getMin() === time.getMin();
  };

  compare(time){
      if(this.getHour() > time.getHour())
      {
          return 1;
      }
      else if(this.getHour() < time.getHour())
      {
          return -1;
      }
      else
      {
          if(this.getMin() > time.getMin())
          {
              return 1;
          }
          else if(this.getMin() < time.getMin())
          {
              return -1;
          }
      }

      return 0;
  };

  getDistance(targetTime){
      var targetHour = targetTime.getHour();
      var hourDistance = targetHour - this._hour;
      return (hourDistance * 60) + (targetTime.getMin() - this._min);
  };

  toString(){
      return this.getDisplayTime();
  };

  getDisplayHour(){
      return this._hour < 24 ? this._hour : this._hour - 24;
  };

  getDisplayMin(){
      return this._min < 10 ? '0'+this._min : this._min;
  };

  getDisplayTime(){
      return this.getDisplayHour() +':'+ this.getDisplayMin();
  };
}
