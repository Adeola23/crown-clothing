import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import { ReactComponent as Logo} from '../../Assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import CartIcon from "../cart-icon/cart-icon.component";
import Cart from "../Cart-dropdown/cart-dropdown.component";

import './header.styles.scss'

const Header = ({currentUser, hidden}) => (
    <div className={'header'}>
        <Link className = 'logo-container'  to={'/'}>
            <Logo className = 'logo'/>
        </Link>
        <div className="options">
            <Link className="option" to={'/shop'}>
                SHOP
            </Link>
            <Link className="option" to={'/shop'}>
                CONTACT
            </Link>
            {currentUser ?
                (<div className={'option'} onClick={() => auth.signOut()}  > SIGN OUT </div>)
                :
                (<Link className = 'option' to = '/signin'> SIGN IN</Link>)
            }
            <CartIcon/>
        </div>
        {
            hidden ? null :  <Cart/>
        }

    </div>
)
//We know with our root reducer it is an object with a property of user that points to userReducer which right now is just this initial state
//because we have not triggered actions that updates the value of root reducer
// state passed is the root reducer
//currentUser: state.user.currentUser- means we want the rootReducer  then the user value and the we want the currentUser value
const  mapStateToProps = ({user:{currentUser}, cart: {hidden}}) =>({
    currentUser,
    hidden
})
export default connect(mapStateToProps)(Header)