import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import "./style.scss";
import image from "assets/users/images/image.jpeg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Link } from "react-router-dom";
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
    { bgImg: image, name: "Cam tuoi" },
    { bgImg: image, name: "Hoa qua kho" },
    { bgImg: image, name: "Rau cu tuoi" },
    { bgImg: image, name: "Sua hop" },
    { bgImg: image, name: "Thit bo" },
  ];
  const featProducts = {
    all: {
      title: "Toan bo",
      product: [
        { img: image, name: "Thit bo nat", price: "20000" },
        { img: image, name: "Chuoi", price: "20000" },
        { img: image, name: "Ga", price: "20000" },
        { img: image, name: "Con cac", price: "20000" },
      ],
    },
    freshMeat: {
      title: "Thit tuoi",
      product: [{ img: image, name: "Thit bo nat", price: "20000" }],
    },
  };
  function renderFeaturedProducts(data) {
    const Tablist = [];
    const Tabpanels = [];
    Object.keys(data).forEach((key, index) => {
      Tablist.push(<Tab key={index}>{data[key].title}</Tab>);
      const Tabpanel = [];
      data[key].product.forEach((item, j) => {
        Tabpanel.push(
          <div className="col l-3" key={j}>
            <div className="featured__item">
              <div
                className="featured__item__pic"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <ul className="featured__item__pic__hover">
                  <li>
                    <AiOutlineEye></AiOutlineEye>
                  </li>
                  <li>
                    <AiOutlineShoppingCart></AiOutlineShoppingCart>
                  </li>
                </ul>
              </div>
              <div className="featured__item__text">
                <h6>
                  <Link to="">{item.name}</Link>
                </h6>
                <h5>{item.price}</h5>
              </div>
            </div>
          </div>
        );
      });
      Tabpanels.push(Tabpanel);
    });
    return (
      <Tabs>
        <TabList>{Tablist}</TabList>
        {Tabpanels.map((item, k) => (
          <TabPanel key={k}>
            <div className="row ">{item}</div>
          </TabPanel>
        ))}
      </Tabs>
    );
  }

  return (
    <>
      <div className=" container grid wide container__slider">
        <Carousel responsive={responsive} className="categories__slider">
          {sliderItems.map((item, key) => (
            <div
              className="slider__item"
              style={{ backgroundImage: `url(${item.bgImg})` }}
              key={key}
            >
              <p>{item.name}</p>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="container grid wide ">
        <div className="featured">
          <div className="section-title">
            <h2>San pham noi bat</h2>
          </div>
          {renderFeaturedProducts(featProducts)}
        </div>
      </div>
    </>
  );
}

export default Home;
