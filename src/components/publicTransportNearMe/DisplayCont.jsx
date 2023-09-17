import React from 'react'
import Card from './Card'

export default function DisplayCont() {
  return (
    <React.Fragment>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 my-5">
        <h1 className="mb-4 text-xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-3xl dark:text-white">Public Transport Near me</h1>
        <div className="flex flex-wrap justify-items-stretch">
            <div className="w-full my-3 lg:w-1/3 px-4 mb-8 lg:mb-0">
                <Card />
            </div>
            <div className="w-full my-3 lg:w-1/3 px-4 mb-8 lg:mb-0">
                <Card />
            </div>
            <div className="w-full my-3 lg:w-1/3 px-4 mb-8 lg:mb-0">
                <Card />
            </div>
            <div className="w-full my-3 lg:w-1/3 px-4 mb-8 lg:mb-0">
                <Card />
            </div>
        </div>
        </div>

    </React.Fragment>
  )
}
