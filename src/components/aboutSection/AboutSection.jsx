import React from 'react'

export default function AboutSection() {
    return (
        <React.Fragment>
            <section className="bg-white dark:bg-gray-900">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">About us</h2>
                        <p className="mb-4">At Tracking, we are passionate about redefining the way you experience bus travel. Our journey began with a simple idea: to empower commuters with real-time information and convenient booking options. With a relentless commitment to innovation, we've created a game-changing app that puts you in the driver's seat of your daily commute. Our team of dedicated professionals is on a mission to make your travel smarter, more efficient, and enjoyable. Join us on this exciting journey as we revolutionize the world of bus travel, one tap at a time.</p>
                        <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">Company values</h2>
                        <p className="mb-4 italic text:gray:600">Empowering Your Commute, Redefining Your Journey.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <img className="w-full rounded-lg" src="office-long-2.png" alt="office content 1" />
                        <img className="mt-4 w-full lg:mt-10 rounded-lg" src="office-long-1.png" alt="office content 2" />
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
