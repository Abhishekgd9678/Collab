    import { useEffect, useState } from "react";
    import { useParams } from "react-router-dom";
    import axios from "axios";
    import data from "./data.json"
    const clientId = "n_F01GuAtjZop_zy9iR53CtCOGe53EtWAgC_MiVwNmY";

    const UNSPLASH_ROOT = 'https://api.unsplash.com'

    const buy = ()=>{
        const[imgInfo,setImgInfo] = useState([]);
        const [disp_img,setDispImg] = useState("");
        const {id} = useParams();
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
                <h2>Pricing</h2>
                <div className="pricing_display">
                    <div className="price_box">
                        <p>1 kg</p>
                        <p>
                            {data[id][0]}
                        </p>
                    </div>
                    <div className="price_box">
                        <p>2 kg</p>
                        <p>
                            {data[id][1]}
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>      
        );
    }

    export default buy