function Banner (props) {
    return (
        <div className='imageContainer'>
                <img src={props.img} alt={props.alt} className={props.class} />
                <div className='overlay'>
                    {props.overlayText ? <h1 className='overlayText'>{props.overlayText}</h1> : null}
                </div>
            </div>
     );
}

export default Banner;