import './style.scss';
import image from 'assets/users/images/image.jpeg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
function Home() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    const sliderItems = [
        { bgImg: image, name: 'Cam tuoi' },
        { bgImg: image, name: 'Hoa qua kho' },
        { bgImg: image, name: 'Rau cu tuoi' },
        { bgImg: image, name: 'Sua hop' },
        { bgImg: image, name: 'Thit bo' },
    ];
    return (
        <>
            <div className=" container grid wide container__slider">
                <Carousel responsive={responsive} className="categories__slider">
                    {sliderItems.map((item, key) => (
                        <div className="slider__item" style={{ backgroundImage: `url(${item.bgImg})` }} key={key}>
                            <p>{item.name}</p>
                        </div>
                    ))}
                </Carousel>
            </div>
        </>
    );
}

export default Home;
