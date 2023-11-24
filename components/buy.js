    import { useEffect, useState } from "react";
    import { useParams } from "react-router-dom";
    import axios from "axios";
    import data from "./data.json"
    const clientId = "n_F01GuAtjZop_zy9iR53CtCOGe53EtWAgC_MiVwNmY";

    const UNSPLASH_ROOT = 'https://api.unsplash.com'

    const buy = ()=>{
        const[imgInfo,setImgInfo] = useState([]);
        const [disp_img,setDispImg] = useState("");
        // const[active,setActive]  = useState(false);
        const [activeIndex, setActiveIndex] = useState(0);
        const {id} = useParams();
        const  [buyprice,setPrice] = useState(data[id][0].price);
        const  [amounnt,setAmount] = useState(data[id][0].quantity);
        const  [discount,setDiscount] = useState(data[id][0].discountPercentage);
        useEffect(()=>{
            apicall(id);
        },[])
        const apicall = async (query)=>{ 
            const {data} = await axios.get(
                `${UNSPLASH_ROOT}/search/photos?query=${query}&client_id=${clientId}&per_page=5`
                )
                setImgInfo(data);
                setDispImg( data?.results[0]?.urls?.regular ) ;
        }
        return (imgInfo.length===0)?<h1>loading</h1> :  (
        <div className="main container">
        <div className="buy-data">
            <div className="images_prices">
            <div className="side_imgs">
                {imgInfo.results.map((x) => (
                <div className="side_img">
                    <img src={x.urls.regular} onClick={()=>{
                    setDispImg(x.urls.regular)
                    }}/>
                </div>
                ))}
            </div>
                <div className="display_img">
                <img src={disp_img} />
                </div>
            <div className="price_section">
                <h2>{data[id][0].description}</h2>
                <h3>{amounnt}</h3>
                <p>
                    <h5>MRP:</h5><h5 className="strikeMRP">{buyprice}</h5>
                </p>
                <h3>Price:₹{buyprice - buyprice*discount/100}</h3>
                <h4>You save {discount}% OFF</h4>
                <h6>(inclusive of all taxes)</h6>
                <div className="buy_button">
                    <button className="addbtn">
                        <h3>Add to basket</h3>
                    </button>
                    <button className="savebtn">
                        <h3>Save for later</h3>
                    </button>
                </div>
                <div className="pricing_display">
                        {data[id].map((x,index)=>{
                            return (
                                <div className={activeIndex==index?'addborder price_box':' price_box'}
                                    onClick={()=>{
                                        setAmount(x.quantity);
                                        setPrice(x.price);
                                        setActiveIndex(index);
                                        console.log("clicked");
                                    }}
                                    key={x.price}>
                                        <div className="price_box_flex">
                                    <div>              
                                        <h3>{x.quantity}</h3>
                                    </div>
                                    <div >
                                        <h3>{x.price - (x.price)/100 * (x.discountPercentage)}</h3>
                                    </div>
                                        </div>     
                                    <div className="pricebox_tick">
                                        <h4 className={activeIndex==index?'item_selected':'item_select'}>✔</h4>
                                    </div>
                                </div>   
                            )   
                        })}
                </div>
            </div>
            </div>
        </div>
        </div>      
        );
    }

    export default buy