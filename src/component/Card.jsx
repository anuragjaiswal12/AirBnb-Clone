// import personImage from '../assets/katie-zaferes.png';
import star from '../assets/star.png';

export default function Card(props) {
    let badgeText;
    badgeText = props.openSpots <= 0 ? 'SOLD OUT' : (props.location === 'Online' ? 'ONLINE' : '');
    return (
        <>
            <div className="card">
                {/* {props.openSpots > 0 ? <></> : <div className='card-badge'>{badgeText}</div>} */}
                {badgeText === '' ? <></> : <div className='card-badge'>{badgeText}</div>}
                <img src={`../src/assets/${props.coverImg}`} className="card-image" />
                <div className="card-stats">
                    <img src={star} className="card-star" />
                    <span>{props.stats.rating}</span>
                    <span className="gray">({props.stats.reviewCount}) • </span>
                    <span className="gray">{props.location}</span>
                </div>
                <p className="card-title">{props.title}</p>
                <p className="card-price"><span className="bold">From ${props.price}</span> / person</p>
            </div>
        </>
    );
}