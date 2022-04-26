import { Link } from 'react-router-dom';
import classes from './MainNav.module.css';

function MainNavigation() {
    return(
        <header className={classes.header}>
            <div className={classes.logo}> LOGO </div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'> Homepage </Link>
                    </li>
                    <li>
                        <Link to='/formentry'> Enter a Form </Link>
                    </li>
                    <li>
                        <Link to='/formhistory'> Your History </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;