import React from 'react'
import bg from '../assets/images/bg.jpg'
import tor from '../assets/images/tor.png'

const Upcoming = () => {
    return (
        <div className="upcoming">
            <div className="upcoming__slide">
                <img src={bg} alt="" />
                <h1 className="upcoming__slide-title">Мир Юрского периода: Господство</h1>
                <p className="upcoming__slide-text">После уничтожения острова Нублар динозавры вырвались на свободу и стали полноправными обитателями планеты. Людям удается поддерживать хрупкое равновесие, определяющее мирное сосуществование на Земле. Но как долго человек сможет сохранять...</p>

            </div>
            <div className="upcoming__next">
                <span className='upcoming__next-text'>Следующий</span>
                <h3 className="upcoming__slide-title">Тор: Любовь и гром</h3>
                <img className='upcoming__next-img' src={tor} alt="" />
                <div className="upcoming__next-line">
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default Upcoming