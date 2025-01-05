import './style.scss';
import './grid.scss';
import {
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineLinkedin,
    AiFillTikTok,
    AiOutlineUser,
    AiOutlineMail,
    AiOutlineShoppingCart,
    AiOutlineMenu,
    AiOutlinePhone,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { publicRoutes } from 'routes';
function Header() {
    const [isShowCategories, setShowCategories] = useState(true);
    const [Menus, setMenus] = useState([
        {
            name: 'Trang chu',
            path: publicRoutes.component,
        },
        {
            name: 'Cua hang',
            path: '',
        },
        {
            name: 'San pham',
            path: '',
            isShowSubmenu: false,
            child: [
                {
                    name: 'Thit',
                    path: '',
                },
                {
                    name: 'Rau co',
                    path: '',
                },
                {
                    name: 'Thuc an nhanh',
                    path: '',
                },
            ],
        },
        {
            name: 'Bai viet',
            path: '',
        },
        {
            name: 'Lien he',
            path: '',
        },
    ]);
    return (
        <>
            <div className="header-top">
                <div className="grid wide">
                    <div className="row">
                        <div className="col l-6 header_top_left">
                            <ul>
                                <li>
                                    <AiOutlineMail />
                                    hello@gmail.com
                                </li>
                                <li>Freeship for order over 200.000VND</li>
                            </ul>
                        </div>
                        <div className="col l-6 header_top_right">
                            <ul>
                                <li>
                                    <Link to={''}>
                                        <AiOutlineFacebook />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={''}>
                                        <AiOutlineInstagram />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={''}>
                                        <AiOutlineLinkedin />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={''}>
                                        <AiFillTikTok />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={''}>
                                        <AiOutlineUser />
                                    </Link>
                                    <span>Sign In</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid wide ">
                <div className="row">
                    <div className="col l-3 ">
                        <div className="header__logo">
                            <h1>LOGO</h1>
                        </div>
                    </div>
                    <div className="col l-6 ">
                        <nav className="header__menu">
                            <ul>
                                {Menus?.map((Menu, Menukey) => (
                                    <li key={Menukey} className={Menukey === 0 ? 'active' : ''}>
                                        <Link to={Menu.path}>{Menu?.name}</Link>
                                        {Menu.child && (
                                            <ul className="header__menu__dropdown">
                                                {Menu.child.map((childItem, childKey) => (
                                                    <li key={`${Menukey}-${childKey}`}>
                                                        <Link to={childItem.path}>{childItem.name}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className="col l-3 ">
                        <div className="header__cart">
                            <div className="header__cart__price">
                                <span>0408.177.668</span>
                            </div>
                            <ul>
                                <li>
                                    <Link to="#">
                                        <AiOutlineShoppingCart /> <span>5</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container grid wide">
                <div className="row no-gutters categories__container">
                    <div className="col l-3 categories">
                        <div className="categories__all" onClick={() => setShowCategories(!isShowCategories)}>
                            <AiOutlineMenu />
                            Danh sach san pham
                        </div>
                        <ul className={isShowCategories ? '' : 'hidden'}>
                            <li>
                                <Link to="#">Thit tuoi</Link>
                            </li>
                            <li>
                                <Link to="#">Rau cu</Link>
                            </li>
                            <li>
                                <Link to="#">Nuoc trai cay</Link>
                            </li>
                            <li>
                                <Link to="#">Trai cay</Link>
                            </li>
                            <li>
                                <Link to="#">Hai san</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col l-9 ">
                        <div className="searching">
                            <div className="searching__form">
                                <form>
                                    <input type="text" placeholder="Ban dang tim gi ?"></input>
                                    <button type="submit">Search</button>
                                </form>
                            </div>
                            <div className="searching__phone">
                                <div className="searching__phone__icon">
                                    <AiOutlinePhone />
                                </div>
                                <div className="searching__phone__text">
                                    <p>0408.177.668</p>
                                    <span>Ho tro 24/7</span>
                                </div>
                            </div>
                        </div>
                        <div className="item__container">
                            <div className="item__text">
                                <span>Trai cay tuoi</span>
                                <h2>
                                    Rau qua <br />
                                    sach 100%
                                </h2>
                                <p>Mien phi giao hang</p>
                                <Link to='' className='primary-button'>Mua ngay</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
