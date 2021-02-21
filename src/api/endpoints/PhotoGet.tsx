import React, { useState } from 'react'

const PhotoGet: React.FC<{}> = () => {
  const [id, setId] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    fetch(`https://dogsapi.origamid.dev/json/api/photo/${id}`).then(response => {
      console.log(response);
      return response.json();
    }).then(json => {
      console.log(json);
      return json;
    })
  }

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <input type="text" value={id} onChange={({target}) => setId(target.value)}/>
      <button>Enviar</button>
    </form>
  )
}

export default PhotoGet;