import React from "react";
import discount from '../../Assets/discount.png'

function Discount() {
  return <div>
     {/* <!-- Start Discount --> */}
    <div className="discount" id="discount">
        <div className="image">
            <div className="content">
                <h2>We Have A Discount </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, animi? Hic fuga blanditiis eligendi ipsam, ipsum repellendus praesentium! Accusantium quo obcaecati esse. Provident rerum obcaecati quibusdam hic molestias? Eveniet, nesciunt!</p>
                <img src={discount} alt=""/>
            </div>
        </div>
        <div className="form">
            <div className="content">
                <h2>Request A Discount</h2>
                <form action="">
                    <input className="input" type="text" placeholder="Your Name" name="name" />
                    <input className="input" type="email" placeholder="Your Email" name="email" />
                    <input className="input" type="text" placeholder="Your Phone" name="mobile" />
                    <textarea className="input" placeholder="Tell Us About Your Needs" name="message"></textarea>
                    <input type="submit" value="Send" />
                </form>
            </div>
        </div>
    </div>
    {/* <!-- End Discount --> */}
  </div>;
}

export default Discount;
