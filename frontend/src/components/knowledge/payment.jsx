import React, { useState } from "react";
import { Link } from 'react-router-dom';

export default function Payment() {
  const [isScanned, setIsScanned] = useState(false);

  // Function to simulate scanning the QR code
  const handleScan = () => {
    setIsScanned(true); // Set scanned state to true
    setTimeout(() => setIsScanned(false), 10000); // Reset after 10 seconds
  };

  return (
    <div className="p-5 bg-gray-100">
      <div className="bg-white shadow rounded-lg">
        <div className="p-5">
          <div className="flex justify-center pb-5">
            <div className="w-full max-w-2xl">
              <div className="flex items-center py-4">
                <h5 className="text-lg font-bold flex items-center">
                  <span className="fas fa-check-square pe-2"></span>
                  ELIGIBLE |
                </h5>
                <span className="pl-2">Pay</span>
              </div>
              <h4 className="text-green-600 text-xl font-bold">₹99.00</h4>
              <h4 className="text-lg">Diabetes Pump & Supplies</h4>
              <div className="flex items-center pt-2">
                <div>
                  <p className="font-bold">
                    Insurance Responsibility{" "}
                    <span className="text-green-600">₹70.76</span>
                  </p>
                </div>
                <div className="ml-auto">
                  <p className="text-blue-600 cursor-pointer flex items-center">
                    <i className="fas fa-plus-circle text-blue-600 pr-1"></i>
                    Add insurance card
                  </p>
                </div>
              </div>
              <p className="text-sm">
                Insurance claims and all necessary dependencies will be
                submitted to your insurer for the covered portion of this order
              </p>
              <div className="rounded bg-gray-100 p-3 flex justify-between mt-3">
                <div>Aetna-Open Access</div>
                <div>OAP</div>
              </div>
              <hr className="my-4" />
              <div>
                <div className="flex pb-2 items-center">
                  <div>
                    <p className="font-bold">
                      Patient Balance{" "}
                      <span className="text-green-600">₹28.24</span>
                    </p>
                  </div>
                  <div className="ml-auto">
                    <p className="text-blue-600 cursor-pointer flex items-center">
                      <i className="fas fa-plus-circle text-blue-600 pr-1"></i>
                      Add payment card
                    </p>
                  </div>
                </div>
                <p className="text-sm">
                  This is an estimate for the portion of your order (not covered
                  by insurance) due today. Once insurance finalizes their review,
                  refunds and/or balances will reconcile automatically.
                </p>
                <div className="flex items-center pb-3">
                  <input
                    type="radio"
                    name="paymentMethod"
                    className="mr-2"
                    defaultChecked
                  />
                  <div className="border rounded w-full p-3 flex items-center">
                    <p className="mb-0 flex items-center">
                      <i className="fab fa-cc-visa text-blue-600 text-lg pr-2"></i>
                      Visa Debit Card
                    </p>
                    <div className="ml-auto">************3456</div>
                  </div>
                </div>
                <div className="flex items-center pb-3">
                  <input type="radio" name="paymentMethod" className="mr-2" />
                  <div className="border rounded w-full p-3 flex items-center">
                    <p className="mb-0 flex items-center">
                      <i className="fab fa-cc-mastercard text-gray-800 text-lg pr-2"></i>
                      Mastercard Office
                    </p>
                    <div className="ml-auto">************1038</div>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold">
                  Proceed to payment
                </button>
              </div>
            </div>
            <div className="ml-10">
              <div className="py-4 text-right">
                 <Link
                        to="/knowledge/projects"
                        className="text-white bg-blue-700 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                         Cancel and return to website
                      </Link>
                
              </div>
              <div className="rounded bg-gray-100 p-5 flex flex-col">
                <h4 className="pb-3 font-bold">Pay using UPI</h4>
                <div className="flex justify-center items-center p-5">
                  <div
                    className="upi-box shadow-lg border-blue-900 rounded-sm h-44 w-44 flex-row justify-center items-center"
                    onClick={handleScan} // Simulating scan on click
                  >
                    <img
                      src="https://cdn.pixabay.com/photo/2023/02/28/01/51/qr-code-7819654_640.jpg"
                      alt="QR code"
                      className={`relative w-auto h-auto rounded-sm transition-all duration-300 ease-in-out ${
                        isScanned ? "blur-0" : "blur-sm"
                      }`}
                    />
                    <p className="text-center mt-2">
                      {isScanned ? "QR Code Scanned!" : "Scan the QR Code"}
                    </p>
                  </div>
                </div>
                <hr className="my-3" />
                <div className="flex justify-between py-2 cursor-pointer">
                  <img src="/images/g-pay.png" alt="" className="h-16 rounded-full" />
                  <img src="/images/p-pays.png" alt="" className="h-16 rounded-full" />
                  <img src="/images/paytm.jpg" alt="" className="h-16 rounded-full" />
                  <img src="/images/upi.png" alt="" className="h-16 rounded-full" />
                </div>
                <div className="flex justify-between py-2">
                  <p>
                  Making Payments Seamless, One Scan at a Time.
                  </p>
                  {/* <p>$6500.00</p> */}
                </div>
                <hr className="my-3" />
                <div className="flex justify-between py-2">
                  <p>Insurance Responsibility</p>
                  <p className="font-bold">₹70.76</p>
                </div>
                <div className="flex justify-between py-2">
                  <p>
                    Patient Balance{" "}
                    <i className="fa fa-question-circle text-gray-800"></i>
                  </p>
                  <p className="font-bold">₹28.24</p>
                </div>
                <hr className="my-3" />
                <div className="flex justify-between py-2">
                  <p className="font-bold">Total</p>
                  <p className="font-bold text-green-600">₹99.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

