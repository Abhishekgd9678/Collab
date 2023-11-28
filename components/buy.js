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
        <div className="w-[100%] flex ">
            <div className="flex justify-around mt-3 w-full p-4 rounded-3xl shadow-sm">
            <div className="mt-5 flex flex-col">
                {imgInfo.results.map((x) => (
                <div className="h-32 m-2 ">
                    <img className="h-28 w-28 object-cover rounded-[50%]" src={x.urls.regular} onClick={()=>{
                    setDispImg(x.urls.regular)
                    }}/>
                </div>
                ))}
            </div>
                <div className="w-[400px] h-[400px] mt-12">
                <img className="w-full h-full" src={disp_img} />
                </div>
            <div className="mt-10 w-1/3">
                <h2 className="font-bold text-4xl">{data[id][0].description}</h2>
                <h3>{amounnt}</h3>
                <p className="flex">
                    <h5>MRP:</h5><h5 className="line-through">{buyprice}</h5>
                </p>
                <h3>Price:₹{Math.round(buyprice - buyprice*discount/100)}</h3>
                <h4>You save {discount}% OFF</h4>
                <h6>(inclusive of all taxes)</h6>
                <div className="flex mt-5 hover:cursor-pointer">
                    <button className="w-3/5 border border-gray-400 m-2 p-2">
                        <h3>Add to basket</h3>
                    </button>
                    <button className="w-2/5 border border-gray-400 m-2 p-2">
                        <h3>Save for later</h3>
                    </button>
                </div>
                <div className="p-1">
                        {data[id].map((x,index)=>{
                            return (
                                <div  className={`${
                                    activeIndex === index
                                      ? 'bg-green-50 border bg-slate-100-300'
                                      : 'hover:bg-red-50'
                                  } hover:cursor-pointer rounded-md h-11 text-lg flex justify-between mt-5 items-center`}
                                    onClick={()=>{
                                        setAmount(x.quantity);
                                        setPrice(x.price);
                                        setActiveIndex(index);
                                        console.log("clicked");
                                    }}
                                    key={x.price}>
                                        <div className="w-80 flex justify-around">
                                    <div>              
                                        <h3>{x.quantity}</h3>
                                    </div>
                                    <div >
                                        <h3>{Math.round(x.price - (x.price)/100 * (x.discountPercentage))}</h3>
                                    </div>
                                        </div>     
                                    <div className="mr-2">
                                        <h4 className={activeIndex==index?'flex':'hidden'}>✔</h4>
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