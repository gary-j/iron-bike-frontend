import React from 'react'

const Features = () => {
  return (
    <div className="features">
        <div className="feature">
            <img className="featureIcon" src="https://res.cloudinary.com/ironbike/image/upload/v1650052924/Main/001-free-shipping_bmxo31.png" alt="free shipping"/>
            <span className="featureTitle">FREE SHIPPING</span>
            <span className="featureDesc">Free worldwide shipping on all orders.</span>
        </div>
        <div className="feature">
            <img className="featureIcon" src="https://res.cloudinary.com/ironbike/image/upload/v1650052924/Main/002-exchange_kk8ajk.png" alt="return products"/>
            <span className="featureTitle">30 DAYS RETURN</span>
            <span className="featureDesc">No question return and easy refund in 14 days.</span>
        </div>
        <div className="feature">
            <img className="featureIcon" src="https://res.cloudinary.com/ironbike/image/upload/v1650052924/Main/004-debit-cards_bn7tkf.png" alt="payment"/>
            <span className="featureTitle">CREDIT CARDS</span>
            <span className="featureDesc">Buy products with credit cards.</span>
        </div>
        <div className="feature">
            <img className="featureIcon" src="https://res.cloudinary.com/ironbike/image/upload/v1650052924/Main/003-support-services_uxscxx.png" alt="support system"/>
            <span className="featureTitle">CONTACT US!</span>
            <span className="featureDesc">Keep in touch via email and support system.</span>
        </div>
    </div>

  )
}

export default Features