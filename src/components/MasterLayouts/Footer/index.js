import './style.scss';
import './grid.scss';
import { Link } from 'react-router-dom';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTikTok } from 'react-icons/ai';
function Footer() {
    return (
        <footer className="footer">
            <div className="container grid wide">
                <div className="row">
                    <div className="col l-3 m-6 c-12">
                        <div className="footer__about">
                            <h1 className="footer__about__logo">SHOP</h1>
                            <ul>
                                <li>Dia chi : Opiskelijankatu 4 </li>
                                <li>Phone : 0408.177.668</li>
                                <li>Email : quanghieubmtb1@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col l-6 m-6 c-12">
                        <div className="footer__widget">
                            <h4>Cua hang</h4>
                            <ul>
                                <li>
                                    <Link>Lien he</Link>
                                </li>
                                <li>
                                    <Link>Thong tin ve chung toi</Link>
                                </li>
                                <li>
                                    <Link>San pham kinh doanh</Link>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <Link>Thong tin tai khoan</Link>
                                </li>
                                <li>
                                    <Link>Gio hang</Link>
                                </li>
                                <li>
                                    <Link>Danh sach ua thich</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col l-3 m-12 c-12">
                        <div className="footer__about">
                            <h4>Khuyen mai va Uu dai</h4>
                            <p>Dang ki nhan thong tin tai day</p>

                            <form action="#">
                                <div className='input-group'>
                                    <input type="text" placeholder="Nhap email"></input>
                                    <button type="submit" className="button-submit">
                                        Dang ki
                                    </button>
                                </div>
                                <div className="social">
                                    <div>
                                        <AiOutlineFacebook></AiOutlineFacebook>
                                    </div>
                                    <div>
                                        <AiOutlineInstagram></AiOutlineInstagram>
                                    </div>
                                    <div>
                                        <AiOutlineLinkedin></AiOutlineLinkedin>
                                    </div>
                                    <div>
                                        <AiOutlineTikTok></AiOutlineTikTok>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
