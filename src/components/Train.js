// Пути к изображениям внутри сборки
import train from '../images/train.svg';

function Train(props) {

  // Создаём переменную, которую после зададим в `className` для поезда
  const trainClassName = (
    `train__img  ${props.isTrain ? 'train__animation' : 'train__remove'}`
  );

  return (
    <section className="train">
      <img src={train} alt="Поезд" className={trainClassName}/>
    </section>
  );
}

export default Train;