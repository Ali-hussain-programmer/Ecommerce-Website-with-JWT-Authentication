import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { product } from "../../Data/Data";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import "./SingleProduct.scss";
import Productlist from "./Productlist";
function SingleProduct() {
  const [sel, setSel] = useState("");
  const [sort, setSort] = useState("");
  const [display, setdisplay] = useState(product);

  const handleChange = (event) => {
    setSel(event.target.value);
    setdisplay(() => {
      return display.filter((curr) => {
        return curr.category === event.target.value;
      });
    });
    console.log(event.target.value);
  };
  const handleChangeSort = (event) => {
    setSort(event.target.value);
 
  };
  return (
    <>
      <div className="SingleProduct">
        <h1>Dressess</h1>
        <div className="filter">
          <div className="sortbydress">
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-simple-select-autowidth-label">
                Dress
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={sel}
                onChange={handleChange}
                autoWidth
                label="Filter Ptoducts"
              >
                <MenuItem value={"T-shirt"}>T-shirt</MenuItem>
                <MenuItem value={"Bags"}>Bags</MenuItem>
                <MenuItem value={"Shoes"}>Shoes</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="sortbyNew">
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-simple-select-autowidth-label">
                Sort
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={sort}
                onChange={handleChangeSort}
                autoWidth
                label="Filter Ptoducts"
              >
                <MenuItem value={"New"}>New</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="products">
          {}
          {display?.map((curr, index) => {
            return <Productlist key={curr.id} img={curr.img} id={curr.id} />;
          })}
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
