import Footer from '../../components/Footer/Footer'
import Menu from '../../components/Menu/Menu'
import styles from './Massagem.module.css'

function MassageType(title, text) {
    return (
        <div>
            <strong className={styles.title}>{title}</strong>
            <div className={styles.text}>{text}</div>
        </div>
    )
}

function Massagem() {
    return (
        <div>
            <Menu></Menu>
            <main className={styles.main}>
                <div className={styles.text}>Uma hora e meia de atendimento com a utilização de diversas técnicas dependendo da necessidade de cada pessoa.</div>
                <div className={styles.text}>Conheça um pouco mais sobre as técnicas utilizadas:</div>

                {MassageType("Ayurvedica", "Massagem com toque forte, dissolve tensões, dores musculares e articulares. Trabalha com respiração e manobras com alongamentos. Resolve problemas emocionais, cura memórias e Histórias vividas.  É uma massagem terapêutica.")}
                {MassageType("Drenagem linfática", "é uma massagem energizante, desintoxicante, melhora a imunidade e a circulação. Indicada TB na gravidez.")}
                {MassageType("Relaxante", "trabalha o corpo todo, energizante mas suave.")}
                {MassageType("Reflexologia", "trabalha nos pés mas reflete em todo corpo através dos  meridianos.")}
                {MassageType("Pedras Quentes", "Confortável, relaxa e remove tensões crônicas.")}
                {MassageType("Reiki", "imposição de mãos sem toque, vibracional e energética.")}
                {MassageType("Argiloterapia", "energética, muito indicada para circulação e problemas linfáticos. Excelente para limpeza da pele. É desintoxicante.")}
                {MassageType("Bambu terapia", "massagem relaxante forte utilizando bambus.")}
            </main>
            <Footer></Footer>
        </div>
    )
}


export default Massagem