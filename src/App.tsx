import { useState } from 'react';
import styles from './App.module.css';
import paweredImg from './assets/powered.png';
import { levels, calculateImc, Level } from './helpers/imc';
import { GridItem } from './components/gridItem';
import leftArrow from './assets/leftarrow.png';
import { Modal } from './components/modals/modal';


function App() {
  const [heightfield, setHeightField] = useState<number>(0);
  const [weightfield, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);
  const [hidden, setHidden] = useState<boolean>(true);
  
  const handleCalculateButton = () => {
    if(heightfield && weightfield){
      setToShow(calculateImc(heightfield, weightfield));
    }else{
        setHidden(false);
    }
  }
  const handleClearOptions = () => {
    setHeightField(0);
    setWeightField(0);
    setToShow(null);
  }

  return (
    <div className={styles.main}>
        <Modal hidden={hidden} setHidden={setHidden}/>
        <header>
            <div className={styles.headerContainer}>
                <img src={paweredImg} alt="" width={150}/>
            </div>
        </header>
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <h1>Calcule o seu imc</h1>
                <p>Imc é o indice de massa corporal</p>
                <input 
                  type="number" placeholder="Digite sua altura em metros Ex: 1.5" 
                  value={heightfield > 0 ? heightfield : ''}
                  onChange={(e) => setHeightField(parseFloat(e.target.value))}
                  disabled={toShow ? true : false}
                />
                <input 
                  type="number" placeholder="Digite seu peso Ex: 75.30 em (em kg)" 
                  value={weightfield > 0 ? weightfield : ''}
                  onChange={(e) => setWeightField(parseFloat(e.target.value))}
                  disabled={toShow ? true : false}
                />
                <button onClick={handleCalculateButton} disabled={toShow? true : false} >
                  Calcular
                </button>
            </div>
            <div className={styles.rightSide}>
             {!toShow &&  
                <div className={styles.grid}>
                  {levels.map((item, key)=>(
                    <GridItem key={key} item={item} />
                  ))}
                </div>
              }
              {toShow && 
                <div className={styles.rightBig}> 
                  <div className={styles.rightArrow} onClick={handleClearOptions}>
                      <img src={leftArrow} alt="" width={25} />
                  </div>
                  <GridItem item={toShow} />
                </div>
              }
            </div>
        </div>
    </div>
  );
}

export default App;
