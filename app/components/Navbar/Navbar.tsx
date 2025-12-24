// import React from 'react'

// export default function Navbar() {
//     const logo = "/logo.png";
//     const homevector = "homevector.png";
//     const apps = "apps.png";
//     const chatinformation = "chat-information.png";
//     const idcard = "idcard.png";
//     const interactive = "interactive.png";
//     const love = "love.png";
//     const mingcutedown = "mingcute_down-line.png";
//     const notification = "notification03.png";
//     const shoppingbag = "shoppingbag.png";
//     const user = "user.png";
//     const group = "Group.png";

//    return (
// <div className='py-5 '>
//     <div className='flex justify-between items-center mx-auto'>
//                 {/* Logo */}
//                 <div className='flex items-center gap-8'>
//                     <img src={logo} alt="Logo" className='h-12' />
//                 {/* Navigation Links */}
//                 <div className='flex items-center gap-8'>
//                     <div className='flex items-center gap-2 cursor-pointer'>
//                         <img src={homevector} className="w-5 h-5" alt="Home" />
//                         <p className='text-gray-700 m-0'>Home</p>
//                     </div>

//                     <div className='flex items-center gap-2 cursor-pointer'>
//                         <img src={apps} className="w-5 h-5" alt="Category" />
//                         <p className='text-gray-700 m-0'>Our Category</p>
//                     </div>

//                     <div className='flex items-center gap-2 cursor-pointer'>
//                         <img src={chatinformation} className="w-5 h-5" alt="About" />
//                         <p className='text-gray-700 m-0'>About Us</p>
//                     </div>

//                     <div className='flex items-center gap-2 cursor-pointer'>
//                         <img src={idcard} className="w-5 h-5" alt="Contact" />
//                         <p className='text-gray-700 m-0'>Contact Us</p>
//                     </div>

//                     <div className='flex items-center gap-2 cursor-pointer'>
//                         <img src={interactive} className="w-5 h-5" alt="FAQs" />
//                         <p className='text-gray-700 m-0'>FAQs</p>
//                     </div>
//                 </div>
//                 </div>


//                 {/* Right Side Icons */}
//                 <div className='flex items-center gap-4'>
//                     <img src={shoppingbag} className="w-6 h-6 cursor-pointer" alt="Shopping Bag" />
//                     <img src={notification} className="w-6 h-6 cursor-pointer" alt="Notifications" />
//                     <img src={love} className="w-6 h-6 cursor-pointer" alt="Favorites" />

//                     <div className='flex items-center gap-1 cursor-pointer'>
//                         <span className='text-gray-700'>EN</span>
//                         <img src={mingcutedown} className="w-4 h-4" alt="Language" />
//                     </div>

//                     <div className='flex items-center gap-1 cursor-pointer'>
//                         <img src={user} className="w-6 h-6" alt="User" />
//                         <img src={mingcutedown} className="w-4 h-4" alt="User Menu" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
'use client';
import React, { useState } from 'react'

export default function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const logo = "/logo.png";
    const homevector = "homevector.png";
    const apps = "apps.png";
    const chatinformation = "chat-information.png";
    const idcard = "idcard.png";
    const interactive = "interactive.png";
    const love = "love.png";
    const mingcutedown = "mingcute_down-line.png";
    const notification = "notification03.png";
    const shoppingbag = "shoppingbag.png";
    const user = "user.png";
    const group = "Group.png";

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
                
                body {
                    font-family: 'Poppins', sans-serif;
                }
                
                .navbar-text {
                    font-family: 'Poppins', sans-serif;
                    font-size: 14px;
                }
            `}</style>

            <div className='py-5 '>
                <div className='flex justify-between items-center mx-auto'>
                    <div className='flex items-center gap-12'>
                        <img src={logo} alt="Logo" className='h-10 md:h-[3.1rem]' />

                        <div className='hidden lg:flex items-center gap-8'>
                            <div className='flex items-center gap-1 cursor-pointer'>
                                <img src={homevector} className="w-5 h-5" alt="Home" />
                                <p className='text-[#8A8A8A] m-0 navbar-text'>Home</p>
                            </div>

                            <div className='flex items-center gap-1 cursor-pointer'>
                                <img src={apps} className="w-5 h-5" alt="Category" />
                                <p className='text-[#8A8A8A] m-0 navbar-text'>Our Category</p>
                            </div>

                            <div className='flex items-center gap-1 cursor-pointer'>
                                <img src={chatinformation} className="w-5 h-5" alt="About" />
                                <p className='text-[#8A8A8A] m-0 navbar-text'>About Us</p>
                            </div>

                            <div className='flex items-center gap-1 cursor-pointer'>
                                <img src={idcard} className="w-5 h-5" alt="Contact" />
                                <p className='text-[#8A8A8A] m-0 navbar-text'>Contact Us</p>
                            </div>

                            <div className='flex items-center gap-1 cursor-pointer'>
                                <img src={interactive} className="w-5 h-5" alt="FAQs" />
                                <p className='text-[#8A8A8A] m-0 navbar-text'>FAQs</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center gap-3 md:gap-4'>
                        <div className='hidden md:flex items-center gap-4'>
                            <img src={shoppingbag} className="w-6 h-6 cursor-pointer" alt="Shopping Bag" />
                            <img src={notification} className="w-6 h-6 cursor-pointer" alt="Notifications" />
                            <img src={love} className="w-6 h-6 cursor-pointer" alt="Favorites" />

                            <div className='flex items-center gap-1 cursor-pointer'>
                                <span className='text-gray-700 navbar-text'>EN</span>
                                <img src={mingcutedown} className="w-4 h-4" alt="Language" />
                            </div>

                            <div className='flex items-center gap-1 cursor-pointer'>
                                <img src={user} className="w-6 h-6" alt="User" />
                                <img src={mingcutedown} className="w-4 h-4" alt="User Menu" />
                            </div>
                        </div>

                        <button
                            onClick={toggleSidebar}
                            className='lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors'
                            aria-label="Toggle Menu"
                        >
                            <img src={group} className="w-6 h-6" alt="Menu" />
                        </button>
                    </div>
                </div>
            </div>

            {isSidebarOpen && (
                <div
                    className='fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden'
                    onClick={toggleSidebar}
                ></div>
            )}

            <div
                className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className='p-6'>
                    {/* Close Button */}
                    <div className='flex justify-between items-center mb-8'>
                        <img src={logo} alt="Logo" className='h-10' />
                        <button
                            onClick={toggleSidebar}
                            className='text-2xl text-gray-600 hover:text-gray-900'
                        >
                            ×
                        </button>
                    </div>

                    <div className='flex flex-col gap-6'>
                        <div className='flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors'>
                            <img src={homevector} className="w-5 h-5" alt="Home" />
                            <p className='text-gray-700 m-0 navbar-text'>Home</p>
                        </div>

                        <div className='flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors'>
                            <img src={apps} className="w-5 h-5" alt="Category" />
                            <p className='text-gray-700 m-0 navbar-text'>Our Category</p>
                        </div>

                        <div className='flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors'>
                            <img src={chatinformation} className="w-5 h-5" alt="About" />
                            <p className='text-gray-700 m-0 navbar-text'>About Us</p>
                        </div>

                        <div className='flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors'>
                            <img src={idcard} className="w-5 h-5" alt="Contact" />
                            <p className='text-gray-700 m-0 navbar-text'>Contact Us</p>
                        </div>

                        <div className='flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors'>
                            <img src={interactive} className="w-5 h-5" alt="FAQs" />
                            <p className='text-gray-700 m-0 navbar-text'>FAQs</p>
                        </div>

                        <hr className='my-4' />

                        <div className='flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors'>
                            <img src={shoppingbag} className="w-6 h-6" alt="Shopping Bag" />
                            <p className='text-gray-700 m-0 navbar-text'>Shopping Bag</p>
                        </div>

                        <div className='flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors'>
                            <img src={notification} className="w-6 h-6" alt="Notifications" />
                            <p className='text-gray-700 m-0 navbar-text'>Notifications</p>
                        </div>

                        <div className='flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors'>
                            <img src={love} className="w-6 h-6" alt="Favorites" />
                            <p className='text-gray-700 m-0 navbar-text'>Favorites</p>
                        </div>

                        <div className='flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors'>
                            <span className='text-gray-700 navbar-text'>EN</span>
                            <img src={mingcutedown} className="w-4 h-4" alt="Language" />
                            <p className='text-gray-700 m-0 navbar-text'>Language</p>
                        </div>

                        <div className='flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors'>
                            <img src={user} className="w-6 h-6" alt="User" />
                            <p className='text-gray-700 m-0 navbar-text'>Account</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}