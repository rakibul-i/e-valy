import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import { useStateValue } from '../../contextAPI/StateProvider';
import Payment from '../payment/Payment';
import './checkout.css';

const Checkout = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [shippingData, setShippingData] = useState(null);
    const [{basket}] = useStateValue();
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();
      const onSubmit = (data) => {
          const allData = {
              shippingdata:data,
              products:basket,
          };
        setShippingData(allData);
      };
      console.log(shippingData);
    return (
        <div className="checkout__page">
            <div className="w-75 mx-auto ">
                    <div className="row my-5">
                        <div style={{display: shippingData ? 'none' : 'block'}} className="col-lg-6 col-md-6 col-12 px-lg-5 p-md-0 mx-auto ">
                            <div className="checkout__form ">
                            <h6 className="mb-3">Please! fill up the form with correct information.</h6>
                            <form onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="username">User Name</label>
                            <input
                                className="form-control"
                                name="username"
                                {...register("username",{ required: true })}
                            />

                            <label htmlFor="address">Address</label>
                            <input className="form-control" name="address" placeholder="address, city, district, division.." {...register("address", { required: true })} />

                            <label htmlFor="phone">Phone</label>
                            <input className="form-control"  name="phone" placeholder="+880" {...register("phone",{ required: true })} />

                            <label htmlFor="email">Email</label>
                            <input
                                className="form-control"
                                name="email"
                                placeholder='test@test.com'
                                type="text"
                                {...register("email",{ required: true })}
                            />
                            <input className="form-control mt-2" type="submit" />
                            </form>
                            </div>
                        </div>
                        <div style={{display: shippingData ? 'block' : 'none'}} className="col-lg-3 col-md-6 col-12 mx-auto">
                            <Payment/>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Checkout;