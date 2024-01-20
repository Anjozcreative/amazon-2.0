'use client'

import { useSelector } from "react-redux";
import { selectItems } from "../basketSlice";

const Span = () => {

    const items = useSelector(selectItems)

  return (
    <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center items-center rounded-full text-black font-bold" >{items.length}</span>
  )
}

export default Span;