import React, { Component } from 'react'
import img from '../images/img-1.jpg'
import axios from 'axios'
import { connect } from 'react-redux'
import Loa from './Loadping'
import { Link } from 'react-router-dom'
class Index extends Component {
    state={
        catch:true
    }
    componentWillMount(){
        axios.get(`https://raw.githubusercontent.com/wentoos/blog-data/master/blog-data.json`).then(res=>{
            this.props.dispatch({type:'DATA',data:res.data.posts})
            this.setState({catch:false})
        })
    }
  render() {
    return (
        <div className='blog_warp'>
            {
                this.state.catch?<Loa/>:
                <div className="blog_tab">
    				<h2 className="blog_h2">Read Blog</h2>
    				<div>
    					<div className="blogs">
                            {
                                this.props.blogData.map(item=>
                                    <div className="blog-entry" key={item.index}>
                                        <Link to={item.url} className="blog-img">
                                            <img src={img} alt='img'/>
                                        </Link>
                                        <div className="desc">
                                            <h3><Link to={item.url}>{item.title}</Link></h3>
                                            <span>发表日期：
                                                {item.time}
                                            </span>
                                            <p>{item.detail}</p>
                                            <Link to={item.url} className="lead">Read More →
                                            </Link>
                                        </div>
                                    </div>
                                )
                            }

                        </div>
                    </div>
                </div>
            }
        </div>
    )
 }
}
let mapStateToProps = state=>({
    blogData:state.data
})
export default connect(mapStateToProps)(Index)
