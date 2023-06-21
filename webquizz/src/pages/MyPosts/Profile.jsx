
import styles from '../MyPosts/Profile.module.css'
import  { Link } from 'react-router-dom'

import { useAuthValue } from '../../context/AuthContext'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useDeleteDocument } from '../../hooks/UseDeleteDocument'

export const Profile = () => {
    const { user } =  useAuthValue()
    const uid = user.uid

    const { documents : posts, loading } = useFetchDocuments("posts", null, uid)
    const { deleteDocument } = useDeleteDocument("posts")

  return (
    <div className={styles.profile}>
        <h2>Meus Posts </h2>
        <p>Gerencie suas postagens:</p>
        {posts && posts.length === 0 ? (
            <div className={styles.no_content}>
                <p>Não foi encontrado nenhum post!</p>
                <Link to="posts/create" className="btn">Criar post</Link>
            </div>
        ) : (
            <div className={styles.post_header}>
                <span>Título</span>
            </div>
        ) }

        {posts && posts.map((post) => (
          <div className={styles.post_row} key={post.id}>
            <p>{post.title}</p>
            <div className={styles.actions}>
              <Link to={`/posts/${post.id}`} className="btn btn-outline">
                Ver
              </Link>
              <Link to={`/posts/edit/${post.id}`} className="btn btn-outline">
                Editar
              </Link>
              <button
                onClick={() => deleteDocument(post.id)}
                className="btn btn-outline btn-danger"
              >
                Excluir
              </button>
            </div>
          </div>
        ))}
    </div>
  )
}

