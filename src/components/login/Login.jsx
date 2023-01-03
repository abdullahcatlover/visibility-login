import {useState} from 'react'
import './login.scss'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'



const Login = () => {
    const [showPassword, setShowPassword] = useState(false)

    const handlePassword =()=> {
        setShowPassword(!showPassword)
    }
    


    return (
        <section className='login --100vh --center-all'>
            <div className=' sub__login --card --bg-light'>
                <h2 className='--color-danger'>Login</h2>
                <div className="--form-control">
                    <input className='--width-100' type="text"
                        placeholder='Username' />
                    <div className='password'>
                        <input 
                        type={showPassword ? "text" : "password"}
                        className='--width-100' 
                         placeholder='Password' />
                        <div onClick={handlePassword} 
                        className='icon'>
                           {
                            showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />
                           }
                        </div>
                    </div>
                    <button className='--btn --btn-danger --btn-block'>Login</button>
                </div>
            </div>

        </section>
    )
}

export default Login