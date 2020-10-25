import React from 'react'
import NavbarMain from '../NavbarMain/NavbarMain'
import Footer from '../Footer/Footer'




export function Layout (props) {

    return (
        <>
        <NavbarMain />


        {props.children}


        <Footer />
        </>
    )

}