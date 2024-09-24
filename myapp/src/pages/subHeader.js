import bannerImage from "../Assets/food-banner.png"
export default function SubHeader(params) {


    return (
        <>
            <div className="main-banner">
                <div className="sub-banner" >
                    <div className= "banner-content"> Welcome <span style ={{color:"black", fontWeight:"700"}}>Kana</span> , You are at the right place to have a delicious homely cooked food. You are one click away from your favourite dishes.</div>
                    
                </div>
                <div>
                    <img src={bannerImage} alt="banner-image" className="banner-image" />
                </div>
            </div>

        </>
    )

}