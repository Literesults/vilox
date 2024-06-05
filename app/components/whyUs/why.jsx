import Image from "next/image";
import wIcon from '../../assets/w-icon.png'

const WhyUs = () => {
    return (
        <div className="whyContainer h-auto lg:p-14 p-6"
            style={
                {
                    backgroundColor: '#0F0F0F'
                }
            }
        >
            <h4 className="text-3xl text-white font-bold text-center py-4">Why  use Vilox</h4>
            <p className="text-1xl font-normal text-center"
                style={{
                    color: '#C7C7C7'
                }}
            >
                At Vilox we offer this key features and many more <br />
                Download the app and give us a try today!!
            </p>
            <div className="grid lg:grid-cols-3 my-14"  >
                <div className="gridItem p-6 pt-2 pb-11 lg:m-4 m-2"
                style={
                    {backgroundColor: '#EFEFEF',
                     borderRadius: '20px'
                    }
                }
                >
                    <Image src={wIcon}  className="py-3" />
                    <h5 className="font-semibold, text-2xl py-3" 
                    style={
                        {color: '#0F0F0F'}
                    }
                    >Secure & Safe</h5>
                    <p 
                    style={
                        {fontSize: '14px'}
                    }
                    >
                        We ensure that trading your digital assets are very safe and secure. No Ripping. No Delay. No Scam.
                    </p>
                </div>
                <div className="gridItem p-6 pt-2 pb-11 lg:m-4 m-2"
                style={
                    {backgroundColor: '#EFEFEF',
                     borderRadius: '20px'
                    }
                }
                >
                    <Image src={wIcon}  className="py-3" />
                    <h5 className="font-semibold, text-2xl py-3" 
                    style={
                        {color: '#0F0F0F'}
                    }
                    > Customers Satisfaction</h5>
                    <p 
                    style={
                        {fontSize: '14px'}
                    }
                    >
                        Ensuring that our customers are satisfied is what keeps us moving in business. We give the best services of all.
                    </p>
                </div>
                <div className="gridItem p-6 pt-2 pb-11 lg:m-4 m-2"
                style={
                    {backgroundColor: '#EFEFEF',
                     borderRadius: '20px'
                    }
                }
                >
                    <Image src={wIcon}  className="py-3" />
                    <h5 className="font-semibold, text-2xl py-3" 
                    style={
                        {color: '#0F0F0F'}
                    }
                    >Fast pay, High Rate</h5>
                    <p 
                    style={
                        {fontSize: '14px'}
                    }
                    >
                     Yes, we offer high rates on all cards and we give you the fastest payment method. This is a fact and not a lie, give it a try today.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WhyUs