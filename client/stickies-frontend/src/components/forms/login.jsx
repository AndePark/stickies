import {StickerText} from '../stickertext/StickerText'
import {useState} from 'react'
import { useFormik, Formik, Form, Field} from 'formik'
import * as Yup from 'yup'

const LoginSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
})

export function LoginForm({children}){
    const initialValues = {
        username: '',
        password: ''
    }

    const handleSubmit = (values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
    }

    return(
        <>
        <div className="bg-white z-[5] h-screen w-screen backdrop-opacity-500"></div>
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 w-full max-w-md relative shadow-2xl">
                {/* Close button */}
                <button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                    <span className="text-gray-600 text-lg font-bold leading-none">×</span>
                </button>

                {/* Title */}
                <StickerText text="Log In"></StickerText>
                <h1 className="text-3xl font-bold text-black mb-4 justify-center text-center">Log In</h1>

                {/* Legal text */}
                <p className="text-sm text-gray-400 mb-6 leading-relaxed justify-center text-center">
                    By continuing, you agree to our <u className="text-gray-500 cursor-pointer">User Agreement</u> and acknowledge that you understand the <u className="text-gray-500 cursor-pointer">Privacy Policy</u>.
                </p>

                {/* Alternative login options */}
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

                {/* Traditional login fields */}
                 <Formik 
                     initialValues={initialValues}
                     validationSchema={LoginSchema}
                     onSubmit={handleSubmit}
                 >
                     {({errors, touched, isSubmitting}) => (
                         <Form className="flex flex-col gap-4 mb-4">
                             <Field 
                                 type="text" 
                                 name="username"
                                 placeholder="Email or Username" 
                                 className="w-full p-3 border-none rounded-lg bg-gray-100 text-sm text-gray-700 placeholder-gray-400 focus:bg-gray-200 focus:outline-none transition-colors"
                             />
                             {errors.username && touched.username && (
                                 <div className="text-red-500 text-sm">{errors.username}</div>
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
                             
                             {/* Helper links */}
                             <div className="flex flex-col gap-2 mb-6">
                                 <a href="#" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">Forgot password?</a>
                                 <a href="#" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">New to Stickies? Sign up</a>
                             </div>

                             {/* Main login button */}
                             <button 
                                 type="submit" 
                                 disabled={isSubmitting}
                                 className="w-full p-4 bg-teal-500 hover:bg-teal-600 disabled:bg-gray-400 text-white font-semibold text-base rounded-lg transition-colors"
                             >
                                 {isSubmitting ? 'Logging in...' : 'Log In'}
                             </button>
                         </Form>
                     )}
                 </Formik>


            </div>
        </div>
        </>
    )
}   

export default LoginForm