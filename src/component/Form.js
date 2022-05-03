import { useFormik } from "formik";
import * as Yup from 'yup';

const  Form =()=>{
    const formik = useFormik({
        initialValues: {
            username: '',
            name: '',
            email: '',
            color: '',
            method:'',
        },
        validationSchema:Yup.object({
            username:Yup.string().max(10,"Username must be <=10")
            .min(3, 'The contact name needs to be at least 3 char')
            .required("this is required field"),
            name:Yup.string().required("this is required field")
            .required("this is required field"),
            email:Yup.string().email('Please provide valid email')
            .required("this is required field"),
            color:Yup.string()
            .required("this is required field"),
            method:Yup.string()
            .required("this is required field")

        }),
        onSubmit:(values)=>{ 
            console.log(values) }
    })
   
    console.log(formik.errors)
    console.log(formik.touched)
    
    return <div>
        <form onSubmit={formik.handleSubmit}>
            <input 
            type="text"
            name="username"
            onChange={formik.handleChange}
            value={formik.values.username}
            placeholder="Username"
            onBlur={formik.handleBlur}
            />
            {formik.touched.username && formik.errors.username && <p style={{color:"red"}}> {formik.errors.username }</p>}
            <input 
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            placeholder="Name"
            />
            {formik.touched.name && formik.errors.name && <p style={{color:"red"}}> {formik.errors.name }</p>}
            <input 
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="Email address"
            />
            {formik.touched.email && formik.errors.email && <p style={{color:"red"}}> {formik.errors.email }</p>}
            <br/>
            <label> Color you like</label>
            <br />
            <label> Red</label>
            <input type="radio"
            name="color"
            value='red'
            onChange={formik.handleChange} />
            <label> yellow</label>
            <input type="radio"
            name="color"
            value='yellow'
            onChange={formik.handleChange} />
            <label> blue</label>
            <input type="radio"
            name="color"
            value='blue'
            onChange={formik.handleChange} />
            {formik.touched.color && formik.errors.color && <p style={{color:"red"}}> {formik.errors.color }</p>}
            <br/>

            <select name='method' onChange={formik.handleChange} >
                <option value=''>select Payment Method</option>
                <option value='Cash'>Cash</option>
                <option value='Bitcoin'>Bitcoin</option>
                <option value='Gold'>Gold</option>
            </select>
            {formik.touched.method && formik.errors.method && <p style={{color:"red"}}> {formik.errors.method }</p>}
            <button type="submit">Submit</button>
        </form>
    </div>
};

export default Form