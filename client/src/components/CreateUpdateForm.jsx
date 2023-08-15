import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const CreateUpdateForm = () => {
    let { id } = useParams();

    let [FormValue, SetFormValue] = useState();


    let navigate = useNavigate();

    // let [isProduct, setIsProduct] = useState(false);
    
    useEffect(()=>{

        (async ()=>{
            let res = await axios.post(`http://localhost:5000/api/v1/ReadProductById/${id}`);
           SetFormValue(res?.data?.data);
            // setIsProduct(true);
            console.log(res?.data?.data);
        })()

    },[id])
    


    const InputOnChange = (property, value) => {
        SetFormValue({ ...FormValue, [property]:value });
    }

    const onSubmit = async () => {
        let URL = "http://localhost:5000/api/v1/CreateProduct"
        if (id) {
            URL = `http://localhost:5000/api/v1/UpdateProduct/${id}`;
        }
        let res = await axios.post(URL, FormValue);
        if (res.status === 200) {
            alert("Save Changes");
            navigate('/');
        }
    }

    console.log("FormValue:", FormValue);
    // console.log(FormValue?.ProductName);

    return (
        <div>
            <h1>This is Create update form</h1>
            <div className="container">

                <div className="row">
                    <div className="col-md-6 p-2">
                        <label>Product Name</label>
                        <input className="form-control" value={FormValue?.ProductName || ''} onChange={(e) => { InputOnChange('ProductName', e.target.value) }} type="text" placeholder="" />
                    </div>
                    <div className="col-md-6">
                        <label>Product Code</label>
                        <input className="form-control" value={FormValue?.ProductCode || ''} onChange={(e) => { InputOnChange('ProductCode', e.target.value) }} type="text" placeholder="" />
                    </div>
                    <div className="col-md-6">
                        <label>Product Img</label>
                        <input className="form-control form-control-sm" value={FormValue?.Img || ''} onChange={(e) => { InputOnChange('Img', e.target.value) }} type="text" placeholder="" />
                    </div>
                    <div className="col-md-6">
                        <label>Product Qty</label>
                        <input className="form-control form-control-sm" value={FormValue?.Qty || ''} onChange={(e) => { InputOnChange('Qty', e.target.value) }} type="text" placeholder="" />
                    </div>
                    <div className="col-md-6">
                        <label>Unit Price</label>
                        <input className="form-control form-control-sm" value={FormValue?.UnitPrice || ''} onChange={(e) => { InputOnChange('UnitPrice', e.target.value) }} type="text" placeholder="" />
                    </div>

                    <div className="col-md-6">
                        <label>Total Price</label>
                        <input className="form-control form-control-sm" value={FormValue?.TotalPrice || ''} onChange={(e) => { InputOnChange('TotalPrice', e.target.value) }} type="text" placeholder="" />
                    </div>

                </div>
                <div className="row">
                    <div className="col-3">
                        <button onClick={onSubmit} className="btn my-2  w-100 btn-danger">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateUpdateForm;