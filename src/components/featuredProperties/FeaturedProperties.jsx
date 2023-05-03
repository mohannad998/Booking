import "./featuredProperties.css"
const featuredProperties =()=>{
    return(
    <div className="fp">
        <div className="fpItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/44146554.webp?k=bc461f3aff9a66c15ddae3b3a7e10a44f6aea550cb89ce292cec7ca0b4ccecdb&o=&s=1" alt="" className="fpImg" />
        <span className="fpName">Villa Domina</span>
        <span className="fpCity">Croatia</span>
        <span className="fpPrice">Starting from EGP 1,466</span>
          <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
          </div>
        </div>
        <div className="fpItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1" alt="" className="fpImg" />
        <span className="fpName">7Seasons Apartments Budapest</span>
        <span className="fpCity">Hungary</span>
        <span className="fpPrice">Starting from 5,441</span>
          <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
          </div>
        </div>
        <div className="fpItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=979587fd2ac8f7777a34758264d557eef57d0e98e58bdaeb121f5b968a20f810&o=&s=1" alt="" className="fpImg" />
        <span className="fpName">Oriente Palace Apartments</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from EGP 3,398</span>
          <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
          </div>
        </div>
        <div className="fpItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" alt="" className="fpImg" />
        <span className="fpName">Aparthotel Stare Miasto </span>
        <span className="fpCity">Poland</span>
        <span className="fpPrice">Starting from EGP 3,095</span>
          <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
          </div>
        </div>
    </div>
    )
}
export default featuredProperties