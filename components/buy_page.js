import React, { useState } from "react";
import data from "./data.json";
const url = "https://cdn-icons-png.flaticon.com/512";
const Buy_page = () => {
  const [variable,setVariable] = useState();
  const [disp_imgId, setDispImg] = useState(data.data[0].id);
  // console.log(data.data[0].link);

  return (
    <div className="main container">
      <div className="buy-data">
        <h2>hii</h2>
        <div className="images_section">
          <div className="side_imgs">
            {data.data.map((x) => (
              <div className="side_img" key={x.id}>
                <img src={x.link} alt={`Image ${x.id}`} onClick={()=>{
                  setDispImg(x.id)
                }}/>
              </div>
            ))}
          </div>
            <div className="display_img">
              <img src={url+disp_imgId} />
              {console.log(url+disp_imgId)}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Buy_page;
