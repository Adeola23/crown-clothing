import React from "react";
import {Route, Switch} from "react-router-dom";
import './App.css';
import HomePage from './page/homepage/homepage'
import ShopPage from "./page/Shop page/shop.compnent";
import Header from "./component/header-component/header.component";
import SignInAndSignUpPage from "./page/sign-in and sign-up-page/sign-in-and-sign-up-page";
import {auth, createUserProfileDocument} from './firebase/firebase.utils'

const HatsPage = () => (
    <div>
        <h1> Hats page</h1>
    </div>
)

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currentUser:null
        }
    }
// Application listening to authentication state changes from the firebase backend
    unsubscribeFromAuth = null;
    componentDidMount(){    // this connection is always open as long as the component is mounted because it is an open subscription
        this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
            if (userAuth){
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot( snapshot => {
                    this.setState({
                        currentUser : {
                            id : snapshot.id,
                            ...snapshot.data()
                        }
                    })
                })
            }
            this.setState({ currentUser: userAuth})
        })

    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser = {this.state.currentUser}/>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route path='/signin' component={SignInAndSignUpPage} />
                </Switch>
            </div>
        );
    }
}





export default App;
