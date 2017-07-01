import React, { Component } from 'react';
class Index extends Component {
    state={
        val:0,
        cmcc:'20vw'
    }
    hanbleShow(val){
        this.setState({
            val
        })
    }
    componentDidMount() {
        this.Banner()
    }
    Banner(){
        let val =this.state.val
        this.timer = setInterval(
          () => {
              val++;
              if(val>2){
                  val = 0;
              }
              this.setState({val,cmcc:'15vw'})
           },
          5000
        )
    }
    MouseEnter(){
        clearInterval(this.timer);
    }
    MouseLeave(){
        this.Banner()
    }
    componentWillUnmount() {
        this.timer && clearInterval(this.timer);
    }
  render() {
     return (
        <div className='hero_warp'>
            <div>
                <ul className='hero_ul row'>
                    <li style={{display:this.state.val===0?'block':'none'}} className='anmite'><h1 style={{display:this.state.val===0?'block':'none'}}>你不努力，谁也给不了你想要的生活...</h1>
                    </li>
                    <li style={{display:this.state.val===1?'block':'none'}} className='anmite'><h1 style={{display:this.state.val===1?'block':'none'}}>你不努力，谁也给不了你想要的生活...</h1>
                    </li>
                    <li style={{display:this.state.val===2?'block':'none'}} className='anmite'><h1 style={{display:this.state.val===2?'block':'none'}}>你不努力，谁也给不了你想要的生活...</h1>
                    </li>
                </ul>
            </div>
            <div className='hero_btn_tab'  onMouseEnter={this.MouseEnter.bind(this)} onMouseLeave={this.MouseLeave.bind(this)}>
                <a className={this.state.val===0?'flex_active':null} onClick={this.hanbleShow.bind(this,0)}></a>
                <a className={this.state.val===1?'flex_active':null} onClick={this.hanbleShow.bind(this,1)}></a>
                <a className={this.state.val===2?'flex_active':null} onClick={this.hanbleShow.bind(this,2)}></a>
            </div>
        </div>
    )
  }
}

export default Index
