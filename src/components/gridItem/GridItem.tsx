import { Level } from "../../helpers/imc";
import styles  from './gridItem.module.css';
import upImg from '../../assets/up.png';
import downImg from '../../assets/down.png';

type GridItemType = {
    item: Level
}

export  const GridItem = ({item}: GridItemType) => {
    return (
        <div className={styles.main} style={{backgroundColor: item.color}}>
            <div className={styles.gridIcon}>
                <img src={item.icon === 'up' ? upImg : downImg} width={30} alt="" />
            </div>
            <div className={styles.gridTitle}>
                {item.title}
            </div>
            {item.yourImc && 
                <div className={styles.yourImc}>
                    Seu imc é de: {item.yourImc} kg/m²
                </div>
            }

            <div className={styles.gridInfo}>
                <>
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    )
}