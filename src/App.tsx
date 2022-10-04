import { FormEvent, useEffect, useState } from "react"
import { PhotoItem } from "./components/PhotoItem"
import * as Photos from "./services/Photo"

export function App() {
  
  const [loading, setLoading] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [photos, setPhotos] = useState<Photos.PhotoProps[]>([])


  async function handleFormSubmit(e: FormEvent<HTMLFormElement>){
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const file = formData.get("image") as File

    if(file && file.size > 0){
      setUploading(true)
      let result = await Photos.insert(file)
      setUploading(false)

      if(result instanceof Error){
        alert(`${result.name} - ${result.message}`)
      }else{
        let newPhotoList = [...photos]
        newPhotoList.push(result)
        setPhotos(newPhotoList)
      }

    }


  }

  useEffect(() => {

    async function getPhotos(){
        setLoading(true)
        setPhotos(await Photos.getAll())
        setLoading(false)
    }
    getPhotos()
  }, [])


  return (
    <div className=" bg-slate-800 text-white min-h-screen">
        <div className="m-auto max-w-[980px] py-8 ">

        <h1 className="text-center mb-8 text-[42px] font-bold">Galeria de Fotos</h1>


        <form 
          className="bg-slate-600 p-4 rounded-xl mb-7"
          method="POST" 
          onSubmit={handleFormSubmit}>
          <input type="file" name="image"  />
          <input 
            className="bg-violet-600 border-none text-white py-2 px-4 text-base rounded-xl mx-5 cursor-pointer hover:bg-violet-500"
            type="submit" 
            value="Enviar" 
            />

            {
              uploading && "Enviando..."
            }


        </form>




        {loading && 

          <div className="text-center">
           <div>Carregando....</div>
          </div>
        
        }

        {!loading && photos.length > 0 &&
          <div className="grid grid-cols-4 gap-[10px]">
            {photos.map((item, index) => (
              <PhotoItem key={index} url={item.url} name={item.name}/>
            ) )}
          </div>
        }

        {!loading  && photos.length === 0 &&

          <div className="text-center">
           <div>Não há fotos cadastradas....</div>
          </div>
        
        }


        </div>
    </div>
  )
}


