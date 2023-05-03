import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi} from "@fortawesome/free-solid-svg-icons"
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import "./header.css"
import { useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
const Header = ({type}) => {
    const [destination, setDestination]=useState("")
    const [openDate, setOpenDate]=useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
    const [openOptions , setOpenOptions]=useState(false);
    const [options , setOptions]=useState({
      adult:1 ,
      children:0,
      room:1

    });
    const navigate=useNavigate()
    const handleOption=(name ,operation )=>{
      setOptions(prev=>{return {
        ...prev , [name]:operation==="i"? options[name] +1:options[name] -1 ,
      };
    });
    };
    const handleSearch=()=>{
      navigate("/hotels",{state:{destination,date,options}});
    }
    return ( 
        <div className="header">
            <div className={type==="list"?"header_Container listMode" :"header_Container"}>
                <div className="header_List">
                    <div className="header_List_Item active">
                <FontAwesomeIcon icon={faBed} />
                <span>Stays</span>
                </div>
                <div className="header_List_Item">
                <FontAwesomeIcon icon={faPlane} />
                <span>Flights</span>
                </div><div className="header_List_Item">
                <FontAwesomeIcon icon={faCar} />
                <span>Car Rentals</span>
                </div><div className="header_List_Item">
                <FontAwesomeIcon icon={faBed} />
                <span>Attractions</span>
                </div><div className="header_List_Item">
                <FontAwesomeIcon icon={faTaxi} />
                <span>Airport Taxi</span>
                    </div>
                </div>
                { type !=="list" &&
                  <>
                <h1 className="header_Title">A Lifetime of discounts? it's Genius.</h1>
                <p className="header_Desc">Get rewarded for your travel - unlock instant of 
                    10% or more with a free Hondabooking account</p>
                <button className="header_Button">Sign in / Register</button>
                <div className="header_Search">
                <div className="headerSearch_Item">
                <FontAwesomeIcon icon={faBed} className="header_Icon"/>
                <input type="text" placeholder="Where are you going?"
                className="headerSearch_Input"
                onChange={e=>setDestination(e.target.value)} />
                </div>
                <div className="headerSearch_Item">
                <FontAwesomeIcon icon={faCalendarDays} className="header_Icon"/>
                <span onClick={()=>setOpenDate(!openDate)} className="headerSearch_Text">{`${format(date[0].startDate, "dd/MM/yyyy"
                )} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                {openDate&& <DateRange
                     editableDateInputs={true}
                     onChange={item => setDate([item.selection])}
                     moveRangeOnFirstSelection={false}
                     ranges={date}
                className="date"
                minDate={new Date()}
                />}
                </div>
                <div className="headerSearch_Item">
                <FontAwesomeIcon icon={faPerson} className="header_Icon"/>
                <span onClick={()=> setOpenOptions(!openOptions)} className="headerSearch_Text">{`${options.adult} adult . ${options.children} children . ${options.room} room`}
                 </span>
                 {openOptions && <div className="options">
                  <div className="optionItem">
                    <span className="optionText">Adult</span>
                    <div className="optionCounter">
                    <button
                    disabled={options.adult<=1}
                    className="optionCounterButton" onClick={()=>handleOption("adult","d")}>-</button>
                    <span className="optionCounterNumber">{options.adult}</span>
                    <button className="optionCounterButton" onClick={()=>handleOption("adult","i")}>+</button>
                    </div>
                  </div>
                  <div className="optionItem">
                    <span className="optionText">Children</span>
                    <div className="optionCounter">
                    <button 
                    disabled={options.children<=0}
                    className="optionCounterButton" onClick={()=>handleOption("children","d")}>-</button>
                    <span className="optionCounterNumber">{options.children}</span>
                    <button className="optionCounterButton" onClick={()=>handleOption("children","i")}>+</button>
                    </div>
                  </div>
                  <div className="optionItem">
                    <span className="optionText">Room</span>
                    <div className="optionCounter">
                    <button
                    disabled={options.room<=1}
                    className="optionCounterButton" onClick={()=>handleOption("room","d")}>-</button>
                    <span className="optionCounterNumber">{options.room}</span>
                    <button className="optionCounterButton" onClick={()=>handleOption("children","i")}>+</button>
                    </div>
                  </div>
                 </div>}
               </div>
               <div className="headerSearch_Item">
                <button className="header_Button" onClick={handleSearch}>Search</button>
               </div>
             </div></>}
          </div>
        </div>
     );
}
 
export default Header;