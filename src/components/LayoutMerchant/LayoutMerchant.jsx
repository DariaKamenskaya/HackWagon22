import React, { useState } from 'react';
import styles from "./LayoutMerchant.css";
import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main';
import Train from '../Train';

const LayoutMerchant = () => {
    const [isTrain, handleIsTrain] = useState(false);

    function handleTrainClick() {
      handleIsTrain(true);
    }

    return (
        <div className={styles.layoutWrapper}>
            <div className={styles.container}>
                <Header/>
                <Main handleTrain={handleTrainClick}/>
                <Train isTrain={isTrain}/>
                <Footer/>
            </div>
        </div>
    )
}

export default LayoutMerchant;