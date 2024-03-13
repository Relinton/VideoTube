import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/videos/.net.mp4'
import gostei from '../../assets/like.png'
import naoGostei from '../../assets/dislike.png'
import compartilhar from '../../assets/share.png'
import salvar from '../../assets/save.png'
import jack from '../../assets/jack.png'
import perfilDoUsuario from '../../assets/user_profile.jpg'

const PlayVideo = () => {
    return (
        <div className='play-video'>
            <video src={video1} controls autoPlay muted></video>
            <h3>.NET (A Plataforma Completa de Desenvolvimento de Softwares) // Dicionário do Programador</h3>
            <div className='play-video-info'>
                <p>147 mil visualizações  há 3 anos</p>
                <div>
                    <span><img src={gostei} alt='' />125</span>
                    <span><img src={naoGostei} alt='' />2</span>
                    <span><img src={compartilhar} alt='' />Compartilhar</span>
                    <span><img src={salvar} alt='' />Salvar</span>
                </div>
            </div>
            <hr />
            <div className='publisher'>
                <img src={jack} alt='' />
                <div>
                    <p>Código Fonte TV</p>
                    <span>645 mil inscritos</span>
                </div>
                <button>Inscrever-se</button>
            </div>
            <div className='vid-description'>
                <p>Ano após ano o .NET (ou dotNet) se consolida ainda mais como uma das melhores plataformas de desenvolvimento de software que existem. Seja para desenvolvimento de Web, Mobile, Desktop e também Games esse "framework" já passou por muitas mudanças e na última versão (o .NET 5) está mais poderoso que nunca.</p>
                <hr />
                <h4>215 comentários</h4>
                <div className='comment'>
                    <img src={perfilDoUsuario} alt='perfil do usuário' />
                    <div>
                        <h3>Relinton Pinheiro Franco <span>1 dia atrás</span></h3>
                        <p>O ASP.NET Core é um framework poderoso e flexível para o desenvolvimento de aplicativos web e serviços, conhecido por sua performance, escalabilidade e capacidade de execução em diferentes plataformas.</p>
                        <div className='comment-action'>
                            <img src={gostei} alt='' />
                            <span>244</span>
                            <img src={naoGostei} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayVideo