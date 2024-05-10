import React from "react";
import books from "../Ressources/books.json"

const CardItem = (props) => {
    return (
        <li>
        <a href="#">
                <div className="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-md before:border-2 before:border-dashed before:border-gray-900">
                    <div className="rounded-md h-full border-2 border-gray-900 bg-white transition group-hover:-translate-y-2 ltr:group-hover:-translate-x-2 rtl:group-hover:translate-x-2">
                        <div className="p-4 sm:p-6">
                                <div className="flex items-start justify-between ">
                                <span aria-hidden="true" role="img" className="text-lg sm:text-xl">{props.icon}</span>
                                {props.new ? <span className="-me-1.5 -mt-1.5 whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-medium capitalize sm:-me-3 sm:-mt-3 bg-green-100 text-green-700 false">new</span> : ""}
                                </div>
                                <h2 className="mt-4 font-medium text-gray-900 sm:text-lg">{props.name}</h2>
                            <p className="mt-1 text-sm text-gray-700">{props.quantity} Ktoba</p>
                        </div>
                    </div>
                </div>
        </a>
        </li>
    )
}

const CardList = () => {
    const lyceeBooks = books.lycee;
    const cpgeBooks = books.cpge;
    const itBooks = books.it;
    return (
        <>
            <section class=" text-center pt-12">
                
                <div class="mx-auto max-w-screen-xl px-4 py-8 lg:py-12">
                    <div class="flex flex-col space-y-4 space-y-reverse">
                    <h1 class="order-last text-lg text-gray-700">Free cources, exercices and more...</h1>
                    <h2 class="text-5xl font-bold text-gray-900 sm:text-6xl">Ktobti</h2>
                    </div>
                    <p class="mx-auto mt-6 max-w-xl text-pretty text-base/relaxed text-gray-700">Dive into a treasure trove of wisdom with our inviting Resources section, where boundless knowledge awaits your exploration.</p>
                </div>
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                    <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
                </div>
                <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
                    <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
                </div>
            </section>
            <div className="mx-auto max-w-screen-xl px-4 pb-8 lg:pb-12">
                <ul className="space-y-8">
                <li className="space-y-4">
                    <h2 className="text-lg font-bold text-gray-900 sm:text-xl">Lycee</h2>
                    <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                    {lyceeBooks.map((r) => (
                    <CardItem key={r.id}
                              name={r.name}
                              icon={r.icon}
                              quantity={r.quantity}
                              new={r.new} />
                    ))}


                    </ul>
                </li>
                <li className="space-y-4">
                    <h2 className="text-lg font-bold text-gray-900 sm:text-xl">CPGE</h2>
                    <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                    {cpgeBooks.map((r) => (
                    <CardItem key={r.id}
                              name={r.name}
                              icon={r.icon}
                              quantity={r.quantity}
                              new={r.new} />
                    ))}

                    </ul>
                </li>
                <li className="space-y-4">
                    <h2 className="text-lg font-bold text-gray-900 sm:text-xl">IT</h2>
                    <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                    {itBooks.map((r) => (
                    <CardItem key={r.id}
                              name={r.name}
                              icon={r.icon}
                              quantity={r.quantity}
                              new={r.new} />
                    ))}

                    </ul>
                </li>
                </ul>
            </div>

        </>
    )
}


export default CardList;