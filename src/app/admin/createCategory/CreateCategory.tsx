'use client'

import{ useState, type FC } from "react"
import Button from "@/ui/button/Button"
import Heading from "@/ui/heading/Heading";
import st from "./CreateCategory.module.scss"

const CreateCategory = () => {
  const [fileSelected, setFileSelected] = useState<File[]>([]);
  const [productName, setProductName] = useState("");
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
          // "http://localhost:4000/api/files/upload"
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
          images: uploadedImages[0],
        };

        const createProductResponse = await fetch(
          `${process.env.SERVER_URL}/categories`,
          // "http://localhost:4000/api/categories",
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
        setFileSelected([]);
        setIsLoading(false); 


      } catch (err) {
        setIsLoading(false); 
        console.log(err);
      }
    }
  };

  return (
    <section className={st.createCategory}>
      <Heading>Создание категории</Heading>
      <div className={st.form}>
      <label htmlFor="productName">Название:</label>
      <input
        id="productName"
        type="text"
        value={productName}
        onChange={(e)=> setProductName(e.target.value)}
        required
      />
      <label htmlFor="photo">
        <input
          accept="image/*"
          name="image"
          id="photo"
          type="file"
          onChange={handleImageChange}
          required
        />
      </label>
      <Button onClick={uploadFile} disabled={isLoading}>
          {isLoading ? "Загрузка..." : "Создание категории"}
      </Button>
      </div>
    </section>
  );
};

export default CreateCategory;


