import { Link } from "react-router-dom"
import "./product.css"
import Chart from "../../components/charts/Chart"
import { productData } from "../../dummyData"
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

export default function Product() {
  return (
    <div className="product">
        <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to="/newproduct">
                <button className="productAddButton">Create</button>
            </Link>
        </div>
        <div className="productTop">
            <div className="productTopLeft">
                <Chart data={productData} title="Sale Performance" dataKey="Sales" />
            </div>
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img src="https://www.saucefanatic.com/wp-content/uploads/2022/05/authentic-italian-gravy-6.jpg" 
                    alt="" 
                    className="productInfoImg" 
                    />
                    <span className="productName">Spaghetti with Gravy</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="productInfoKey">id:</span>
                        <span className="productInfoValue">123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">sales</span>
                        <span className="productInfoValue">5000</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">active</span>
                        <span className="productInfoValue">yes</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">in stock:</span>
                        <span className="productInfoValue">yes</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="productBottom">
            <form className="productForm">
                <div className="productFormLeft">
                    <label>Product Name</label>
                    <input type="text" placeholder="Spaghetti with Gravy" />
                    <label>In Stock</label>
                    <select name="inStock" id="inStock">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <label>Active</label>
                    <select name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="productFormRight">
                    <div className="productUpload">
                        <img src="https://www.saucefanatic.com/wp-content/uploads/2022/05/authentic-italian-gravy-6.jpg" 
                        alt="" 
                        className="productUploadImg" 
                        />
                        <label for="file">
                            <FileUploadOutlinedIcon />
                        </label>
                        <input type="file" id="file" style={{display: "none"}} />
                    </div>
                    <button className="productButton">Update</button>
                </div>
            </form>

        </div>
    </div>
  )
}
