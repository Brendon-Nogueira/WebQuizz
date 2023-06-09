import { Link } from "react-router-dom"
import { PostDetail } from "../../components/Post/PostDetail"
import { useFetchDocuments } from "../../hooks/useFetchDocuments"

import styles from '../Search/Search.module.css'
import { useParams } from "../../hooks/UseParams"

export const Search = () => {
    const query = useParams()
    const search = query.get("q")
  
    const { documents: posts } = useFetchDocuments("posts", search)
  
    return (
      <div className={styles.search_content}>
        <h1>Resultados encontrados para: {search}</h1>
        <div className="post-list">
          {posts && posts.length === 0 && (
            <>
              <p>Não foram encontrados posts a partir da sua busca...</p>
              <Link to="/" className="btn btn-dark">
                Voltar
              </Link>
            </>
          )}
          {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
        </div>
      </div>
    )
  }

