import React, { useState } from 'react';
import decor1 from '../images/decor1.svg';
import decor2 from '../images/decor2.svg'; 

function Main(props) {
  const [values, setValues] = useState({
    is_load: 0,
    start: "",
    end: "",
    year: "",
    month: "",
    week: "",
    depart_day: "",
    depart_hour: "",
    fr_id: "",
    route_type: "",
    rod: "",
    common_ch: "",
    vidsobst: "",
    distance: "",
    snd_org_id: "",
    rsv_org_id: "",
    snd_roadid: "",
    rsv_roadid: "",
    snd_dp_id: "",
    rsv_dp_id: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Train!');
    props.handleTrain();
  };

  return (
    <main className="main">
      <section className="main__container">
        <img src={decor1} alt="Серый декор" className="main__img-grey"/>
        <img src={decor2} alt="Оранжевый декор" className="main__img-orange"/>
        <form  className="main__form" onSubmit={handleSubmit}>
          <div className='main__form__about'>
            <h2 className='main__title'>Сервис для прогнозирования длительности движения вагонов</h2>
            {/* <p className='main__text'>Текст</p> */}
          </div>
          <div className='main__form__input'>
            <label htmlFor="is_load" className='main__text'>
              Выберите признак гружёности
              <select className="main__input" value={values.is_load} onChange={handleChange} id="is_load" name="is_load">
              <option value={1}>Гружёный</option>
              <option value={0}>Порожний</option>
            </select>
            </label>
            <label htmlFor="start" className='main__text'>
              Введите начальную точку маршрута
              <input required id="start" name="start" type="text" placeholder="Станция отправления" className="main__input"
                   value={values.start} onChange={handleChange} />
            </label>
            <label htmlFor="end" className='main__text'>
              Введите конечную точку маршрута
              <input required id="end" name="end" type="text" placeholder="Станция назначения" className="main__input"
                   value={values.end} onChange={handleChange}/>
            </label>
            <label htmlFor="year" className='main__text'>
              Введите год отправления
              <input required id="year" name="year" type="number" placeholder="Год отправления" className="main__input"
                   value={values.year} onChange={handleChange}/>
            </label>
            <label htmlFor="month" className='main__text'>
              Введите месяц отправления
              <input required id="month" name="month" type="text" placeholder="Месяц отправления" className="main__input"
                   value={values.month} onChange={handleChange}/>
            </label>
            <label htmlFor="week" className='main__text'>
              Введите неделю отправления
              <input required id="week" name="week" type="number" placeholder="Неделя отправления" className="main__input"
                   value={values.week} onChange={handleChange}/>
            </label>
            <label htmlFor="depart_day" className='main__text'>
              Введите день отправления
              <input required id="depart_day" name="depart_day" type="number" placeholder="День отправления" className="main__input"
                   value={values.depart_day} onChange={handleChange}/>
            </label>
            <label htmlFor="depart_hour" className='main__text'>
              Введите час отправления
              <input required id="depart_hour" name="depart_hour" type="number" placeholder="Час отправления" className="main__input"
                   value={values.depart_hour} onChange={handleChange}/>
            </label>
            <label htmlFor="fr_id" className='main__text'>
              Введите номер груза
              <input required id="fr_id" name="fr_id" type="number" placeholder="Номер груза" className="main__input"
                   value={values.fr_id} onChange={handleChange}/>
            </label>
            <label htmlFor="route_type" className='main__text'>
              Введите тип отправки
              <input required id="route_type" name="route_type" type="number" placeholder="Тип отправки" className="main__input"
                   value={values.route_type} onChange={handleChange}/>
            </label>
            <label htmlFor="rod" className='main__text'>
              Введите род подвижного состава
              <input required id="rod" name="rod" type="number" placeholder="Род подвижного состава" className="main__input"
                   value={values.rod} onChange={handleChange}/>
            </label>
            <label htmlFor="common_ch" className='main__text'>
              Введите id обобщённой характеристики вагона
              <input required id="common_ch" name="common_ch" type="number" placeholder="id обобщённой характеристики вагона" className="main__input"
                   value={values.common_ch} onChange={handleChange}/>
            </label>
            <label htmlFor="vidsobst" className='main__text'>
              Введите вид собственности
              <input required id="vidsobst" name="vidsobst" type="number" placeholder="Вид собственности" className="main__input"
                   value={values.vidsobst} onChange={handleChange}/>
            </label>
            <label htmlFor="distance" className='main__text'>
              Введите расстояние рейса
              <input required id="distance" name="distance" type="number" placeholder="Расстояние рейса" className="main__input"
                   value={values.distance} onChange={handleChange}/>
            </label>
            <label htmlFor="snd_org_id" className='main__text'>
              Введите id грузоотправителя
              <input required id="snd_org_id" name="snd_org_id" type="number" placeholder="id грузоотправителя" className="main__input"
                   value={values.snd_org_id} onChange={handleChange}/>
            </label>
            <label htmlFor="rsv_org_id" className='main__text'>
              Введите id грузополучателя
              <input required id="rsv_org_id" name="rsv_org_id" type="number" placeholder="id грузополучателя" className="main__input"
                   value={values.rsv_org_id} onChange={handleChange}/>
            </label>
            <label htmlFor="snd_roadid" className='main__text'>
              Введите id дороги отправления
              <input required id="snd_roadid" name="snd_roadid" type="number" placeholder="id дороги отправления" className="main__input"
                   value={values.snd_roadid} onChange={handleChange}/>
            </label>
            <label htmlFor="rsv_roadid" className='main__text'>
              Введите id дороги назначения
              <input required id="rsv_roadid" name="rsv_roadid" type="number" placeholder="id дороги назначения" className="main__input"
                   value={values.rsv_roadid} onChange={handleChange}/>
            </label>
            <label htmlFor="snd_dp_id" className='main__text'>
              Введите id региона отправления
              <input required id="snd_dp_id" name="snd_dp_id" type="number" placeholder="id региона отправления" className="main__input"
                   value={values.snd_dp_id} onChange={handleChange}/>
            </label>
            <label htmlFor="rsv_dp_id" className='main__text'>
              Введите id региона назначения
              <input required id="rsv_dp_id" name="rsv_dp_id" type="number" placeholder="id региона назначения" className="main__input"
                   value={values.rsv_dp_id} onChange={handleChange}/>
            </label>
          </div>
          <div className='main__form__button'>
            <button type="submit" className="main__button" >Рассчитать</button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Main;
