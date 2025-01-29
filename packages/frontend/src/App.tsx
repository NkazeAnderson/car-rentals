import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState<File | undefined>(undefined);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const formRef = useRef<undefined | HTMLFormElement | null>();

  return (
    <>
      <form
        ref={(ref) => {
          formRef.current = ref;
        }}
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData();
          formData.append("name", name);
          formData.append("description", description);
          count && formData.append("image", count);

          const response = fetch("http://localhost:3000/category", {
            method: "POST",
            body: formData,
          });
        }}
      >
        <input
          type="text"
          name="name"
          onChange={(e) => {
            setName(e.currentTarget.value);
          }}
        />
        <input
          type="text"
          name="description"
          onChange={(e) => {
            setDescription(e.currentTarget.value);
          }}
        />
        <input
          type="file"
          name="image"
          onChange={(e) => {
            e.currentTarget.files?.length && setCount(e.currentTarget.files[0]);
          }}
        />
        <input type="submit" value="Send" />
      </form>
    </>
  );
}

export default App;
