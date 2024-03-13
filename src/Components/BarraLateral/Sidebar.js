import React from 'react'
import './Sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'


const Sidebar = ({ sidebar }) => {
    return (
        <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
            <div className='shortcut-links'>
                <div className='side-link'>
                    <img src={home} alt='início' />
                    <p>Início</p>
                </div>
                <div className='side-link'>
                    <img src={tech} alt='tecnologia' />
                    <p>Tecnologias</p>
                </div>
                <div className='side-link'>
                    <img src={news} alt='notícia' />
                    <p>Notícias</p>
                </div>
                <div className='side-link'>
                    <img src={music} alt='música' />
                    <p>Músicas</p>
                </div>
                <div className='side-link'>
                    <img src={automobiles} alt='automóveis' />
                    <p>Automóveis</p>
                </div>
                <div className='side-link'>
                    <img src={blogs} alt='blogs' />
                    <p>Blogs</p>
                </div>
                <div className='side-link'>
                    <img src={sports} alt='esportes' />
                    <p>Esportes</p>
                </div>
                <div className='side-link'>
                    <img src={entertainment} alt='entretenimento' />
                    <p>Entretenimentos</p>
                </div>
                <div className='side-link'>
                    <img src={game_icon} alt='jogos' />
                    <p>Jogos</p>
                </div>
                <hr />
            </div>
            <div className='subscribed-list'>
                <h3>Inscritos</h3>
                <div className='side-link'>
                    <img src={tom} alt='Relinton' />
                    <p>Relinton Pinheiro</p>
                </div>
                <div className='side-link'>
                    <img src={simon} alt='Pinheiro' />
                    <p>Relinton Franco</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar