import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import img from '../../assets/images/S106V12PBWM_1.jpg'

const Payment = () => {
    return (
        <div className=''>
            <div className='grid md:grid-cols-2 flex-col-reverse '>
                <div className='md:pl-40 md:pr-20 pt-10 pl-6 pr-6 order-last md:order-first'>
                    <h1 className='font-bold text-2xl md:text-[52px]'>THEGIVINGMOMENT</h1>

                    <div className='mt-3'>
                        <p className="flex items-center gap-2 text-xs">
                            <span className="text-[#5b9bbe]">Bag</span><IoIosArrowForward />
                            <span className="text-black">Information</span><IoIosArrowForward />
                            Shipping<IoIosArrowForward />
                            Payment
                        </p>
                    </div>

                    <div className="my-6 md:flex-row flex-col flex justify-between md:items-center">
                        <p className="text-2xl">Contact</p>
                        <div className="flex gap-4">
                            <p>Have an account?</p>
                            <a className="text-[#5b9bbe]" href="">Log in</a>
                        </div>
                    </div>

                    <div>
                        <input placeholder="Email" className="w-full border py-3 rounded-lg pl-3 focus:border-[#5b9bbe]" type="text" />
                        <div className="flex gap-3 mt-4">
                            <input className="w-4 accent-[#5b9bbe]" type="checkbox" name="" id="" />
                            <p className="text-[14px]"> I agree to receive updates and promotions through email and phone</p>
                        </div>
                    </div>

                    <div>
                        <p className="text-2xl py-6">Shipping Address</p>
                        <form className="grid md:grid-cols-2 gap-3">
                            <select className="select select-bordered w-full col-span-2">
                                <option disabled selected>Country</option>
                                <option>Han Solo</option>
                                <option>Greedo</option>
                            </select>
                            <input placeholder="First name" className="w-full border py-3 rounded-md pl-3 focus:border-[#5b9bbe]" type="text" />
                            <input placeholder="Last name" className="w-full border py-3 rounded-md pl-3 focus:border-[#5b9bbe]" type="text" />
                            <input placeholder="Address" className="col-span-2 w-full border py-3 rounded-md pl-3 focus:border-[#5b9bbe]" type="text" />
                            <input placeholder="Apartment, suite, etc." className="col-span-2 w-full border py-3 rounded-md pl-3 focus:border-[#5b9bbe]" type="text" />
                            <input placeholder="City" className="w-full border py-3 rounded-md pl-3 focus:border-[#5b9bbe]" type="text" />
                            <input placeholder="Postal code" className="w-full border py-3 rounded-md pl-3 focus:border-[#5b9bbe]" type="text" />
                            <input placeholder="+880" className="col-span-2 w-full border py-3 rounded-md pl-3 focus:border-[#5b9bbe]" type="text" />

                            <div className="flex gap-3 mt-4 col-span-2">
                                <input className="w-4 accent-[#5b9bbe]" type="checkbox" name="" id="" />
                                <p className="text-[14px]">Save this information for next time</p>
                            </div>
                            <div className="col-span-2 mt-6 flex md:flex-row flex-col md:justify-between md:items-center gap-5">
                                <a className=" flex  items-center text-[#5b9bbe]" href=""><span className="text-xl"> <IoIosArrowBack /></span> Return to bag</a>
                                <button className="btn text-white bg-slate-900">Continue to shipping</button>
                            </div>
                        </form>
                        <div className="mt-12 mb-2">
                            <hr />
                        </div>
                        <div className="mb-4 flex gap-4">
                            <a className="text-[#5b9bbe] text-xs" href="">Refund policy</a>
                            <a className="text-[#5b9bbe] text-xs" href="">Shipping policy</a>
                            <a className="text-[#5b9bbe] text-xs" href="">Privacy policy</a>
                            <a className="text-[#5b9bbe] text-xs" href="">Terms of service</a>
                        </div>
                    </div>
                </div>

                {/* Right side */}
                <div className='bg-base-200 md:pr-40 md:pl-20 pt-10 pl-6 pr-6 border pb-8'>
                    <div className="grid grid-cols-3 items-center gap-4 justify-between">
                        <div className="flex col-span-2 items-center gap-4">
                            <img className="w-16" src={img} alt="" />
                            <div>
                                <h1> Oversized Palestine Hoodie</h1>
                                <p className="text-xs">Pitch Black / M</p></div>
                        </div>
                        <p className=" font-semibold">AED649.00</p>
                    </div>

                    <div className="my-6 border">
                        <hr />
                    </div>

                    <div className="flex gap-4">
                        <input placeholder="Discount code or gift card" className="w-full border py-3 rounded-md pl-3 focus:border-[#5b9bbe]" type="text" />
                        <button className="btn bg-base-300 px-6">Apply</button>
                    </div>

                    <div className="my-6">
                        <hr />
                    </div>

                    <div className="space-y-3">
                        <div className="flex justify-between">
                            <p> Subtotal</p>
                            <p className=" font-semibold">AED649.00</p>
                        </div>
                        <div className="flex justify-between">
                            <p> Shipping</p>
                            <p className="text-xs">Calculated at next step</p>
                        </div>
                    </div>

                    <div className="my-6">
                        <hr />
                    </div>

                    <div>
                        <div className="flex justify-between items-center">
                            <p> Total <span className="text-xs">VAT inclusive</span></p>
                            <p className="text-2xl font-semibold"> <span className="text-xs font-extralight">AED</span> AED649.00</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Payment;