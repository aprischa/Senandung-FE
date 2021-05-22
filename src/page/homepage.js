import React, { useState, useEffect } from 'react'
import '../assets/css/navbar.css'
import '../assets/css/style.css'
import Navbar from '../component/navbar'
import asset from '../assets/img/samsung.png'
import { Link } from 'react-router-dom'
import axios from "axios"
import { createBootstrapComponent } from 'react-bootstrap/esm/ThemeProvider'
// import Sidebar from '../component/sidebar'
// import '../assets/css/sidebar.css'


function HomePage(props) {
    const [data, setData] = useState([{},{},{},{}])
    const [ram, setRAM] = useState([])
    const [rom, setROM] = useState([])
    const [brand, setBrand] = useState([])
    const { search } = props.match.params
    useEffect(() => {
        // axios
        //     .get(`http://localhost:5000/api/GadgetOut/?brand=${search}`)
        //     .then((response) => {
        //         console.log(response.data)
        //         setBrand(response.data.data)
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })

        // axios
        //     .get(`http://localhost:5000/api/GadgetOut/?RAM=${search}`)
        //     .then((response) => {
        //         console.log(response.data)
        //         setRAM(response.data.data)
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })

        // axios
        //     .get(`http://localhost:5000/api/GadgetOut/?ROM=${search}`)
        //     .then((response) => {
        //         console.log(response.data)
        //         setROM(response.data.data)
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })


        // axios.get(`http://localhost:5000/api/GadgetOut`)
        //     .then(response => {
        //         setData(response.data.data)
        //         console.log(response.data.data)
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     })
    }, [search])
    console.log(search)
    console.log('HomePage')

    return (
        <div>
            <Navbar />
            <div className="container pt-5">
                <h1>Produk</h1>
                <div className="row">
                    <div className="col-12">
                        <div>
                            {/* {search ? ( */}
                                <div className="result-card flex-wrap d-flex justify-content-center w-100">
                                    {/* {brand.map(e => ( */}

                                        <div className="grid mx-2 mt-5">
                                            <div className="grid-item">
                                                <Link to={`/detail/`}>
                                                    <div className="card">
                                                        <img className="card-img" src={asset} />
                                                        <div className="card-content">
                                                            <h1 className="card-header" style={{ textAlign: "center" }} >Suwe Ora Jamu</h1>
                                                            <h2 className="card-header" style={{ textAlign: "center" }} >Pencipta: Agus</h2>
                                                            <h2 className="card-header" style={{ textAlign: "center" }} >Asal: Sumatra</h2>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    {/* ))} */}
                                    {/* {ram.map(e => ( */}

                                        {/* <div className="grid mx-2 mt-5">
                                            <div className="grid-item">
                                                <Link to={`/detail/${e.id}`}>
                                                    <div className="card">
                                                        <img className="card-img" src={asset} />
                                                        <div className="card-content">
                                                            <h1 className="card-header" style={{ textAlign: "center" }} >{e.title}</h1>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                    {rom.map(e => (

                                        <div className="grid mx-2 mt-5">
                                            <div className="grid-item">
                                                <Link to={`/detail/${e.id}`}>
                                                    <div className="card">
                                                        <img className="card-img" src={asset} />
                                                        <div className="card-content">
                                                            <h1 className="card-header" style={{ textAlign: "center" }} >{e.title}</h1>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>

                                    ))}</div>
                            ) : ( */}
                                {/* <div className="result-card flex-wrap d-flex justify-content-center w-100">
                                    { {data.map(e => (}

                                        <div className="grid mx-2 mt-5">
                                            <div className="grid-item">
                                                <Link to={`/detail/`}>
                                                    <div className="card">
                                                        <img className="card-img" src={asset} />
                                                        <div className="card-content">
                                                            <h1 className="card-header" style={{ textAlign: "center" }} >Bubuyy</h1>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    { ))} }
                                    </div>

                            { )} } */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default HomePage
