import {StickerText} from '../stickertext/StickerText'
import {useState} from 'react'
import { useFormik, Formik, Form, Field} from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'

const SignupSchema = Yup.object().shape({
    username: Yup.string()
        .min(3, 'Username must be at least 3 characters')
        .required('Username is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters long') // Minimum length requirement
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter') // Capital letter
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter') // Lowercase letter (often implied with capital, but good to explicitly include)
        .matches(/\d/, 'Password must contain at least one number') // Number
        .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm password is required'),
})

export function SignupForm({children}){
    const initialValues = {
        username: '',
        confirmPassword: ''
    }

    const handleSubmit = (values, { setSubmitting }) => {
        console.log('Signup values:', values);
        setSubmitting(false);
    }

    return(
        <>
        <div className="bg-white z-[5] h-screen w-screen backdrop-opacity-500"></div>
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 w-full max-w-md relative shadow-2xl">
                {/* Close button */}
                <button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors" onClick={() => {window.history.back()}}>
                    <span className="text-gray-600 text-lg font-bold leading-none">×</span>
                </button>

                {/* Title */}
                <div className="sticker-heading h-[36px] pl-1 mb-6">
                        <StickerText h1={true}>Sign Up</StickerText>
                </div>

                {/* Legal text */}
                <p className="text-sm text-gray-400 mb-6 leading-relaxed ">
                    By continuing, you agree to our <u className="text-gray-500 cursor-pointer">User Agreement</u> and acknowledge that you understand the <u className="text-gray-500 cursor-pointer">Privacy Policy</u>.
                </p>

                {/* Alternative signup options */}
                <div className="flex flex-col gap-3 mb-6">
                    <button className="flex items-center gap-3 w-full p-3 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                        <div className="w-5 h-5 bg-gray-500 rounded flex-shrink-0"></div>
                        Continue with Phone Number
                    </button>
                    <button className="flex items-center gap-3 w-full p-3 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                        <div className="w-5 h-5 bg-gray-500 rounded flex-shrink-0"></div>
                        Continue with Gmail
                    </button>
                    <button className="flex items-center gap-3 w-full p-3 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                        <div className="w-5 h-5 bg-gray-500 rounded flex-shrink-0"></div>
                        Continue with Apple
                    </button>
                </div>

                {/* OR separator */}
                <div className="flex items-center my-6">
                    <div className="flex-1 h-px bg-gray-200"></div>
                    <span className="mx-4 text-sm text-gray-400 font-medium">OR</span>
                    <div className="flex-1 h-px bg-gray-200"></div>
                </div>

                {/* Traditional signup fields */}
                 <Formik 
                     initialValues={initialValues}
                     validationSchema={SignupSchema}
                     onSubmit={handleSubmit}
                 >
                     {({errors, touched, isSubmitting}) => (
                         <Form className="flex flex-col gap-4 mb-4">
                             <Field 
                                 type="text" 
                                 name="username"
                                 placeholder="Username" 
                                 className="w-full p-3 border-none rounded-lg bg-gray-100 text-sm text-gray-700 placeholder-gray-400 focus:bg-gray-200 focus:outline-none transition-colors"
                             />
                             {errors.username && touched.username && (
                                 <div className="text-red-500 text-sm">{errors.username}</div>
                             )}
                             
                             <Field 
                                 type="email" 
                                 name="email"
                                 placeholder="Email" 
                                 className="w-full p-3 border-none rounded-lg bg-gray-100 text-sm text-gray-700 placeholder-gray-400 focus:bg-gray-200 focus:outline-none transition-colors"
                             />
                             {errors.email && touched.email && (
                                 <div className="text-red-500 text-sm">{errors.email}</div>
                             )}

                             <Field 
                                 type="password" 
                                 name="password"
                                 placeholder="Password" 
                                 className="w-full p-3 border-none rounded-lg bg-gray-100 text-sm text-gray-700 placeholder-gray-400 focus:bg-gray-200 focus:outline-none transition-colors"
                             />
                             {errors.password && touched.password && (
                                 <div className="text-red-500 text-sm">{errors.password}</div>
                             )}
                             <ul className="text-sm text-gray-500 list-disc list-inside">
                                <li>Password must be at least 8 characters long</li>
                                <li>Password must contain at least one uppercase letter</li>
                                <li>Password must contain at least one number</li>
                                <li>Password must contain at least one special character</li>
                             </ul>
                             <Field 
                                 type="password" 
                                 name="confirmPassword"
                                 placeholder="Confirm Password" 
                                 className="w-full p-3 border-none rounded-lg bg-gray-100 text-sm text-gray-700 placeholder-gray-400 focus:bg-gray-200 focus:outline-none transition-colors"
                             />
                             {errors.confirmPassword && touched.confirmPassword && (
                                 <div className="text-red-500 text-sm">{errors.confirmPassword}</div>
                             )}
                             
                             {/* Helper links */}
                             <div className="flex flex-col gap-2 mb-6">
                                 <p className="text-sm text-gray-500 text-center">
                                     Already have an account? <Link to="/login" className="text-teal-500 hover:text-teal-600 transition-colors">Sign in</Link>
                                 </p>
                             </div>

                             {/* Main signup button */}
                             <button 
                                 type="submit" 
                                 disabled={isSubmitting}
                                 className="w-full p-4 bg-teal-500 hover:bg-teal-600 disabled:bg-gray-400 text-white font-semibold text-base rounded-lg transition-colors"
                             >
                                 {isSubmitting ? 'Creating account...' : 'Sign Up'}
                             </button>
                         </Form>
                     )}
                 </Formik>


            </div>
        </div>
        </>
    )
}

export default SignupForm
