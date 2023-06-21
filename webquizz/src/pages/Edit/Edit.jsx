import styles from "./Edit.module.css"

import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useUpdateDocument } from "../../hooks/useUpdateDocument"
import { useFetchDocument } from "../../hooks/useFetchDocument"
import { useAuthValue } from "../../context/AuthContext"
//import { useFetchDocuments } from "../../hooks/useFetchDocuments"



 export const Edit = () => {
  const { id } = useParams()
  const { document: post } = useFetchDocument("posts", id)

  console.log(post)

  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [body, setBody] = useState('')
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState('')

 
  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setImage(post.image);
      setBody(post.body);

      const formatTags = post.tags.join(', ' )

      setTags(formatTags)
    }
  }, [post])

  const { user } = useAuthValue()

  const navigate = useNavigate()

  const { updateDocument, response } = useUpdateDocument("posts")

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormError("")

   
    try {
      new URL(image)
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.")
    }

   
    const tagsArray = tags.split(",").map((tag) => tag.trim())

    console.log(tagsArray)

    console.log({
      title,
      image,
      body,
      tags: tagsArray,
    })

    const data = {
      title,
      image,
      body,
      tags: tagsArray,
    }

    console.log(post)

    updateDocument(id, data)

 
    navigate("/")
  }

  return (
    <div className={styles.edit_post}>
      {post && (
        <>
          <h2>Editando post: {post.title}</h2>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Título:</span>
              <input type="text" name="text" placeholder="Título do Post..." onChange={(e) => setTitle(e.target.value)} value={title} required/>
            </label>
            <label>
              <span>URL da imagem:</span>
              <input type="text" name="image" placeholder="Insira uma imagem que representa seu post" onChange={(e) => setImage(e.target.value)} value={image} required />
            </label>
            <p className={styles.preview_title}>Preview:</p>
            <br/><br/>
            <img className={styles.image_preview}src={post.image} alt={post.title}/>
            <label>
              <span>Conteúdo:</span>
              <textarea name="body" placeholder="Insira o conteúdo do post"  onChange={(e) => setBody(e.target.value)} value={body} required ></textarea>
            </label>
            <label>
              <span>Tags:</span>
              <input type="text"  name="tags"  placeholder="Insira as tags separadas por vírgula" onChange={(e) => setTags(e.target.value)}  value={tags} required  />
             </label>
            {!response.loading && <button className="btn">Editar</button>}
            {response.loading && (
              <button className="btn" disabled>
                Aguarde.. .
              </button>
            )}
            {(response.error || formError) && (
              <p className="error">{response.error || formError}</p>
            )}
          </form>
        </>
      )}
    </div>
  )
}

