import { useState } from 'react';

export default function Form() {

    const [info, setInfo] = useState(
        {
            name: '',
            email: '',
            password: '',
            confirm_password: '',
            mobile_no: '',
        }
    );

    function user(e) {
        const { name, value } = e.target;
        setInfo({
            ...info,
            [name]: value,
        })
    }
    console.log(info)

    return (
        <div class="form">
            <div className='title'>Hello..</div>
            <div className='subtitle'>Fill your information</div>
            <div class='input-container ic1'>
                <input id='name'
                    className='input'
                    type="name"
                    onChange={(e) => user(e)} />
                <div class='cut'>
                </div>
                <label for="name"
                    className='placeholder' >
                    NAME
                </label>
            </div>

            <div class='input-container ic2'>
                <input id='email'
                    className='input'
                    type="email"
                    onChange={(e) => user(e)} />
                <div class='cut'>

                </div>
                <label
                    for="email"
                    className='placeholder' >
                    EMAIL
                </label>
            </div>

            <div class='input-container ic1'>
                <input id='password'
                    className='input'
                    type="password"
                    onChange={(e) => user(e)} />
                <div class='cut32'>

                </div>
                <label
                    for="passowrd"
                    className='placeholder' >
                    PASSWORD
                </label>
            </div>

            <div class='input-container ic1'>
                <input id='conform password'
                    className='input'
                    type="password"
                    onChange={(e) => user(e)} />
                <div class='cut33'>

                </div>
                <label
                    for="conform password"
                    className='placeholder' >
                    CONFIRM
                    <br />
                    PASSWORD
                </label>
            </div>

            <div class='input-container ic1'>
                <input id='mobile number'
                    className='input'
                    name='mobile number'
                    type='number'
                    onChange={(e) => user(e)}
                    required />
                <div class='cut'>

                </div>
                <label
                    for="mobile number"
                    className='placeholder' >
                    MOBILE
                </label>
            </div>
            <button
                type="submit"
                class="submit">
                submit
            </button>
        </div>
    )
}

