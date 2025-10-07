import {StickerText} from '../stickertext/StickerText'
import { Formik, Form, Field} from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'

const LoginSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
})

export function LoginForm({children}){
    const initialValues = {
        username: '',
        password: ''
    }

    const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
        try {
            console.log('Submitting login:', values);
            
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values)
            });

            const data = await response.json();

            if (response.ok) {
                // Login successful
                console.log('Login successful:', data);
                
                // Handle successful login
                if (data.token) {
                    // Store token in localStorage or cookies
                    localStorage.setItem('authToken', data.token);
                }
                
                if (data.user) {
                    // Store user data
                    localStorage.setItem('user', JSON.stringify(data.user));
                }
                
                // Redirect to dashboard or home page
                window.location.href = '/';
                
            } else {
                // Login failed - handle errors
                console.error('Login failed:', data);
                
                if (data.errors) {
                    // Set field-specific errors
                    Object.keys(data.errors).forEach(field => {
                        setFieldError(field, data.errors[field]);
                    });
                } else if (data.message) {
                    // Set general error message
                    setFieldError('general', data.message);
                } else {
                    setFieldError('general', 'Login failed. Please try again.');
                }
            }
        } catch (error) {
            console.error('Network error:', error);
            setFieldError('general', 'Network error. Please check your connection.');
        } finally {
            setSubmitting(false);
        }
    }

    return(
        <>
            <div className="bg-white z-[5] h-screen w-screen backdrop-opacity-500"></div>
            <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-2xl p-8  max-w-md relative shadow-2xl">

                    {/* Close button */}
                    <button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors" onClick={() => {window.history.back()}}>
                        <span className="text-gray-600 text-lg font-bold leading-none">×</span>
                    </button>

                    {/* Title */}
                    <div className="sticker-heading h-[36px]  mb-6 pl-1">
                        <StickerText h1={true}>Log In</StickerText>
                    </div>
                  

                    {/* Legal text */}
                    <p className="text-sm text-gray-400 mb-6 leading-relaxed ">
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
                             {/* General error message */}
                             {errors.general && (
                                 <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                                     {errors.general}
                                 </div>
                             )}
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
                                    <p className="text-sm text-gray-500">
                                        New to Stickies? <Link to="/signup" className="text-teal-500 hover:text-teal-600 transition-colors">Sign up</Link>
                                    </p>
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