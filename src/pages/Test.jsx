import { useState } from "react";
import "../styles/pages/test.css";
import heartRedImg from '../../public/images/heart_red.svg'
import heartWhiteImg from '../../public/images/heart_vide.svg'
export default function Test() {
     const [isLike, setIsLike] = useState(false);
     const [numOfLike, setNumOfLike] = useState(1928);

     function addLike() {
          setIsLike((prev) => {
               const newLikeState = !prev;
               setNumOfLike((count) => (newLikeState ? count + 1 : count - 1));
               return newLikeState;
          });
     }

     return (
          <div className="test-container" style={{ textAlign: "center" }}>
               <img
                    src={isLike ? heartRedImg : heartWhiteImg}
                    onClick={addLike}
                    alt="like button"
                    width="60"
                    style={{
                         cursor: "pointer",
                         transition: "transform 0.2s ease-in",
                         transform: isLike ? "scale(1.2)" : "scale(1)",
                    }}
               />
               <p style={{ fontSize: "18px", marginTop: "10px" }}>{numOfLike}</p>
          </div>
     );
}
