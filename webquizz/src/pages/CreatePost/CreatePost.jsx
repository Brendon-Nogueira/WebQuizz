import styles from './CreatePost.module.css'

import { useState } from 'react'
import { useInsertDocument } from '../../hooks/useInsertDocuments'
import { useNavigate } from 'react-router-dom'
import { useAuthValue } from '../../context/AuthContext';

 export const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const { user } = useAuthValue();

  const navigate = useNavigate();

  const { insertDocument, response } = useInsertDocument("posts");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    // validação
    try {
      new URL(image);
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.");
    }

    // cria as tags 
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

    // verifica os valores
    if (!title || !image || !tags || !body) {
      setFormError("Por favor, preencha todos os campos!");
    }

    console.log(tagsArray);

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
    });

    // redirecionar
    navigate("/");
  };

  return (
    <div className={styles.posts}>
      <h2>Criar post</h2>
      <p>Escreva sobre seus interesses, compartilhe conhecimentos.</p>

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
        {!response.loading && <button className="btn">Criar post!</button>}
        {response.loading && (
          <button className="btn" disabled>
            Postando.. .
          </button>
        )}
        {(response.error || formError) && (
          <p className="error">{response.error || formError}</p>
        )}
      </form>
    </div>
  );
};

