import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import Loa from '../Loadping'
import EChart from './ECharts'
class Git extends Component {
    state={
        catch:true
    }
    componentDidMount(){
        axios.get('https://api.github.com/users/wentoos')
        .then(res=>{
          this.props.dispatch({type:'GITHUB',content:res.data})
          this.setState({catch:false})
        }).catch(err=>console.log(err))
    }
    render() {
        console.log(this.props)
        return (
            <div className='git_warp'>
                {
                    this.state.catch? <Loa/> :
                    <div>
                        <div className='git'>
                            <div className='git_avatar_url clearfix'>
                                <img src={this.props.git.avatar_url} alt='img'/>
                                <p>
                                    <span>{this.props.git.login}</span>
                                    <span>/</span>
                                    <span>{this.props.git.name}</span>
                                </p>
                                <p>
                                    {this.props.git.bio}
                                </p>
                                <div>
                                    <p>Repositories:<span>{this.props.git.public_repos}</span></p>
                                    <p>Followers:<span>{this.props.git.following}</span></p>
                                    <p>Following:<span>{this.props.git.followers}</span></p>
                                </div>
                            </div>
                        </div>
                        <EChart/>
                    </div>

                }
            </div>
        )
    }
}
let mapStateToProps = state=>({
    git:state.git
})
export default connect(mapStateToProps)(Git)
