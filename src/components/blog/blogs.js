import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import marked from 'marked'
import hljs from 'highlight.js'
import Loa from '../Loadping'
import 'highlight.js/styles/atom-one-light.css'
class Blog extends Component {
    state={
        data:'',
        catch:true
    }
    componentWillMount(){

        let name = this.props.location.pathname
        axios.get(`https://raw.githubusercontent.com/wentoos/my-note/master/${name}`)
            .then(res => this.setState({data:res.data,catch:false}))
            .catch(err => alert(err))
        marked.setOptions({
            highlight: function (code) {
                return hljs.highlightAuto(code).value;
            }
        })
    }
  render() {
      console.log(marked(this.state.data));
    return (
        <div className='blogs_warp'>
            <div>
                <Link to='/blog' className='goblog'>
                    GO Bolg
                </Link>
            </div>
            {
                this.state.catch ?<Loa/>
                :
                <div dangerouslySetInnerHTML={{__html: marked(this.state.data)}} className='post-content'/>
            }

        </div>
    )
  }
}

export default Blog
