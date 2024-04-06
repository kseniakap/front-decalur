'use client'

import{ useState, type FC } from "react"
import Button from "@/ui/button/Button"
import Heading from "@/ui/heading/Heading";
import { useAdminAllCategories } from "../categories/useAdminCategories";

import st from "./CreateProduct.module.scss"


const CreateProduct:FC = () => {
  const {data} = useAdminAllCategories()
  const [fileSelected, setFileSelected] = useState<File[]>([]);
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [measureId, setMeasureId] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;

    if (!fileList) return;

    const filesArray = Array.from(fileList);
    setFileSelected(filesArray);
  };

  const uploadFile = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (fileSelected.length > 0) {
      try {
        setIsLoading(true);
        const formData = new FormData();
        fileSelected.forEach((file) => {
          formData.append("images", file, file.name);
        });

        const response = await fetch(
          `${process.env.SERVER_URL}/files/upload`,
           {
          method: "POST",
          body: formData,
        });
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const uploadedImages = await response.json();

        const productData = {
          name: productName,
          description: productDescription,
          price: parseInt(productPrice),
          categoryId: parseInt(categoryId),
          images: uploadedImages,
          measure: measureId
        };

        const createProductResponse = await fetch(
          `${process.env.SERVER_URL}/products`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(productData)
          }
        );

        if (!createProductResponse.ok) {
          throw new Error(createProductResponse.statusText);
          
        }
        setProductName("");
        setProductDescription("");
        setProductPrice("");
        setCategoryId("");
        setFileSelected([]);
        setIsLoading(false); 
        setMeasureId("")


      } catch (err) {
        setIsLoading(false); 
        console.log(err);
      }
    }
  };

  return (
    <section className={st.createProduct}>
      <Heading>Создание нового товара</Heading>
      <div className={st.form}>
      <label htmlFor="productName">Название:</label>
      <input
        id="productName"
        type="text"
        value={productName}
        onChange={(e)=> setProductName(e.target.value)}
        required
      />

      <label htmlFor="productDescription">Описание:</label>
      <textarea
        id="productDescription"
        value={productDescription}
        onChange={(e)=> setProductDescription(e.target.value)}
        required
      />
      <div className={st.price}>
        <label htmlFor="productPrice">Цена:</label>
        <input
          id="productPrice"
          type="number"
          value={productPrice}
          onChange={(e)=> setProductPrice(e.target.value)}
          required
        />
        <select onChange={(e)=>setMeasureId(e.target.value)}>
          <option value="">ед. изм.</option>
            <option value={"м²"}>м²</option>
            <option value={"шт"}>шт</option>
            <option value={"м.п"}>м.п</option>
        </select>
      </div>    
      <select onChange={(e)=>setCategoryId(e.target.value)}>
        <option value="">Выберите категорию</option>
        {data?.map(item =>
          <option value={item.id}>{item.items[0]}</option>
          )}
      </select>

      <label htmlFor="photo">
        <input
          accept="image/*"
          name="image"
          id="photo"
          type="file"
          multiple={true}
          onChange={handleImageChange}
          required
        />
      </label>
      <Button onClick={uploadFile} disabled={isLoading}>
          {isLoading ? "Загрузка..." : "Создание товара"}
      </Button>
      </div>
    </section>
  );
};

export default CreateProduct;


