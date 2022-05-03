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

        onSubmit:(values)=>{ 
            console.log(values) }
    })
   
    return <div>
        <form onSubmit={formik.handleSubmit}>
            <input 
            type="text"
            name="username"
            onChange={formik.handleChange}
            value={formik.values.username}
            />
            <input 
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            />
            <input 
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            />
            <br/>
            <label> Color you like</label>
            <br/>
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
            <br/>
            <select name='method' onChange={formik.handleChange} >
                <option value=''>select Payment Method</option>
                <option value='Cash'>Cash</option>
                <option value='Bitcoin'>Bitcoin</option>
                <option value='Gold'>Gold</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    </div>
};

export default Form