import { useEffect, useState } from "react"
import * as Photos from "./services/Photo"

export function App() {
  
  const [loading, setLoading] = useState(false)
  const [photos, setPhotos] = useState<Photos.PhotoProps[]>([])


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

        {loading && 

          <div className="text-center">
           <div>Carregando....</div>
          </div>
        
        }

        {!loading && photos.length > 0 &&
          <div>
            {photos.map((item, index) => (
              <div className="grid grid-cols-4 gap-3">
                {item.name}
              </div>
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


