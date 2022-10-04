import { PhotoProps } from "../services/Photo";



export function PhotoItem( {url, name}: PhotoProps){

  return (
    <div className=" bg-slate-600 rounded-xl p-[10px] ">
        <img className="max-w-full block mb-3 rounded-[10px]" src={url} />
        {name}
    </div>
  )

}