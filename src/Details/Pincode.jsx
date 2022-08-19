import React, { useState } from 'react'
import PincodeResult from './PincodeResult'
import Spinnner from './Spinner'
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
//  dark light mode section start
let bg = document.getElementById("body")
let changebg = document.getElementsByTagName("h4")
let changenav = document.getElementsByTagName("nav")
let changefooter = document.getElementsByTagName("footer")
let changebtn= document.getElementsByTagName("button")
export default function Pincode(props) {
    let [show, setshow] = useState("Light")
    const [checked, setChecked] = React.useState(false);
    const handleChange = () => {
        setChecked((prev) => !prev);
        if (checked === false) {
            setshow("Dark")
            bg.style.backgroundColor = "#121212"
            changebg[0].classList.add("lightbg");
            changenav[0].classList.add("lightbg");
            changefooter[0].classList.add("lightbg");
            changebtn[1].classList.remove("btn-primary");
            changebtn[1].classList.add("lightbg");

        }
        else {
            setshow("Light")
            bg.style.backgroundColor = "white"
            changebg[0].classList.remove("lightbg");
            changenav[0].classList.remove("lightbg");
            changefooter[0].classList.remove("lightbg");
            changebtn[1].classList.remove("lightbg");
            changebtn[1].classList.add("btn-primary");

        }


    }
    // dark light mode section end


    let [pincode, setpincode] = useState("")
    let [pinresult, setpinresult] = useState([])
    let [spinner, setspinner] = useState("")
    let formheight = document.getElementById("formmy")

    function Getdata(e) {
        setpincode(e.target.value)
    }
    async function search(e) {
        e.preventDefault()
        let options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Content-Type': 'application/json',
                'X-RapidAPI-Key': `${props.api}`,
                'X-RapidAPI-Host': 'pincode.p.rapidapi.com'
            },
            body: `{"searchBy":"pincode","value":${pincode}}`
        };
        setspinner(<Spinnner />)
        try {
            if (pincode.length < 6 || pincode.length > 6 || isNaN(pincode) === true) {
                alert("Invalid pincode entered !")
            }
            else {
                let rawdata = await fetch('https://pincode.p.rapidapi.com/', options)
                let result = await rawdata.json()
                if (result.length === 0) {
                    alert("Pincode not found !")
                }
                else {
                    setpinresult(result)
                    formheight.style.height = "auto"
                }

            }

        }
        catch (error) {
            alert("Some error occured ! Try again")
        }
        setspinner("")

    }



    return (
        <>
            <div className="modes"> Mode:
                <Box sx={{ height: 180 }}>
                    <FormControlLabel
                        control={<Switch checked={checked} onChange={handleChange} />}
                        label={show}
                        name="show"
                    />
                </Box>


            </div>

            <h4 className=' text-center text-light background p-3 mt-2 mb-2 h4class'>Check Post Offices Under Pincode</h4>

            <div className="mb-3" id="formmy">
                <form className="d-flex" role="search" onSubmit={search}>
                    <input required type="text" min="6" max="6" className="form-control" name='pincode' id="exampleFormControlInput1" placeholder="Enter Pincode no" onChange={Getdata} />
                    <button className="btn btn-primary w-100 mt-2" type="submit">Sumbit</button>
                    <div className="myspinner">{spinner}</div>
                </form>
            </div>


            <div className="container-fluid">
                <div className="row">

                    {pinresult.map((item, index) => {


                        return <PincodeResult
                            key={index}
                            pincode={item.pin}
                            office={item.office}
                            delivery={item.delivery}
                            division={item.division}
                            circle={item.circle}
                            district={item.district}
                            phone={item.phone}
                            suboffice={item.related_suboffice}
                            headoffice={item.related_headoffice}
                        />

                    })}


                </div>
            </div>

        </>
    )
}
