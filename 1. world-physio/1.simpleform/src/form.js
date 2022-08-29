import { useState } from 'react';

export default function FormFill() {

    const [info, setInfo] = useState(
        {
            name: '',
            email: '',
            password: '',
            confirm_password: '',
            mobile: '',
        }
    );

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
    console.log(info.mobile)

    function handleSubmit() {
        console.log(info)
    }

    return (
        <div className='form'>
            <div className='title'>Hello</div>
            <div className='subtitle'>Fill your information</div>
            <div className='input-container ic1'>
                <input id='name'
                    className='input'
                    type="name"
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
                <div className='cut32'>

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
                <div className='cut31'>

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
                <input id='mobile'
                    className='input'
                    type='number'
                    onChange={(e) => user(e)}
                    required />
                <div className='cut'>

                </div>
                <label
                    for="mobile"
                    className='placeholder' >
                    MOBILE
                </label>
            </div>
            <button
                type="submit" onClick={handleSubmit}
                className="submit">
                submit
            </button>
        </div>
    )
}

