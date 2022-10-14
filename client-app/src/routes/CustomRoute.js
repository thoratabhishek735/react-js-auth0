import React from 'react'
import { useStore } from 'react-redux';
import { createInstanceandInjectStore } from "../axios";
export default function CustomRoute() {
    const st =useStore();
createInstanceandInjectStore(st)
  return (
    <div></div>
  )
}
