import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const List = () => {
    const [data, setData] = useState([]);
    const [id, setID] = useState(0);

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.post("http://localhost:5000/api/v1/ReadProduct");
                if (res.data && res.data.data) {
                    console.log("API response:", res.data);
                    setData(res.data.data);
                } else {
                    console.log("API response format is unexpected:", res.data);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        })();
    }, [id]); // Add id as a dependency to the useEffect hook

    console.log("Data:", data); // Just before the map function

    const onDelete = async (id) => {
        let URL = "http://localhost:5000/api/v1/DeleteProduct/" + id;
        await axios.delete(URL);
        setID(id); // This triggers a re-fetch due to the change in dependency
    };

    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-8">

                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Product Name</th>
                                    <th>Product Code</th>
                                    <th>Unit Price</th>
                                    <th>Qty</th>
                                    <th>Total price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td><img className="w-40" src={item['Img']} alt="Product" /></td>
                                                <td>{item['ProductName']}</td>
                                                <td>{item['ProductCode']}</td>
                                                <td>{item['UnitPrice']}</td>
                                                <td>{item['Qty']}</td>
                                                <td>{item['TotalPrice']}</td>
                                                <td>
                                                <Link to={"/update/"+item['_id']} className="btn btn-success btn-sm">Edit</Link>
                                                    <button onClick={() => onDelete(item['_id'])} className="btn btn-danger btn-sm">Delete</button>
                                                </td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default List;