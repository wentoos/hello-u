import {combineReducers} from 'redux'

function dataReducer(state=[],action){
  switch(action.type){
    case 'DATA' : return action.data
    default : return state
  }
}

function getUserReducer(state={},action){
  switch(action.type){
    case "GITHUB":
        return action.content
    default:
        return state
  }
}
function catchReducer(state=false,action){
  switch(action.type){
    case "CATCH":
        return !state
    default:
        return state
  }
}
const rootReducer=combineReducers({
  data:dataReducer,
  git:getUserReducer,
  catch:catchReducer
})
export default rootReducer
