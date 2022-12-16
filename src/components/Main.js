import React, { useState } from 'react';
import decor1 from '../images/decor1.svg';
import decor2 from '../images/decor2.svg'; 

function Main(props) {
  const [values, setValues] = useState({
    model: "linealRegression",
    start: "",
    end: "",
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
            <p className='main__text'>Текст</p>
          </div>
          <div className='main__form__input'>
            <p className='main__text'>Выберите модель</p>
            <select className="main__input" value={values.model} onChange={handleChange}>
              <option value="logicalRegression">Логистическая регрессия</option>
              <option value="KNN">K Ближайших Соседей (KNN)</option>
              <option value="linealRegression">Линейная Регрессия</option>
              <option value="SVMs">Метод опорных Векторов (SVMs)</option>
              <option value="treeResolution">Деревья Решений & Случайные Леса</option>
            </select>
            <p className='main__text'>Введите начальную точку маршрута</p>
            <input required id="start" name="start" type="text" placeholder="Станция отправления" className="main__input"
                   value={values.start} onChange={handleChange} />
            <p className='main__text'>Введите конечную точку маршрута</p>
            <input required id="end" name="end" type="text" placeholder="Станция назначения" className="main__input"
                   value={values.end} onChange={handleChange}/>
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
