import { storage } from "../libs/firebase"
import { ref, listAll, getDownloadURL, uploadBytes } from "firebase/storage"
import { v4 as uuidv4 } from 'uuid';

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

export async function insert(file: File) {
    if(["image/jpeg", "image/jpg", "image/png"].includes(file.type)){
      let randomName = uuidv4()
      let newFile = ref(storage, `images/${randomName}`)
      let upload = await uploadBytes(newFile, file)
      let photoUrl = await getDownloadURL(upload.ref)
      return {
        name: upload.ref.name,
        url: photoUrl
      } as PhotoProps
    }else{
      return new Error("Tipo de arquivo não permitido")
    }
}