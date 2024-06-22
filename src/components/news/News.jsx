import React from "react";
import newIcon from "../../images/newsicon.svg";
import "./News.css";
import NewsCard from "./NewsCard";
function News() {
  const cardData = [
    {
      title: "Уникальная технология – Компьютерная анестезия STA",
      info: "Болезненное обезболивание уколами теперь в прошлом. Ведь мы привезли в Иркутск уникальную компьютерную анестезию STA – технологию, позволяющую лечить зубы без страха и боли",
      date: "20 сентрября",
    },
    {
      title: "Уникальная технология – Компьютерная анестезия STA",
      info: "Болезненное обезболивание уколами теперь в прошлом. Ведь мы привезли в Иркутск уникальную компьютерную анестезию STA – технологию, позволяющую лечить зубы без страха и боли",
      date: "20 сентрября",
    },
    {
      title: "Уникальная технология – Компьютерная анестезия STA",
      info: "Болезненное обезболивание уколами теперь в прошлом. Ведь мы привезли в Иркутск уникальную компьютерную анестезию STA – технологию, позволяющую лечить зубы без страха и боли",
      date: "20 сентрября",
    },
    {
      title: "Уникальная технология – Компьютерная анестезия STA",
      info: "Болезненное обезболивание уколами теперь в прошлом. Ведь мы привезли в Иркутск уникальную компьютерную анестезию STA – технологию, позволяющую лечить зубы без страха и боли",
      date: "20 сентрября",
    },
  ];
  return (
    <section className="news">
      <div className="container">
        <div className="news__content">
          <div className="new__title">
            <h1>Новости</h1>
            <h4>
              Все новости <img src={newIcon} alt="" />
            </h4>
          </div>
          <div className="new__blocks">
            {cardData.map((el, ind) => (
              <NewsCard el={el} key={ind} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;