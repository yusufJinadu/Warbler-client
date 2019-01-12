import React from "react"
import {Switch, Route, withRouter, Redirect} from "react-router-dom"
import {connect} from "react-redux"
import Homepage from "../components/Homepage"
import AuthForm from "../components/AuthForm"
import {authUser} from "../store/actions/auth"
import {removeError} from "../store/actions/errors"
import withAuth from "../hocs/WithAuth"
import MessageForm from "../containers/MessageForm"
const Main = props => {
    const {authUser, errors, removeError, currentUser} = props
    return(
        <div className = "container">
            <Switch>
                <Route exact path="/" render = {props => <Homepage currentUser = {currentUser} {...props}/> }> </Route>     
                <Route exact path="/signin" render = {props => {
                    return(
                        <AuthForm  onAuth={authUser} buttonText = "Log in"
                         heading="welcome Back" {...props} errors = {errors}
                         removeError={removeError}/>
                    )
                } }/>   

                <Route exact path="/signup" render = {props => {
                    return(
                        <AuthForm signUp onAuth={authUser} buttonText = "sign me up"
                         heading="join now" {...props} errors = {errors}  
                         removeError={removeError}/>
                    )
                } }/>  
                <Route path="/users/:id/messages/new" component = {MessageForm}/>
            </Switch>
        </div>
    )
}

function mapStateToProps(state){
    return {
        currentUser:state.currentUser,
        errors:state.errors
    }
}
export default withRouter(connect(mapStateToProps, {authUser, removeError})(Main))