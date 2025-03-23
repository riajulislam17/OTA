import React from "react";
import locations from "../../utils/FakeData/locationData.json";
import { FaDiscord, FaFacebook, FaLinkedin, FaPinterest } from "react-icons/fa";
import { FaPhoneVolume, FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <>
      <div className="bg-[#0C3410] px-10 md:px-20 lg:px-40">
        {/* Locations */}
        <div className="py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-white text-[16px] bg-[#FFFFFF1A] p-5 rounded-xl">
            {locations.map((item, index) => (
              <div key={item.id}>
                <h1 className="font-semibold text-2xl my-3">{item.title}</h1>
                <p className="my-3">{item.location}</p>
                <p className="my-3 flex items-center gap-3">
                  <FaPhoneVolume /> {item.phone}
                </p>
                <p className="my-3 flex items-center gap-3">
                  <MdEmail /> {item.email}
                </p>
              </div>
            ))}
          </div>

          {/* Menus */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mt-10 text-white">
            <div>
              <img
                src="../logo.png"
                alt="logo"
                className="mx-auto mb-4 h-20 object-contain"
              />
              <p className="text-justify text-white">
                HazeTrip is the first one-stop online travel agency (OTA)
                solution in Bangladesh. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
                pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
            </div>
            {/* Useful Links */}
            <div>
              <h1 className="font-semibold text-lg my-4">Useful Links</h1>
              <ul>
                <li className="my-2">
                  <a href="#">Travel Guide </a>
                </li>
                <li className="my-2">
                  <a href="#">Travel Advisory </a>
                </li>
                <li className="my-2">
                  <a href="#">Visa Guide </a>
                </li>
                <li className="my-2">
                  <a href="#">Visa Application</a>
                </li>
              </ul>
            </div>
            {/* Service */}
            <div>
              <h1 className="font-semibold text-lg my-4">Service</h1>
              <ul>
                <li className="my-2">
                  <a href="#">Flight</a>
                </li>
                <li className="my-2">
                  <a href="#">Visa</a>
                </li>
                <li className="my-2">
                  <a href="#">Holiday</a>
                </li>
                <li className="my-2">
                  <a href="#">Visa</a>
                </li>
              </ul>
            </div>
            {/* Quick Menu */}
            <div>
              <h1 className="font-semibold text-lg my-4">Quick Menu</h1>
              <ul>
                <li className="my-2">
                  <a href="#" className="my-2">
                    About Us
                  </a>
                </li>
                <li className="my-2">
                  <a href="#" className="my-2">
                    Terms & Conditions
                  </a>
                </li>
                <li className="my-2">
                  <a href="#" className="my-2">
                    FAQ
                  </a>
                </li>
                <li className="my-2">
                  <a href="#" className="my-2">
                    Hotel Sitemap
                  </a>
                </li>
                <li className="my-2">
                  <a href="#" className="my-2">
                    Medical Tourism
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h1 className="font-semibold text-lg my-4">We Accept</h1>
              <img
                src="../payment.png"
                alt="payments"
                className=" h-48 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex justify-between items-center py-8">
          <div className="text-white text-[16px] font-[400px]">
            Copyright © 2025 HazeTrip
          </div>
          <div className="flex justify-between items-center gap-3 text-white text-[16px]">
            <p>
              <FaFacebook />
            </p>
            <p>
              <FaSquareXTwitter />
            </p>
            <p>
              <FaDiscord />
            </p>
            <p>
              <FaLinkedin />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
