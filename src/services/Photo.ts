import { storage } from "../libs/firebase"
import { ref, listAll, getDownloadURL } from "firebase/storage"

export interface PhotoProps{
  name: string
  url: string
}

export async function getAll(){
  let list: PhotoProps[] = []

  const imagesFolder = ref(storage, "images")
  const photoList = await listAll(imagesFolder)
  
  for(let i in photoList.items){
    let photoUlr = await getDownloadURL(photoList.items[i])

    list.push({
      name: photoList.items[i].name,
      url: photoUlr
    })
  }

  return list
}