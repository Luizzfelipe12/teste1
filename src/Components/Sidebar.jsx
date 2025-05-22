import style from './Sidebar.module.css';
import logo from '../assets/logo.png';

export function Sidebar() {
    return (
        <>
            <div className={style.sidebar}>

                <div className={style.SidebarTopo}>
                    <button className={style.toggle}>&gt;</button>

                    <div className={style.logo}>
                        <img src={logo} />
                    </div>
                </div>

                <ul className={style.menu}>
                    <li><button className={style.icon}>⚙️</button></li>
                    <li><button className={style.icon}>📄</button></li>
                    <li><button className={style.icon}>⚙️</button></li>
                    <li><button className={style.icon}>⚙️</button></li>
                </ul>

                <div className={style.SidebarFooter}>

                <button className={style.icon}>#</button>

                </div>
            </div>
        </>
    );
}