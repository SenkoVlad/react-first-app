import { NavLink, Redirect } from 'react-router-dom';
import css from './Header.module.css';

const Header = (props) => {

    return (
        <header className={css.header}>
            <img src='https://placeit-assets1.s3-accelerate.amazonaws.com/custom-pages/make-a-gaming-logo/gaming-logo-maker-for-an-rpg-guild.png' />
            <div className={css.loginBlock}>
                {props.isLogin
                    ?
                    <div>
                        <div>
                            {props.login}
                        </div>
                        <div>
                            <NavLink to='/login' onClick={props.logout}>Logout</NavLink>
                        </div>
                    </div>
                    :
                    <NavLink to='/login'>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;

