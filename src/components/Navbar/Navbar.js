import { NavLink } from 'react-router-dom';
import css from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={css.nav}>
            <div>
                <NavLink to='/profile' className={css.item} activeClassName={css.active}>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs' className={css.item} activeClassName={css.active}>Dialogs</NavLink>
            </div><div>
                <NavLink to='/news' className={css.item} activeClassName={css.active}>News</NavLink>
            </div>
            <div>
                <NavLink to='/music' className={css.item} activeClassName={css.active}>Music</NavLink>
            </div>
            <div>
                <NavLink to='/settings' className={css.item} activeClassName={css.active}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;