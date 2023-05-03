import "./hotel.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react"
const Hotel = () => {
    const [slideNumber, setSlideNumber]=useState(0);
    const [open, setOpen]=useState(false);
    const photos=[
        {
            src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/89892907.jpg?k=0d7dbf5b590a5332cd3e238356886655843ee80828f53268fbeaca706046fac1&o=&hp=1"
        },
        {
            src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/398928301.jpg?k=c10e6110dfa5d91d9d2b263f602e08a1f39844936150e537189c219d17eabfb3&o=&hp=1"
        }
        ,
        {   src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/241729458.jpg?k=1f63eff0e53863a99dd964aa94c16c7201de25b304b8e2f67d3adf5f06d0afd5&o=&hp=1"

        },
        {   src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/22359949.jpg?k=ea74e8190469ac37b1b307a01611797c1fed0c2adb03bcb2ec705818296fe7df&o=&hp=1"

        },
        {   src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/34975384.jpg?k=95ea44498398530d9785eb4e563ad735af96a64360205b600220c6a72e6a7e3e&o=&hp=1"

        },
        {   src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/22359923.jpg?k=d2f44827ca85fde796391aa6278dec5b7f55a78a96c271d93ea064316d3f861a&o=&hp=1"

        },
    ];
    const handleOpen=(i)=>{
        setSlideNumber(i)
        setOpen(true)
    }
    const handleMove=(direction)=>{
        let newSliderNumber;
        if(direction==="l"){
            newSliderNumber= slideNumber === 0 ? 5: slideNumber-1
        }
        else{
            newSliderNumber= slideNumber === 5 ? 0: slideNumber+1
        }

        setSlideNumber(newSliderNumber)
    }
    return (  
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="hotelContainer">
                {open && <div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
                    <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
                    <div className="sliderWrapper">
                        <img src={photos[slideNumber].src} alt="" className="sliderImg" />
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>
                </div>}
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book Now!</button>
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>El Ton st 125 New york</span>
                    </div>
                    <span className="hotelDistance">
                        Excellent location - 500m from center
                    </span>
                    <span className="hotelPriceHighlight">
                        Book a stay over $114 at this property and get free airport taxi
                    </span>
                    <div className="hotelImages">
                        {photos.map((photo,i)=>(
                            <div className="hotelImgWrapper">
                                <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
                            <p className="hotelDesc">
                                located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                                Street Apartments has accomodations with air conditioning and 
                                free Wifi. The units come with hardwood floors and feature a
                                fully equipped kitchenette with a microwave, a flat-screen TV ,
                                and a private bathroom with shower and a hairdryer. A fridge is 
                                also offered, as well as an electric tea pot and a coffe 
                                machine. Popular points of interest near the apartment include
                                Cloth Hall, Main Market Square and Town Hall Tower. The nearest 
                                airport is John Paul II International Krakow-Balice, 16.1 km
                                from Tower Street Apartments, and the property offers a paid 
                                airport shuttle service. 
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a 9-night stay!</h1>
                            <span>
                                Located in the real heart of krakow, this property
                                has an excellent location score of 9.8!
                            </span>
                            <h2>
                                <b>$945</b> (9 nights)
                            </h2>
                            <button>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
                <MailList/>
                <Footer/>
            </div>
        </div>
    );
}
 
export default Hotel;