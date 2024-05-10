import React, { useState } from "react";



const CreditCard3 = () => {
  const choice = JSON.parse(localStorage.getItem('planChoice'));
  const [creditCardDetails, setCreditCardDetails] = useState(defaultData);
  const [error, setError] = useState({
    number: false,
    expiryDate: false,
    cvv: false,
    fullName: false,
  });
  let currentYear = new Date().getFullYear().toString();
  var currentMonth = ("0" + (new Date().getMonth() + 1)).slice(-2);
  return (
    <div className="flex flex-col justify-center items-center bg-transparent min-h-screen backdrop-blur-sm ">
      
      <div className="flex flex-col justify-center items-center md:gap-20 sm:gap-16 bg-opacity-40 gap-7 rounded-3xl px-6 md:px-8 lg:px-20 sm:py-20 py-8">
      <div className="chat chat-start">
          <div className="chat-image avatar">
              <div className="w-14 rounded-full">
                <img alt="9rayti.ma" src="/Images/Logos/logo f b nobg.png" />
              </div>
            </div>
            <div className="chat-bubble text-white bg-purple-500">Choosing {choice?.plan} was a great move. just fill out your info and that's it!</div>
          </div>
        <div className="flex md:flex-row flex-col items-center justify-center md:gap-20 gap-12">
          
          <div className="flex flex-col w-full shadow-lg">
            {(error.expiryDate || error.number) && (
              <div className="text-xs text-red-600 h-9">
                {error.expiryDate
                  ? "Please enter valid expiry date"
                  : "Please enter valid card number"}
              </div>
            )}
            <div className="grid grid-cols-4 justify-between bg-purple-900 text-white h-48 w-full max-w-xs rounded-lg px-3.5 py-1.5 shadow-xl transition duration-400 hover:scale-110 sample3 border border-gray-400 ">
              <div className="flex gap-2 col-span-3 flex-col text-left mt-2">
                <div className="text-xs font-bold text-[#FFFCFC]">
                <input
                    className="bg-transparent focus:outline-none border border-transparent focus:border-black w-48 border-black rounded-md pr-1"
                    type="text"
                    value={creditCardDetails?.fullName}
                    onChange={(e) => {
                        const { value } = e?.target;
                        const upperCaseName = value.toUpperCase();
                        const isValidName = /^[A-Z\s]*$/.test(upperCaseName);
                        if (!isValidName || upperCaseName.length > 30) {
                        setError({ ...error, fullName: true });
                        } else {
                        setError({ ...error, fullName: false });
                        }
                        setCreditCardDetails({
                        ...creditCardDetails,
                        fullName: upperCaseName,
                        });
                    }}
                />


                </div>
                <Chip />
                <div className="flex mt-4">
                  <div className="flex items-center text-base top-3">
                    <LeftCaret />
                    <input
                      className="bg-transparent focus:outline-none border border-transparent focus:border-black w-48 border-black rounded-md pr-1"
                      type="text"
                      maxLength={30}
                      value={cc_format(creditCardDetails?.number)}
                      onChange={(e) => {
                        const { value } = e?.target;
                        let finalValue = value.replaceAll(" ", "");
                        isNaN(finalValue)
                          ? setError({ ...error, number: true })
                          : finalValue.length < 16
                          ? setError({ ...error, number: true })
                          : setError({ ...error, number: false });
                        setCreditCardDetails({
                          ...creditCardDetails,
                          number: value,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-end text-[11px]">
                  <span className="text-[5px]">
                    VALID <br />
                    UP TO
                  </span>
                  <span>
                    <input
                      className="bg-transparent focus:outline-none border border-transparent focus:border-black rounded-md px-1 w-12"
                      type="text"
                      value={creditCardDetails?.expiryDate}
                      maxLength="5"
                      onChange={(e) => {
                        const { value } = e?.target;
                        value.match(/^(0[1-9]|1[0-2])\/(([0-9]{4}|[0-9]{2})$)/)
                          ? value.slice(-2) < currentYear.slice(-2)
                            ? setError({ ...error, expiryDate: true })
                            : value.slice(-2) === currentYear.slice(-2) &&
                              value.slice(0, 2) <= currentMonth
                            ? setError({ ...error, expiryDate: true })
                            : setError({ ...error, expiryDate: false })
                          : setError({ ...error, expiryDate: true });
                        setCreditCardDetails({
                          ...creditCardDetails,
                          expiryDate: value,
                        });
                      }}
                    />
                  </span>
                </div>
                <div className="text-[10px] ml-6">9rayti.ma</div>
              </div>
              <div className="flex flex-col justify-between items-end">
                <CompanyName />
                <MasterCard />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full hover:scale-110">
            {error.cvv && (
              <span className="text-xs text-red-600 h-9">
                Please enter valid cvv number
              </span>
            )}
            <div className="flex flex-col justify-between bg-white h-48 w-full max-w-xs rounded-lg pt-5 pb-2 italic text-[4px] transition shadow-xl duration-400 hover:scale-110 sample3 border border-black">
              <div>
                <div className="bg-black h-8 w-full" />
                <div className="flex justify-between">
                  <div className="flex flex-col w-48 mt-2">
                    <div className="flex justify-between ml-1">
                      <span>Authorized Signature</span>
                      <span>Not valid unless signed</span>
                    </div>
                    <div className="bg-[#E5E5E5] h-5 w-48 text-right">
                      <span className="sm:text-sm text-xs">
                        <input
                          className="bg-transparent focus:outline-none focus:border border-black rounded-md text-right italic w-11 pr-1"
                          type="text"
                          maxLength="3"
                          value={creditCardDetails?.cvv}
                          onChange={(e) => {
                            const { value } = e?.target;
                            value.length < 3
                              ? setError({ ...error, cvv: true })
                              : setError({ ...error, cvv: false });
                            setCreditCardDetails({
                              ...creditCardDetails,
                              cvv: e?.target?.value,
                            });
                          }}
                        />
                      </span>
                    </div>
                    <div className="text-left ml-1 mt-2">
                      <p>
                        Lorem Ipsum Indoctum accusamus comprehensam Nullam id
                        dolor id nibh ultricies vehicula ut id elit. Donec sed
                        odio dui. Fusce dapibus, tellus ac cursus etiam porta
                        sem malesuada magna mollis euismod. commodo, Faccibus
                        mollis interdum. Morbi leo risus, porta ac, vestibulum
                        at eros.Feugiat accumsan Suspendisse eget Duis faucibus
                        tempus pede pede augue pede. Dapibus mollis dignissim
                        suscipit porta justo nisl amet Nunc quis semper.
                        Indoctum accusamus comprehensam .
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col">CIA 000012 CSM-1234--4321</div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span>
                  +212 111 111 111, +212 222 222 222, +212 625 297 293{" "}
                </span>
                <span> www.9rayti.ma</span>
              </div>
            </div>
          </div>

        </div>
        <button
            className="btn btn-wide btn-primary text-white text-xl font-semibold"
            disabled={error.expiryDate || error.number || error.cvv || error.fullName}
            onClick={() => document.getElementById('modal-1').showModal()}
          >
            Pay
        </button>
        <dialog id="modal-1" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Payments are not available yet!</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
        </dialog>
      </div>
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                    <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
      </div>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
                    <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
      </div>
    </div>
    
  );
};
export default CreditCard3;
const defaultData = {
  number: "1234567812345678",
  expiryDate: "06/29",
  cvv: "133",
  fullName: "YASSINE CHRITT"
};
export function cc_format(value) {
  var v = value
    .replace(/\s+/g, "")
    .replace(/[^0-9]/gi, "")
    .replace(/\D/g, "");
  var matches = v.match(/\d{4,16}/g);
  var match = (matches && matches[0]) || "";
  var parts = [];
  let len, i;
  for (i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }
  if (parts.length) {
    return parts.join("  ");
  } else {
    return v;
  }
}
export function cc_expires_format(string) {
  return string
    .replace(
      /[^0-9]/g,
      "" // To allow only numbers
    )
    .replace(
      /^([2-9])$/g,
      "0$1" // To handle 3 > 03
    )
    .replace(
      /^(1{1})([3-9]{1})$/g,
      "0$1/$2" // 13 > 01/3
    )
    .replace(
      /^0{1,}/g,
      "0" // To handle 00 > 0
    )
    .replace(
      /^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g,
      "$1/$2" // To handle 113 > 11/3
    );
}
const Chip = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      className="w-10 h-9 mt-2 ml-2"
    >
      <path
        fill="#FF9800"
        d="M5 35V13c0-2.2 1.8-4 4-4h30c2.2 0 4 1.8 4 4v22c0 2.2-1.8 4-4 4H9c-2.2 0-4-1.8-4-4z"
      />
      <path
        fill="#FFD54F"
        d="M43 21v-2H31c-1.1 0-2-.9-2-2s.9-2 2-2h1v-2h-1c-2.2 0-4 1.8-4 4s1.8 4 4 4h3v6h-3c-2.8 0-5 2.2-5 5s2.2 5 5 5h2v-2h-2c-1.7 0-3-1.3-3-3s1.3-3 3-3h12v-2h-7v-6h7zm-26 6h-3v-6h3c2.2 0 4-1.8 4-4s-1.8-4-4-4h-3v2h3c1.1 0 2 .9 2 2s-.9 2-2 2H5v2h7v6H5v2h12c1.7 0 3 1.3 3 3s-1.3 3-3 3h-2v2h2c2.8 0 5-2.2 5-5s-2.2-5-5-5z"
      />
    </svg>
  );
};
const LeftCaret = () => {
  return (
    <svg
      width="13"
      height="15"
      viewBox="0 0 13 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-xl mr-1"
    >
      <path
        d="M12.5655 0.785121L12.701 14.4904L0.764073 7.75511L12.5655 0.785121Z"
        fill="#FFFEFE"
      />
    </svg>
  );
};
const MasterCard = () => {
  return (
    <svg
      width="48"
      height="38"
      viewBox="0 0 48 38"
      fill="none"
      className="w-12 h-9"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="33" cy="15" r="15" fill="#FF9548" fillOpacity="0.83" />
      <circle cx="15" cy="15" r="15" fill="#EA2F2F" fillOpacity="0.87" />
      <path
        d="M3.504 32.92H4.152V33.52H4.184C4.30133 33.312 4.47733 33.1387 4.712 33C4.94667 32.8613 5.19467 32.792 5.456 32.792C5.75467 32.792 6.01333 32.864 6.232 33.008C6.456 33.152 6.616 33.344 6.712 33.584C6.856 33.344 7.04533 33.152 7.28 33.008C7.52 32.864 7.79733 32.792 8.112 32.792C8.58133 32.792 8.93333 32.936 9.168 33.224C9.408 33.5067 9.528 33.8933 9.528 34.384V37H8.856V34.488C8.856 34.1093 8.77867 33.8347 8.624 33.664C8.46933 33.4933 8.24 33.408 7.936 33.408C7.73333 33.408 7.54933 33.4667 7.384 33.584C7.21867 33.7013 7.088 33.8587 6.992 34.056C6.90133 34.2533 6.856 34.4667 6.856 34.696V37H6.176V34.496C6.176 34.112 6.09867 33.8347 5.944 33.664C5.78933 33.4933 5.56267 33.408 5.264 33.408C5.06133 33.408 4.87733 33.4693 4.712 33.592C4.54667 33.7093 4.416 33.8693 4.32 34.072C4.22933 34.2693 4.184 34.4827 4.184 34.712V37H3.504V32.92ZM11.7689 37.128C11.4703 37.128 11.2036 37.0693 10.9689 36.952C10.7343 36.8347 10.5529 36.6747 10.4249 36.472C10.2969 36.264 10.2329 36.0293 10.2329 35.768C10.2329 35.336 10.3956 35 10.7209 34.76C11.0463 34.5147 11.4569 34.392 11.9529 34.392C12.1983 34.392 12.4249 34.4187 12.6329 34.472C12.8463 34.5253 13.0089 34.5867 13.1209 34.656V34.408C13.1209 34.104 13.0143 33.8613 12.8009 33.68C12.5876 33.4933 12.3183 33.4 11.9929 33.4C11.7636 33.4 11.5529 33.4507 11.3609 33.552C11.1689 33.648 11.0169 33.784 10.9049 33.96L10.3929 33.576C10.5529 33.3307 10.7716 33.1387 11.0489 33C11.3316 32.8613 11.6436 32.792 11.9849 32.792C12.5396 32.792 12.9743 32.9387 13.2889 33.232C13.6089 33.52 13.7689 33.9147 13.7689 34.416V37H13.1209V36.416H13.0889C12.9716 36.6133 12.7956 36.7813 12.5609 36.92C12.3263 37.0587 12.0623 37.128 11.7689 37.128ZM11.8329 36.528C12.0623 36.528 12.2756 36.4693 12.4729 36.352C12.6703 36.2347 12.8276 36.0773 12.9449 35.88C13.0623 35.6827 13.1209 35.4667 13.1209 35.232C12.9929 35.1467 12.8356 35.0773 12.6489 35.024C12.4623 34.9707 12.2649 34.944 12.0569 34.944C11.6836 34.944 11.4009 35.0213 11.2089 35.176C11.0223 35.3307 10.9289 35.5307 10.9289 35.776C10.9289 36 11.0143 36.1813 11.1849 36.32C11.3556 36.4587 11.5716 36.528 11.8329 36.528ZM16.0999 37.128C15.6625 37.128 15.2972 37.0267 15.0039 36.824C14.7105 36.616 14.5025 36.352 14.3799 36.032L14.9879 35.76C15.0892 36.0053 15.2385 36.1947 15.4359 36.328C15.6385 36.4613 15.8599 36.528 16.0999 36.528C16.3559 36.528 16.5745 36.4773 16.7559 36.376C16.9372 36.2693 17.0279 36.12 17.0279 35.928C17.0279 35.7573 16.9559 35.6213 16.8119 35.52C16.6679 35.4133 16.4412 35.3227 16.1319 35.248L15.6359 35.12C15.3105 35.04 15.0439 34.904 14.8359 34.712C14.6279 34.52 14.5239 34.272 14.5239 33.968C14.5239 33.7333 14.5932 33.528 14.7319 33.352C14.8759 33.1707 15.0652 33.032 15.2999 32.936C15.5345 32.84 15.7879 32.792 16.0599 32.792C16.4172 32.792 16.7345 32.8693 17.0119 33.024C17.2945 33.1787 17.4945 33.3947 17.6119 33.672L17.0199 33.944C16.8385 33.5813 16.5159 33.4 16.0519 33.4C15.8279 33.4 15.6305 33.4533 15.4599 33.56C15.2945 33.6613 15.2119 33.792 15.2119 33.952C15.2119 34.1013 15.2705 34.224 15.3879 34.32C15.5052 34.4107 15.6812 34.4853 15.9159 34.544L16.5079 34.696C16.9079 34.7973 17.2092 34.9493 17.4119 35.152C17.6145 35.3493 17.7159 35.592 17.7159 35.88C17.7159 36.1307 17.6439 36.352 17.4999 36.544C17.3559 36.7307 17.1612 36.8747 16.9159 36.976C16.6705 37.0773 16.3985 37.128 16.0999 37.128ZM19.9861 37.064C19.8207 37.064 19.6661 37.0373 19.5221 36.984C19.3834 36.9307 19.2661 36.8587 19.1701 36.768C19.0634 36.6667 18.9834 36.5493 18.9301 36.416C18.8767 36.2827 18.8501 36.12 18.8501 35.928V33.536H18.1381V32.92H18.8501V31.768H19.5301V32.92H20.5221V33.536H19.5301V35.76C19.5301 35.984 19.5727 36.1493 19.6581 36.256C19.7594 36.3733 19.9061 36.432 20.0981 36.432C20.2527 36.432 20.4021 36.3867 20.5461 36.296V36.96C20.4661 36.9973 20.3834 37.024 20.2981 37.04C20.2181 37.056 20.1141 37.064 19.9861 37.064ZM22.9841 37.128C22.5947 37.128 22.2454 37.0347 21.9361 36.848C21.6267 36.6613 21.3841 36.4053 21.2081 36.08C21.0374 35.7493 20.9521 35.3787 20.9521 34.968C20.9521 34.5733 21.0321 34.2107 21.1921 33.88C21.3574 33.5493 21.5894 33.2853 21.8881 33.088C22.1867 32.8907 22.5334 32.792 22.9281 32.792C23.3281 32.792 23.6747 32.8827 23.9681 33.064C24.2614 33.24 24.4854 33.4853 24.6401 33.8C24.8001 34.1147 24.8801 34.4747 24.8801 34.88C24.8801 34.96 24.8721 35.0293 24.8561 35.088H21.6321C21.6481 35.3973 21.7227 35.6587 21.8561 35.872C21.9894 36.0853 22.1574 36.2453 22.3601 36.352C22.5681 36.4587 22.7841 36.512 23.0081 36.512C23.5307 36.512 23.9334 36.2667 24.2161 35.776L24.7921 36.056C24.6161 36.3867 24.3761 36.648 24.0721 36.84C23.7734 37.032 23.4107 37.128 22.9841 37.128ZM24.1601 34.528C24.1494 34.3573 24.1014 34.1867 24.0161 34.016C23.9307 33.8453 23.7947 33.7013 23.6081 33.584C23.4267 33.4667 23.1974 33.408 22.9201 33.408C22.6001 33.408 22.3281 33.512 22.1041 33.72C21.8854 33.9227 21.7414 34.192 21.6721 34.528H24.1601ZM25.6759 32.92H26.3239V33.576H26.3559C26.4359 33.352 26.5905 33.168 26.8199 33.024C27.0492 32.8747 27.2892 32.8 27.5399 32.8C27.7265 32.8 27.8865 32.8267 28.0199 32.88V33.616C27.8492 33.5307 27.6572 33.488 27.4439 33.488C27.2465 33.488 27.0652 33.544 26.8999 33.656C26.7345 33.768 26.6012 33.92 26.4999 34.112C26.4039 34.2987 26.3559 34.5013 26.3559 34.72V37H25.6759V32.92ZM30.2817 37.128C29.887 37.128 29.5324 37.0347 29.2177 36.848C28.903 36.656 28.6577 36.3973 28.4817 36.072C28.3057 35.7413 28.2177 35.3707 28.2177 34.96C28.2177 34.5493 28.3057 34.1787 28.4817 33.848C28.6577 33.5173 28.903 33.2587 29.2177 33.072C29.5324 32.8853 29.887 32.792 30.2817 32.792C30.7244 32.792 31.095 32.896 31.3937 33.104C31.6977 33.3067 31.9137 33.5787 32.0417 33.92L31.4257 34.176C31.3244 33.9253 31.1724 33.736 30.9697 33.608C30.7724 33.4747 30.5324 33.408 30.2497 33.408C30.0097 33.408 29.7857 33.4747 29.5777 33.608C29.3697 33.736 29.2017 33.9173 29.0737 34.152C28.951 34.3867 28.8897 34.656 28.8897 34.96C28.8897 35.264 28.951 35.5333 29.0737 35.768C29.2017 36.0027 29.3697 36.1867 29.5777 36.32C29.7857 36.448 30.0097 36.512 30.2497 36.512C30.5377 36.512 30.7857 36.4453 30.9937 36.312C31.2017 36.1787 31.3564 35.9893 31.4577 35.744L32.0657 36C31.927 36.336 31.703 36.608 31.3937 36.816C31.0897 37.024 30.719 37.128 30.2817 37.128ZM34.0658 37.128C33.7671 37.128 33.5005 37.0693 33.2658 36.952C33.0311 36.8347 32.8498 36.6747 32.7218 36.472C32.5938 36.264 32.5298 36.0293 32.5298 35.768C32.5298 35.336 32.6925 35 33.0178 34.76C33.3431 34.5147 33.7538 34.392 34.2498 34.392C34.4951 34.392 34.7218 34.4187 34.9298 34.472C35.1431 34.5253 35.3058 34.5867 35.4178 34.656V34.408C35.4178 34.104 35.3111 33.8613 35.0978 33.68C34.8845 33.4933 34.6151 33.4 34.2898 33.4C34.0605 33.4 33.8498 33.4507 33.6578 33.552C33.4658 33.648 33.3138 33.784 33.2018 33.96L32.6898 33.576C32.8498 33.3307 33.0685 33.1387 33.3458 33C33.6285 32.8613 33.9405 32.792 34.2818 32.792C34.8365 32.792 35.2711 32.9387 35.5858 33.232C35.9058 33.52 36.0658 33.9147 36.0658 34.416V37H35.4178V36.416H35.3858C35.2685 36.6133 35.0925 36.7813 34.8578 36.92C34.6231 37.0587 34.3591 37.128 34.0658 37.128ZM34.1298 36.528C34.3591 36.528 34.5725 36.4693 34.7698 36.352C34.9671 36.2347 35.1245 36.0773 35.2418 35.88C35.3591 35.6827 35.4178 35.4667 35.4178 35.232C35.2898 35.1467 35.1325 35.0773 34.9458 35.024C34.7591 34.9707 34.5618 34.944 34.3538 34.944C33.9805 34.944 33.6978 35.0213 33.5058 35.176C33.3191 35.3307 33.2258 35.5307 33.2258 35.776C33.2258 36 33.3111 36.1813 33.4818 36.32C33.6525 36.4587 33.8685 36.528 34.1298 36.528ZM37.0118 32.92H37.6598V33.576H37.6918C37.7718 33.352 37.9265 33.168 38.1558 33.024C38.3851 32.8747 38.6251 32.8 38.8758 32.8C39.0625 32.8 39.2225 32.8267 39.3558 32.88V33.616C39.1851 33.5307 38.9931 33.488 38.7798 33.488C38.5825 33.488 38.4011 33.544 38.2358 33.656C38.0705 33.768 37.9371 33.92 37.8358 34.112C37.7398 34.2987 37.6918 34.5013 37.6918 34.72V37H37.0118V32.92ZM41.4976 37.128C41.135 37.128 40.8043 37.0347 40.5056 36.848C40.2123 36.6613 39.9803 36.4053 39.8096 36.08C39.639 35.7493 39.5536 35.376 39.5536 34.96C39.5536 34.5493 39.639 34.1787 39.8096 33.848C39.9803 33.5173 40.2123 33.2587 40.5056 33.072C40.8043 32.8853 41.135 32.792 41.4976 32.792C41.8123 32.792 42.0923 32.864 42.3376 33.008C42.583 33.1467 42.7696 33.32 42.8976 33.528H42.9296L42.8976 32.96V31.272H43.5776V37H42.9296V36.4H42.8976C42.7696 36.6027 42.583 36.776 42.3376 36.92C42.0923 37.0587 41.8123 37.128 41.4976 37.128ZM41.5776 36.512C41.8176 36.512 42.039 36.448 42.2416 36.32C42.4496 36.192 42.615 36.0107 42.7376 35.776C42.8656 35.5413 42.9296 35.2693 42.9296 34.96C42.9296 34.6507 42.8656 34.3787 42.7376 34.144C42.615 33.9093 42.4496 33.728 42.2416 33.6C42.039 33.472 41.8176 33.408 41.5776 33.408C41.343 33.408 41.1216 33.472 40.9136 33.6C40.7056 33.728 40.5376 33.912 40.4096 34.152C40.287 34.3867 40.2256 34.656 40.2256 34.96C40.2256 35.264 40.287 35.536 40.4096 35.776C40.5376 36.0107 40.7056 36.192 40.9136 36.32C41.1216 36.448 41.343 36.512 41.5776 36.512Z"
        fill="#FFFCFC"
      />
    </svg>
  );
};
const CompanyName = () => {
  return (
    <img src="/Images/Logos/logo w nobg.png" className="w-14 h-14" />

  );
};


