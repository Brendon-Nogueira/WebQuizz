import styles from './Edit.module.css'

import { useEffect, useState } from 'react'
import { useInsertDocument } from '../../hooks/useInsertDocuments'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuthValue } from '../../context/AuthContext'
//import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useFetchDocument } from '../../hooks/useFetchDocument'


 export const Edit = () => {

  const { id } = useParams()
  const { document: post} = useFetchDocument('posts', id)
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [body, setBody] = useState('')
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState('')

  useEffect(()=> {
    if(post){
      setTitle(post.title)
      setImage(post.image)
      setBody(post.body)

      const formatTags = post.tags.join(',')
      setTags(formatTags)
    }
  }, [post])

  const { user } = useAuthValue()

  const navigate = useNavigate()

  const { insertDocument, response } = useInsertDocument('posts')

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormError('')

    
    try {
      new URL(image)
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.")
    }

   
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase())

    
    if (!title || !image || !tags || !body) {
      setFormError("Por favor, preencha todos os campos!")
    }

    console.log(tagsArray)

    console.log({
      title,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });

    if(formError) return

    insertDocument({
      title,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    })

  
    navigate("/")
  }

  return (
    <div className={styles.edit_posts}>
      <h2>Editar: {post.title}</h2>
    
      <form onSubmit={handleSubmit}>

        <label>
          <span>Título:</span>
          <input type="text"  name="text"  placeholder="Título do Post..." onChange={(e) => setTitle(e.target.value)} value={title} required/>
        </label>

        <label>
          <span>URL da imagem:</span>
          <input type="text" name="image"  placeholder="Url da imagem que deseja compartilhar" onChange={(e) => setImage(e.target.value)}  value={image}  required/>
        </label>

        <label>
          <span>Conteúdo:</span>
          <textarea name="body" placeholder="Insira o conteúdo do post"  onChange={(e) => setBody(e.target.value)} value={body}  required ></textarea>
        </label>

        <label>
          <span>Tags:</span>
          <input type="text" name="tags"  placeholder="Insira as tags separadas por vírgula"  onChange={(e) => setTags(e.target.value)}  value={tags}  required />
        </label>
        {!response.loading && <button className="btn">Finalizar</button>}
        {response.loading && (
          <button className="btn" disabled>
            Editando.. .
          </button>
        )}
        {(response.error || formError) && (
          <p className="error">{response.error || formError}</p>
        )}
      </form>
    </div>
  )
}

