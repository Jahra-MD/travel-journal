import locationIcon from './location.png'

export default function Entry(props){
    console.log(props, 'props')
    return (
        <article className='journal-entry'>
            
            <div  className="main-image-container" >
            <img className='main-image' src={props?.img?.src} alt={props?.img?.alt} />
             </div>
            <div>
                <img src={locationIcon} alt="map marker icon" width= "15px" height="15px" />
                <span>{props.country}</span>
                <a href={props.googleMapsLink}> view on Google Map</a>

                <h2>{props.title}</h2>
                <p>{props.dates}</p>
                <p>{props.text}</p>
            </div>

        </article>
    )
}