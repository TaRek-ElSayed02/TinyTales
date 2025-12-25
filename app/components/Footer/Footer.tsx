
import React from 'react'

export default function Footer() {
    const kid = "/kids-photography.png"
    const lightlogo = "/lightlogo.png"
    const linkedin = "/linkedin.png"
    const face = "/face.png"
    const telegram = "/telegram.png"
    const x = "/x.png"
    const whatsapp = "/whatsapp.png"
    const insta = "/insta.png"
    const mail = "/mail.png"
    const phone = "/phone.png"
    const loc = "/loc.png"

    return (
        <div className="relative w-full h-[auti] md:h-[323px] overflow-hidden ">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${kid})` }}
            >
                <div className="absolute inset-0 bg-black/72"></div>
            </div>

            <div className="relative z-10 text-white h-full">
                <div className="max-w-full md:max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 h-full">
                    <div className="md:hidden py-8 h-full overflow-y-auto">
                        <div className="mb-6">
                            <img src={lightlogo} alt="TinyTales" className="w-16 mb-3" />
                            <p className="text-xs text-gray-300 leading-relaxed">
                                Lorem ipsum dolor sit amet, consectuetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore sit amet, consectuetur adipiscing elit, sed diam nonummy
                            </p>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <span className="text-base"><img src={phone} alt="" /></span>
                                    <span className="text-xs">+87 01928491</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-base"><img src={mail} alt="" /></span>
                                    <span className="text-xs">Named@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-base"><img src={loc} alt="" /></span>
                                    <span className="text-xs">381, cairo, egypt</span>
                                </div>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-3">Let Us Help</h3>
                            <ul className="space-y-1.5 text-xs text-gray-300">
                                <li>My Account</li>
                                <li>FAQs</li>
                                <li>Contact & Support</li>
                                <li>Categories</li>
                                <li>All Products</li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-3">Send Email</h3>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="flex-1 px-3 py-2 rounded-lg bg-white text-gray-800 text-xs outline-none"
                                />
                                <button className="px-5 py-2 bg-rose-300 hover:bg-rose-400 rounded-lg text-white text-xs font-medium transition-colors">
                                    Send
                                </button>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
                            <div className="flex gap-3">
                                <img src={face} alt="Facebook" className="w-7 h-7 cursor-pointer hover:opacity-80 transition-opacity" />
                                <img src={x} alt="Twitter" className="w-7 h-7 cursor-pointer hover:opacity-80 transition-opacity" />
                                <img src={insta} alt="Instagram" className="w-7 h-7 cursor-pointer hover:opacity-80 transition-opacity" />
                                <img src={linkedin} alt="LinkedIn" className="w-7 h-7 cursor-pointer hover:opacity-80 transition-opacity" />
                                <img src={whatsapp} alt="whatsapp" className="w-7 h-7 cursor-pointer hover:opacity-80 transition-opacity" />
                                
                                <img src={telegram} alt="Telegram" className="w-7 h-7 cursor-pointer hover:opacity-80 transition-opacity" />
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:flex py-8 h-full items-center">
                        <div className="w-full grid grid-cols-4 gap-8">
                            <div>
                                <img src={lightlogo} alt="TinyTales" className="w-20 mb-4" />
                                <p className="text-[14px] text-gray-300 leading-relaxed">
                                    Ipsam in eos qui consequatur ab cum inaudilas.Soluta dolor quae ipsam in eos qui consequatur ab .Soluta dolor quae ipsam in eos quconsequatur ab cum maxime.Soluta dolor quae
                                </p>
                            </div>

                            <div>
                                <h3 className="text-[24px] font-semibold mb-4">Let Us Help</h3>
                                <ul className="space-y-2 text-[16px] text-gray-300">
                                    <li className="cursor-pointer hover:text-white transition-colors">My Account</li>
                                    <li className="cursor-pointer hover:text-white transition-colors">FAQs</li>
                                    <li className="cursor-pointer hover:text-white transition-colors">Categories</li>
                                    <li className="cursor-pointer hover:text-white transition-colors">All Products</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-[24px] font-semibold mb-4">Policies</h3>
                                <ul className="space-y-2 text-[16px] text-gray-300  ">
                                    <li className="cursor-pointer hover:text-white transition-colors">Refund Policy</li>
                                    <li className="cursor-pointer hover:text-white transition-colors">About Us</li>
                                    <li className="cursor-pointer hover:text-white transition-colors">Cancellation Policy</li>
                                    <li className="cursor-pointer hover:text-white transition-colors">Terms and Conditions</li>
                                    <li className="cursor-pointer hover:text-white transition-colors">Privacy Policy</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-4">Send Email</h3>
                                <div className="flex gap-2 mb-6">
                                    <input
                                        type="email"
                                        placeholder="Email address"
                                        className="w-[70%] px-3 py-2 rounded-lg bg-white text-gray-800 text-xs outline-none"
                                    />
                                    <button className="px-5 py-2 bg-rose-300 hover:bg-rose-400 rounded-lg text-white text-xs font-medium transition-colors">
                                        Send
                                    </button>
                                </div>

                                <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
                                <div className="flex gap-3">
                                    <img src={face} alt="Facebook" className="w-7 h-7 cursor-pointer hover:opacity-80 transition-opacity" />
                                    <img src={x} alt="Twitter" className="w-7 h-7 cursor-pointer hover:opacity-80 transition-opacity" />
                                    <img src={insta} alt="Instagram" className="w-7 h-7 cursor-pointer hover:opacity-80 transition-opacity" />
                                    <img src={linkedin} alt="LinkedIn" className="w-7 h-7 cursor-pointer hover:opacity-80 transition-opacity" />
                                    <img src={whatsapp} alt="WhatsApp" className="w-7 h-7 cursor-pointer hover:opacity-80 transition-opacity" />
                                    
                                    <img src={telegram} alt="Telegram" className="w-7 h-7 cursor-pointer hover:opacity-80 transition-opacity" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
