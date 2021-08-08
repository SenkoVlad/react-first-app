import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = (props) => {
    return (
    <header className={css.header}>
        <img src='https://placeit-assets1.s3-accelerate.amazonaws.com/custom-pages/make-a-gaming-logo/gaming-logo-maker-for-an-rpg-guild.png' />
        <div className={css.loginBlock}>
            {props.isLogin ? <div>{props.login}</div> : <NavLink to='/login'>Login</NavLink>}
        </div>
    </header>
    );
}

export default Header;

