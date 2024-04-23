import React from 'react'
import Img1 from "../../../public/assets/Vector.svg";
import Img2 from "../../../public/assets/Vector (1).svg";
import Img3 from "../../../public/assets/Card.svg";
import Img4 from "../../../public/assets/Card (1).svg";
import Img5 from "../../../public/assets/Card (2).svg";
import Img6 from "../../../public/assets/Card (3).svg";
import Img7 from "../../../public/assets/Vector (2).svg";
import Img8 from "../../../public/assets/image.png";



const MainComp = () => {
  return (
    <div className="container">
      <div className="flex justify-between bg-[white] py-[30px] px-[30px] mb-[100px]">
        <img src={Img1} alt="brandlogo" />
        <img src={Img2} alt="brandlogo" />
        <img src={Img3} alt="brandlogo" />
        <img src={Img4} alt="brandlogo" />
        <img src={Img5} alt="brandlogo" />
        <img src={Img6} alt="brandlogo" />
        <img src={Img7} alt="brandlogo" />
      </div>
      <div className="mb-[150px]">
        <img src={Img8} alt="image" />
      </div>
    </div>
  );
}

export default MainComp;