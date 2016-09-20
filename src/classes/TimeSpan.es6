import Time from './Time'
/**
 * 一度生成したオブジェクトは変更しません。
 * 変更メソッドは新しいオブジェクトを帰します。
 */
export default class TimeSpan
{
  static create(start, end){
      return new TimeSpan(new Time(start[0], start[1]), new Time(end[0], end[1]));
  }

  constructor(startTime, endTime){
    if(startTime === undefined){
      startTime = new Time();
    }
    if(endTime === undefined){
      endTime = new Time();
    }
    while(startTime.compare(endTime) >= 0){
        endTime = endTime.addMin(24 * 60);
    }

    this._startTime = startTime;
    this._endTime = endTime;
  }

  clone(){
      return new TimeSpan(this.getStartTime().clone(), this.getEndTime().clone());
  }

  getDistance(){
      return this._startTime.getDistance(this._endTime);
  }

  getStartTime(){ return this._startTime; }
  getEndTime(){ return this._endTime; }

  shiftEndTime(time){
      return new TimeSpan(time.addMin(-this.getDistance()), time);
  }

  shiftStartHour(hour){
    return this.shiftStartTime(new Time(hour, this._startTime.getMin()));
  }

  shiftStartMin(min){
    return this.shiftStartTime(new Time(this._startTime.getHour(), min));
  }

  shiftStartTime(time){
      return new TimeSpan(time, time.addMin(this.getDistance()));
  }

  addMin(minute){
    return new TimeSpan(this.getStartTime(), this.getEndTime().addMin(minute));
  }

  equals(timeSpan){
      return this.getStartTime().equals(timeSpan.getStartTime()) && this.getEndTime().equals(timeSpan.getEndTime());
  }

  contains(timeSpan){
      return this.getStartTime().compare(timeSpan.getStartTime()) < 0 && this.getEndTime().compare(timeSpan.getEndTime()) > 0;
  }

  containsTime(time){
      return this.getStartTime().compare(time) < 0 && this.getEndTime().compare(time) > 0;
  }

  overlaps(timeSpan){
      if(timeSpan.contains(this)){
          return true;
      }

      if(this.containsTime(timeSpan.getStartTime())){
          return true;
      }

      if(this.containsTime(timeSpan.getEndTime())){
          return true;
      }

      return false;
  }

  eachHour(callback){
      var hour = this.getStartTime().getHour();
      var end = this.getEndTime().getHour();
      var key = 0;

      while(true){
          if(hour === end){
              callback.call(hour, key, hour, this.getEndTime().getMin());
              break;
          } else {
              callback.call(hour, key, hour);
          }

          hour += 1;
          ++key;
      }
  }

  eachTime(callback, minuteInterval){
      var key = 0;
      minuteInterval = minuteInterval ? minuteInterval : 60;

      var time = this.getStartTime();
      while(true){
          if(time.compare(this.getEndTime()) > 0){
              break;
          }

          callback.call(time, key, time);

          time = time.addMin(minuteInterval);
          ++key;
      }
  }

  toString(){
      return this._startTime + '~' + this._endTime;
  }
}
