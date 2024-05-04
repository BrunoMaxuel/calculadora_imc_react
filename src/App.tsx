import { useState } from 'react';
import styles from './App.module.css';
import paweredImg from './assets/powered.png';

function App() {
  const [heightfield, setHeightField] = useState<number>(0);
  const [weightfield, setWeightField] = useState<number>(0);
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
                />
            </div>
            <div className={styles.rightSide}>
              conteudoright
            </div>
        </div>
    </div>
  );
}

export default App;
