import React from "react";

const ConvoBubble = () => {
    return (
        <>
            <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">A bit of ChitChat</h2>
            </div>
            <div className='pr-[15%] pl-[15%] ' id='convo-bubble'>
                <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                    <img alt="" src="https://shorturl.at/lmpZ3" />
                    </div>
                </div>
                <div className="chat-header p-2"> Ranya <time className="text-xs opacity-50">12:45</time>
                </div>
                <div className="chat-bubble bg-white shadow-xl border-2 border-purple-500 text-black "> Hi there! Who are you?</div>
                <div className="chat-footer opacity-50"> Delivered </div>
                </div>
                <div className="chat chat-end">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                    <img alt="" src="\Images\Logos\logo b.png" />
                    </div>
                </div>
                <div className="chat-header p-2"> 9rayti <time className="text-xs opacity-50">12:46</time>
                </div>
                <div className="chat-bubble bg-white shadow-xl border-2 border-purple-500 text-black">Hey! We're 9rayti.ma, your go-to destination for interactive and innovative learning experiences.
                 We're here to make education exciting and accessible for everyone!</div>
                <div className="chat-footer opacity-50"> Seen at 12:46 </div>
                </div>
                <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                    <img alt="" src="https://shorturl.at/lmpZ3" />
                    </div>
                </div>
                <div className="chat-header p-2"> Ranya <time className="text-xs opacity-50">12:47</time>
                </div>
                <div className="chat-bubble bg-white shadow-xl border-2 border-purple-500 text-black"> That sounds intriguing! What are your main services?</div>
                <div className="chat-footer opacity-50"> Delivered </div>
                </div>
                <div className="chat chat-end">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                    <img alt="" src="\Images\Logos\logo b.png" />
                    </div>
                </div>
                <div className="chat-header p-2"> 9rayti <time className="text-xs opacity-50">12:48</time>
                </div>
                <div className="chat-bubble bg-white shadow-xl border-2 border-purple-500 text-black">Glad you asked! Our main services include a wide range of interactive courses,
                 engaging activities, and expert-led sessions covering various subjects.</div>
                <div className="chat-footer opacity-50"> Seen at 12:48 </div>
                </div>
                
                <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                    <img alt="" src="https://shorturl.at/lmpZ3" />
                    </div>
                </div>
                <div className="chat-header p-2"> Ranya <time className="text-xs opacity-50">12:54</time>
                </div>
                <div className="chat-bubble bg-white shadow-xl border-2 border-purple-500 text-black"> Awesome! How do I get started?</div>
                <div className="chat-footer opacity-50"> Delivered </div>
                </div>
                <div className="chat chat-end">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                    <img alt="" src="\Images\Logos\logo b.png" />
                    </div>
                </div>
                <div className="chat-header p-2"> 9rayti <time className="text-xs opacity-50">12:55</time>
                </div>
                <div className="chat-bubble bg-white shadow-xl border-2 border-purple-500 text-black">It's easy! Simply sign up for an account, explore our courses, and start learning at your own pace.
                 Oh, and did we mention it's completely free to get started? Let's kickstart your learning adventure together! 🚀✨</div>
                <div className="chat-footer opacity-50"> Seen at 12:55 </div>
                </div>
            </div>
        </>
    )
}

export default ConvoBubble;