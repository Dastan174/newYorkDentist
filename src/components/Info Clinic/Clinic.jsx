import React from "react";
import "./Clinic.css";
import { FaArrowRight } from "react-icons/fa";
import PicClinic from "./Rectangle 56.png";
import PicClinic2 from "./Rectangle 57.png";
import CheckCircle from "./check-circle 1.png";

const Clinic = () => {
  return (
    <div id="clinic">
      <div className="container">
        <div className="clinic">
          <div className="clinic-title">
            <h1>Название клиники</h1>
            <p>
              Подробнее <FaArrowRight style={{ marginLeft: "10px" }} />
            </p>
          </div>
          <div className="info-clinic">
            <div className="clinic-description">
              <p>
                Стоматологическая клиника «Ника» на протяжении 20 лет оказывает
                высококвалифицированные стоматологические услуги для жителей
                Иркутска и Иркутской области. За это время нам удалось
                сформировать коллектив, состоящий полностью из высококлассных
                специалистов, на вооружении у которых новейшие методы
                и технологии. <br /> <br />
                Главный принцип лечения в нашем медицинском учреждении —
                это индивидуальный комплексный подход к каждому клиенту
                и высокое качество проводимых процедур. <br />
                <br /> На сегодняшний день мы без преувеличения можем сказать,
                что являемся одной из самых передовых стоматологических клиник
                г. Иркутска. А все это стало возможным благодаря тысячам
                довольных пациентов. <br />
                <br /> Мы оказываем весь комплекс передовых услуг в области
                высококвалифицированной стоматологии, включая эстетическую
                стоматологию, протезирование зубов любой сложности, лечение
                кариеса, пломбирование каналов, исправление прикуса
                без брекетов, художественную реставрацию, профессиональное
                отбеливание ZOOM, лечение неприятного запаха изо рта, установку
                голливудских виниров (люминиры) и многие другие услуги.
                За плечами наших специалистов — большой опыт работы и владение
                передовыми методиками лечения. <br />
                <br />{" "}
                <span className="span-description-clinic">
                  Мы работаем ради вас и вашего здоровья! <br />
                  Стоматология — это наше призвание!
                </span>
              </p>
            </div>
            <div className="pic-clinic">
              <div className="photos-clinic">
                <img src={PicClinic} alt="image :/" />
                <img src={PicClinic2} alt="image :/" />
              </div>
              <div className="guarant-clinic">
                <img src={CheckCircle} alt="" />
                <h2>Спасаем 99% зубов рекомендованных к удалению</h2>
                <p>Лечение зубов без боли и неприятных ощущений в Иркутске</p>
                <p>
                  Для лечения своих пациентов мы используем только
                  сертифицированные и проверенные препараты, качественное
                  оборудование и новейшие методики
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clinic;