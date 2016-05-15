export default class Actions
{
  constructor(timeline){
    this.timeline = timeline;
  }

  addEvent(){
    // console.log(this.timeline.state.lineData);
  }

  setFrameHeight(height){
    this.timeline.setState({frameHeight: height});
  }
}
