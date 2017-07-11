import React, { Component } from 'react'
import { Pagination } from 'antd';
import img from '../images/img-1.jpg'
import axios from 'axios'
import { connect } from 'react-redux'
import Loa from './Loadping'
import { Link } from 'react-router-dom'
class Index extends Component {
    state={
        catch:true,
        page:1
    }
    componentWillMount(){
        axios.get(`https://raw.githubusercontent.com/wentoos/blog-data/master/blog-data.json`).then(res=>{
            this.props.dispatch({type:'DATA',data:res.data.posts})
            this.setState({catch:false})
        })
    }
    onChange=(page)=>{
        console.log(page);
        this.setState({page})
    }
  render() {
      let page = this.state.page*4
      if(page===4){
          page = 3
      }else if (page>4) {
          page = page - 1
      }
    return (
        <div className='blog_warp'>
            {
                this.state.catch?<Loa/>:
                <div className="blog_tab">
    				<h2 className="blog_h2">Read Blog</h2>
    				<div>
                        <div className="blogs clearfix">
                            {
                                this.props.blogData.slice(page-3,page+1).map(
                                        item=>
                                            <div className="blog-entry" key={item.index}>
                                                <Link to={item.url} className="blog-img">
                                                    <img src={img} alt='img'/>
                                                </Link>
                                                <div className="desc">
                                                    <h3><Link to={item.url} className="lead_title">{item.title}</Link></h3>
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
                        <Pagination defaultCurrent={1} total={this.props.blogData.length} defaultPageSize={4} onChange={this.onChange}/>
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
