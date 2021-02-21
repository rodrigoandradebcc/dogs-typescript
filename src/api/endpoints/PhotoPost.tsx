import React, { ImgHTMLAttributes, useState } from 'react'

const PhotoPost: React.FC = () => {
  const [token, setToken] = useState('');
  
  const [nome, setNome] = useState('');
  const [peso, setPeso] = useState('');
  const [idade, setIdade] = useState('');
  const [img, setImg] = useState<File>();


  function handleSubmit(event: React.FormEvent){
    event.preventDefault();

    const formData = new FormData();


    formData.append('img',img as File);
    formData.append('nome',nome);
    formData.append('peso',peso);
    formData.append('idade',idade);
    
    console.log(formData.get('img'));




    fetch('https://dogsapi.origamid.dev/json/api/photo',{
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: formData,
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  }

  const handleImageChange = function(event: React.ChangeEvent<HTMLInputElement>){
    const imageList = event.target.files;

    if(!imageList) return;

    setImg(imageList[0])
  }
  
  return (
    <form onSubmit={handleSubmit}>
      
      <input 
        type="text"
        placeholder="token"
        value={token}
        onChange={({target}) => setToken(target.value)}/>

      <input 
        type="text"
        placeholder="nome"
        value={nome}
        onChange={({target}) => setNome(target.value)}/>

      <input 
        type="text"
        placeholder="peso"
        value={peso}
        onChange={({target}) => setPeso(target.value)}/>

      <input 
        type="text"
        placeholder="idade"
        value={idade}
        onChange={({target}) => setIdade(target.value)}/>

      <input 
        type="file"

        onChange={(event) =>{
          handleImageChange(event);
          // console.log(event.target.)
        }}
        />
        
        <button>Enviar</button>
    </form>
  )
}

export default PhotoPost;