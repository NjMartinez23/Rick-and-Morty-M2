import styles from "./Card.module.css";

export default function Card(props) {
   return (
      <div className={styles.container}>
         <div className={styles.buttonContainer}>
            <button onClick={props.onClose}>X</button>
         </div>
         <div className={styles.dataContainer}>
            <h2>{props.name}</h2>
            <h4>{props.status}</h4>
            <h4>{props.species}</h4>
            <h4>{props.gender}</h4>
            <h4>{props.origin}</h4>
         </div>
         <img src={props.image} alt='Imagen' />
      </div>
   );
}