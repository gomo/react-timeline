class Timer
{
  constructor(){
    this.laps = {};
    this.lastName;
  }

  lap(name){
    this.laps[name] = {
      name: name,
      time: new Date()
    };

    this.lastName = name;
  }

  log(from, to){
    if(to === undefined){
      to = this.lastName;
    }

    const msec = this.laps[to].time - this.laps[from].time;

    console.log(msec / 1000, from, to);
  }
}

export default new Timer();
