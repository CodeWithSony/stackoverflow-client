// import React from 'react'

//we will copy it's name and put it inside reducers index.js
const QuestionReducer = (state = {data: null}, action) => {
 switch (action.type){

    case "POST_QUESTION":
   //  return {...state, data: action.payload}
   // because data is just a string as "user posted successfully it can create error as we neeed data in the object form and we are sending just string..."
   
    return {...state}
   //  In this line, it returns a new state object by spreading the current state (...state). However, it doesn't modify the data property. This means that when a "POST_QUESTION" action is dispatched, it doesn't update the data property but still returns a new state object.
    case "POST_ANSWER":
       return {...state}
    case "FETCH_ALL_QUESTIONS":
    return {...state, data: action.payload}
    default:
       return state
 }
}

export default QuestionReducer
// and in question reducer it will be stored
// and now we can access it through the app