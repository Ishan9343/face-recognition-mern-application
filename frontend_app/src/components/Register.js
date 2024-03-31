import { PictureControls } from "./PictureControls"
import { useDispatch, useSelector } from "react-redux"
import { getActiveTab, getAuthError, getRequest, getScreenshot, registerUser, setAuthError, setRegisterEmail, setRegisterName, setRegisterPassword, setRegisterRepeatPassword } from "../features/auth/authSlice"
import { Navigate } from "react-router-dom";
import { getFaces } from "../features/auth/facenetSlice";

export const Register = ({ enableInput }) => {

    const activeTab = useSelector(getActiveTab)
    const dispatch = useDispatch()
    const request = useSelector(getRequest)
    const name = request.register.name
    const email = request.register.email
    const password = request.register.password
    const repeatPassword = request.register.repeatPassword
    const screenshot = useSelector(getScreenshot)
    const error = useSelector(getAuthError)
    const faces = useSelector(getFaces)

    const manageForm = (e) => {
        e.preventDefault()
        validateInputs()
        validatePassword()
        if (
            name != null &&
            error.register.email == null &&
            error.register.password == null &&
            screenshot != null &&
            repeatPassword === password &&
            faces.length !== 0
        ) {
            const user = { name, email, password, screenshot, descriptor: Object.values(faces[0].descriptor) }
            dispatch(registerUser(user)).then(payload => {
                if (payload.meta.requestStatus === 'fulfilled') {
                    <Navigate to="/dashboard" />
                }
            })
        }
    }

    const validateInputs = () => {
        if (name == null) {
            dispatch(setAuthError({ register: { name: 'The NAME field is required.' } }))
        } else {
            dispatch(setAuthError({ register: { name: null } }))
        }
        if (email == null) {
            dispatch(setAuthError({ register: { email: 'The EMAIL field is required.' } }))
        } else if (!email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            dispatch(setAuthError({ register: { email: 'The EMAIL field is not in the standard form.' } }))
        } else {
            dispatch(setAuthError({ register: { email: null } }))
        }
        if (screenshot == null) {
            dispatch(setAuthError({ register: { screenshot: 'A face IMAGE is required.' } }))
        } else {
            dispatch(setAuthError({ register: { screenshot: null } }))
        }
        if (password !== repeatPassword) {
            dispatch(setAuthError({ register: { repeatPassword: 'The PASSWORD and REPEAT PASSWORD fields do not match.' } }))
        } else {
            dispatch(setAuthError({ register: { repeatPassword: null } }))
        }
    }

    const validatePassword = () => {
        let warnings = []
        if (password == null) {
            warnings.push('The PASSWORD field is required.')
        } else {
            if (password.length < 6) {
                warnings.push('The PASSWORD field must exceed 6 characters.')
            }
            if (!password.match(/[A-Z]/g)) {
                warnings.push('The PASSWORD field must contain at least one uppercase letter.')
            }
            if (!password.match(/[a-z]/g)) {
                warnings.push('The PASSWORD field must contain at least one lowercase letter.')
            }
        }
        dispatch(setAuthError({ register: { password: (warnings.length > 0 ? warnings : null) } }))
    }

    return (
   <form className={'login100-form '+(activeTab === 'register' ? 'active' : '')}>      
            
  <div class="mb-3" onClick={() => enableInput('name')}>
    <label for="examplename" class="form-label">Name</label>
    <input type="text"  name="name"  value={name || ''}
    onChange={(e) => dispatch(setRegisterName(e.target.value))} class="form-control" id="name" aria-describedby="emailHelp" />
  </div>
  <div class="mb-3" onClick={() => enableInput('register-email')} >
    <label type="email" for="email" class="form-label">Email address</label>
    <input type="email"  name="register-email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email || ''}
    onChange={(e) => dispatch(setRegisterEmail(e.target.value))} />
   </div>
  <div class="mb-3" onClick={() => enableInput('register-password')}>
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" name="register-password" class="form-control" id="exampleInputPassword1"  value={password || ''}
    onKeyUp={validatePassword}
    onChange={(e) => dispatch(setRegisterPassword(e.target.value))} />
  </div>
  <div class="mb-3" onClick={() => enableInput('repeat-password')}>
    <label for="exampleInputPassword1" class="form-label">Repeat Password</label>
    <input type="password" name="repeat-password" class="form-control" id="exampleInputPassword1"   value={repeatPassword || ''}
    onChange={(e) => dispatch(setRegisterRepeatPassword(e.target.value))} />
  </div>
    <p><strong>*Scroll up for scanning face*</strong></p>
  
  <button type="submit" class="btn btn-warning" onClick={(e) => manageForm(e)}>Submit</button>
     <PictureControls />
    </form >
    )
}
