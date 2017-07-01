import React, { Component } from 'react'
import {HashRouter,Route} from 'react-router-dom'
import Home from './components/Home'
import Blog from './components/Blog'
import Photo from './components/Photo'
import Blogs from './components/blog/blogs'
import Left from './components/Left'
import Me from './components/Me'
import store from './redux/store'
import {Provider} from 'react-redux'
class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <div className='warp'>
                <HashRouter>
                    <div>
                        <Left/>
                        <div>
                            <Route exact path='/' component={Home}/>
                            <Route path='/blog' component={Blog}/>
                            <Route path='/user' component={Me}/>
                            <Route path='/photo' component={Photo}/>
                            <Route path='/content/:id' component={Blogs}/>
                        </div>
                    </div>
                </HashRouter>
            </div>
        </Provider>
    )
  }
}

export default App
