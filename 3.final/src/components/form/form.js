import { useState } from 'react';
import './form.css'

export default function Popup() {
    const [info, setInfo] = useState(
        {
            name: '',
            email: '',
            password: '',
            confirm_password: '',
            user_name: '',
        }
    );


    const [login, setLogin] = useState(
        {
            user_name:'',
            password:''
        }
    );

    
    function HandleChange1(e) {
        const { id, value } = e.target;
        setLogin({
            ...login,
            [id]: value,
        })
    }

    function user(e) {
        const { id, value } = e.target;
        setInfo({
            ...info,
            [id]: value,
        })
    }
    console.log(info.name)
    console.log(info.email)
    console.log(info.password)
    console.log(info.confirm_password)
    console.log(info.user_name)

    console.log(login.user_name)
    console.log(login.password)

    function handleSubmit() {
        console.log(info)
    }

    function handleSubmit2() {
        console.log(login);
    }

    return (
        <div className='body'>
            <h1 className='h1'>
                <br/>
            </h1>
            <div class="box">
                <a class="button" href="#popup1">sign-up</a>
            </div>
            <div class="box">
                <a class="button" href="#popup2">log-in</a>
            </div>

            <div id="popup2" class="overlay">
                {/* <div class="popup">
                    <h2>Here i am</h2>
                    <a class="close" href="#">&times;</a>
                    <div class="content">
                        Thank to pop me out of that button, but now i'm done so you can close this window.
                    </div>
                </div> */}

                <div className='form1'>
                    <div className='form'>
                    <a class="close" href="close"><button className='btn'>close</button></a>
                        <div className='title'>Hello</div>
                        <div className='subtitle'></div>

                        <div className='input-container ic1'>
                            <input id='user_name'
                                className='input'
                                type='username'
                                onChange={(e) => HandleChange1(e)}
                                required />
                            <div className='cut9'>

                            </div>
                            <label
                                for="username"
                                className='placeholder' >
                                USER-NAME
                            </label>
                        </div>
                        <div className='input-container ic1'>
                            <input id='password'
                                className='input'
                                type="password"
                                onChange={(e) => HandleChange1(e)} />
                            <div className='cut2'>

                            </div>
                            <label
                                for="passowrd"
                                className='placeholder' >
                                PASSWORD
                            </label>
                        </div>

                        <center>
                            <button
                                type="submit" onClick={handleSubmit2} 
                                className="submit2">
                                log-in
                            </button>
                        </center>
                    </div>
                </div>
            </div>


            <div id="popup1" class="overlay">
                {/* <div class="popup">
                    <h2>Here i am</h2>
                    <a class="close" href="#">&times;</a>
                    <div class="content">
                    Thank to pop me out of that button, but now i'm done so you can close this window.
                    </div>
                </div> */}

                <div className='form1'>
                    <div className='formsu'>
                        <a class="close" href="close"><button>close</button></a>
                        <div className='title'>Hello</div>
                        <div className='subtitle'>Create Your Account</div>
                        <div className='input-container ic1'>
                            <input id='name' 
                            name='name'
                                className='input'
                                onChange={(e) => user(e)} />
                            <div className='cut'>
                            </div>
                            <label for="name"
                                className='placeholder' >
                                NAME 
                            </label>
                        </div>

                        <div className='input-container ic2'>
                            <input id='email'
                                className='input'
                                type="email"
                                onChange={(e) => user(e)} />
                            <div className='cut'>

                            </div>
                            <label
                                for="email"
                                className='placeholder' >
                                EMAIL
                            </label>
                        </div>

                        <div className='input-container ic1'>
                            <input id='password'
                                className='input'
                                type="password"
                                onChange={(e) => user(e)} />
                            <div className='cut2'>

                            </div>
                            <label
                                for="passowrd"
                                className='placeholder' >
                                PASSWORD
                            </label>
                        </div>

                        <div className='input-container ic1'>
                            <input id='confirm_password'
                                className='input'
                                type="password"
                                placeholder=''
                                onChange={(e) => user(e)} />
                            <div className='cut1'>

                            </div>
                            <label
                                for="confirm_password"
                                className='placeholder' >
                                CONFIRM
                                <br />
                                PASSWORD
                            </label>
                        </div>

                        <div className='input-container ic1'>
                            <input id='username'
                                className='input'
                                type='username'
                                onChange={(e) => user(e)}
                                required />
                            <div className='cut9'>

                            </div>
                            <label
                                for="mobile"
                                className='placeholder' >
                                USER-NAME
                            </label>
                        </div>
                        <center>
                            <button
                                type="submit" href="/" onClick={handleSubmit} 
                                className="submit">
                                sign-up
                            </button>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    )
}