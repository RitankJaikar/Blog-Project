import React, {useState} from 'react'
import authService from '../appwrite/auth'
import service from '../appwrite/configuration.js'
import {Link ,useNavigate} from 'react-router-dom'
import {login} from '../store/authSlice'
import { managePosts } from '../store/postSlice.js'
import {Button, Input, Logo} from './index.js'
import {useDispatch} from 'react-redux'
import {useForm} from 'react-hook-form'

function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const {register, handleSubmit, formState: {errors}} = useForm()

    const create = async(data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if(userData){
                   dispatch(login({userData}));
                   service.getPosts([])
                        .then((res) => {
                            // console.log("posts", res);
                            dispatch(managePosts(res.documents));
                        })
                        .catch((err) => {
                            dispatch(managePosts([]));
                            console.log("Failed to fetch posts :: ", err.message);
                        })
                }
                navigate("/");
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div className="flex items-center justify-center">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

                <form onSubmit={handleSubmit(create)}>
                    <div className='space-y-5'>
                        <Input
                        label="Full Name: "
                        placeholder="Enter your full name"
                        className={errors.bame ? "border-red-600": null}
                        {...register("name", {
                            required: "name is required"
                        })}
                        />
                        {errors.name && <p className='text-red-600 text-center' style={{marginTop: "-2px"}}>{errors.name.message}</p>}
                        <Input
                        label="Email: "
                        placeholder="Enter your email"
                        type="email"
                        className={errors.email ? "border-red-600": null}
                        {...register("email", {
                            required: "email is required",
                            validate: {
                                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                "Email address must be a valid address",
                            }
                        })}
                        />
                        {errors.email && <p className='text-red-600 text-center' style={{marginTop: "-2px"}}>{errors.email.message}</p>}
                        <Input
                        label="Password: "
                        type="password"
                        placeholder="Enter your password"
                        className={errors.password ? "border-red-600": null}
                        {...register("password", {
                            required: "password is required" })}
                        />
                        {errors.password && <p className='text-red-600 text-center' style={{marginTop: "-2px"}}>{errors.password.message}</p>}
                        <Button type="submit" className="w-full">
                            Create Account
                        </Button>
                    </div>
                </form>
            </div>

    </div>
  )
}

export default Signup