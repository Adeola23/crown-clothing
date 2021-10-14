import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import './App.css';
import HomePage from './page/homepage/homepage'
import ShopPage from "./page/Shop page/shop.compnent";
import Header from "./component/header-component/header.component";
import SignInAndSignUpPage from "./page/sign-in and sign-up-page/sign-in-and-sign-up-page";
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/user/user.actions";

const HatsPage = () => (
    <div>
        <h1> Hats page</h1>
    </div>
)

class App extends React.Component {


// Application listening to authentication state changes from the firebase backend
    unsubscribeFromAuth = null;
    componentDidMount(){    // this connection is always open as long as the component is mounted because it is an open subscription
        const {setCurrentUser} = this.props
        this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
            if (userAuth){
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot( snapshot => {
                    setCurrentUser({
                            id : snapshot.id,
                            ...snapshot.data()
                    })
                })
            }
            //setCurrentUser({userAuth})
        })

    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route
                        exact
                        path='/signin'
                        render={() =>
                            this.props.currentUser ? (
                                <Redirect to='/' />
                            ) : (<SignInAndSignUpPage/>)}  />

                </Switch>
            </div>
        );
    }
}


//App doesnt need any props and passing null as the first argument because we do not need anystate to props which our reducers
// dispatch property
const mapDispatchToProps = dispatch => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
})
// currentuser from redux state
const mapStateToProps = ({user}) =>({
    currentUser:user.currentUser
})


export default connect(mapStateToProps,
    mapDispatchToProps) (App);
