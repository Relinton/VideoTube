import React from 'react'
import './Feed.css'
import thumbnail1 from '../../assets/.net_capa.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import { Link } from '../../../node_modules/react-router-dom/dist/index'

const Feed = () => {
    return (
        <div className='feed'>
            <Link to={`video/20/4521`} className='card'>
                <img src={thumbnail1} alt="miniatura 1" />
                <h2>.NET (A Plataforma Completa de Desenvolvimento de Softwares)</h2>
                <h3>Código Fonte TV</h3>
                <p>147 mil visualizações; há 3 anos</p>
            </Link>
            <div className='card'>
                <img src={thumbnail2} alt="miniatura 2" />
                <h2>Lorem Ipsum é um texto fictício da indústria de impressão...</h2>
                <h3>Lorem Ipsum</h3>
                <p>15k visualizações; 2 dias atrás</p>
            </div>
            <div className='card'>
                <img src={thumbnail3} alt="miniatura 3" />
                <h2>Lorem Ipsum é um texto fictício da indústria de impressão...</h2>
                <h3>Lorem Ipsum</h3>
                <p>15k visualizações; 2 dias atrás</p>
            </div>
            <div className='card'>
                <img src={thumbnail4} alt="miniatura 4" />
                <h2>Lorem Ipsum é um texto fictício da indústria de impressão...</h2>
                <h3>Lorem Ipsum</h3>
                <p>15k visualizações; 2 dias atrás</p>
            </div>
            <div className='card'>
                <img src={thumbnail5} alt="miniatura 5" />
                <h2>Lorem Ipsum é um texto fictício da indústria de impressão...</h2>
                <h3>Lorem Ipsum</h3>
                <p>15k visualizações; 2 dias atrás</p>
            </div>
            <div className='card'>
                <img src={thumbnail6} alt="miniatura 6" />
                <h2>Lorem Ipsum é um texto fictício da indústria de impressão...</h2>
                <h3>Lorem Ipsum</h3>
                <p>15k visualizações; 2 dias atrás</p>
            </div>
            <div className='card'>
                <img src={thumbnail7} alt="miniatura 7" />
                <h2>Lorem Ipsum é um texto fictício da indústria de impressão...</h2>
                <h3>Lorem Ipsum</h3>
                <p>15k visualizações; 2 dias atrás</p>
            </div>
            <div className='card'>
                <img src={thumbnail8} alt="miniatura 8" />
                <h2>Lorem Ipsum é um texto fictício da indústria de impressão...</h2>
                <h3>Lorem Ipsum</h3>
                <p>15k visualizações; 2 dias atrás</p>
            </div>
            <div className='card'>
                <img src={thumbnail1} alt="miniatura 1" />
                <h2>Lorem Ipsum é um texto fictício da indústria de impressão...</h2>
                <h3>Lorem Ipsum</h3>
                <p>15k visualizações; 2 dias atrás</p>
            </div>
            <div className='card'>
                <img src={thumbnail2} alt="miniatura 2" />
                <h2>Lorem Ipsum é um texto fictício da indústria de impressão...</h2>
                <h3>Lorem Ipsum</h3>
                <p>15k visualizações; 2 dias atrás</p>
            </div>
            <div className='card'>
                <img src={thumbnail3} alt="miniatura 3" />
                <h2>Lorem Ipsum é um texto fictício da indústria de impressão...</h2>
                <h3>Lorem Ipsum</h3>
                <p>15k visualizações; 2 dias atrás</p>
            </div>
            <div className='card'>
                <img src={thumbnail4} alt="miniatura 4" />
                <h2>Lorem Ipsum é um texto fictício da indústria de impressão...</h2>
                <h3>Lorem Ipsum</h3>
                <p>15k visualizações; 2 dias atrás</p>
            </div>
            <div className='card'>
                <img src={thumbnail5} alt="miniatura 5" />
                <h2>Lorem Ipsum é um texto fictício da indústria de impressão...</h2>
                <h3>Lorem Ipsum</h3>
                <p>15k visualizações; 2 dias atrás</p>
            </div>
            <div className='card'>
                <img src={thumbnail6} alt="miniatura 6" />
                <h2>Lorem Ipsum é um texto fictício da indústria de impressão...</h2>
                <h3>Lorem Ipsum</h3>
                <p>15k visualizações; 2 dias atrás</p>
            </div>
            <div className='card'>
                <img src={thumbnail7} alt="miniatura 7" />
                <h2>Lorem Ipsum é um texto fictício da indústria de impressão...</h2>
                <h3>Lorem Ipsum</h3>
                <p>15k visualizações; 2 dias atrás</p>
            </div>
            <div className='card'>
                <img src={thumbnail8} alt="miniatura 8" />
                <h2>Lorem Ipsum é um texto fictício da indústria de impressão...</h2>
                <h3>Lorem Ipsum</h3>
                <p>15k visualizações; 2 dias atrás</p>
            </div>
        </div>
    )
}

export default Feed