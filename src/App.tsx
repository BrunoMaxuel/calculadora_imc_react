import { useState } from 'react';
import styles from './App.module.css';
import paweredImg from './assets/powered.png';
import { levels, calculateImc, Level } from './helpers/imc';
import { GridItem } from './components/gridItem';
import leftArrow from './assets/leftarrow.png';

function App() {
  const [heightfield, setHeightField] = useState<number>(0);
  const [weightfield, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const handleCalculateButton = () => {
    if(heightfield && weightfield){
      setToShow(calculateImc(heightfield, weightfield));
    }else{
      alert('Preencha todos os campos');
    }
  }

  return (
    <div className={styles.main}>
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
                />
                <input 
                  type="number" placeholder="Digite seu peso Ex: 75.30 em (em kg)" 
                  value={weightfield > 0 ? weightfield : ''}
                  onChange={(e) => setWeightField(parseFloat(e.target.value))}
                />
                <button onClick={handleCalculateButton}>
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
                  <div className={styles.rightArrow} onClick={() => setToShow(null)}>
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
