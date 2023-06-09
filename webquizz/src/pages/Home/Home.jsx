// CSS
import styles from './Home.module.css'

// hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments"
import { useNavigate, Link } from "react-router-dom"
import { useState } from "react"

// components
import { PostDetail } from '../../components/Post/PostDetail'

 export const Home = () => {
  const { documents: posts, loading } = useFetchDocuments("posts")

  const navigate = useNavigate()

  const [qry, setQry] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    if (qry) {
      return navigate(`/search?q=${qry}`)
    }
  };

  console.log(loading)

  return (
    <div className={styles.home}>
      <h1>TESTE SEUS CONHECIMENTOS E COMPARTILHE!</h1>
      <form className={styles.search} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder=""
          onChange={(e) => setQry(e.target.value)}
        />
        <button className="btn btn-dark">Pesquisar</button>
      </form>
      <div className="post-list">
        {loading && <p>Carregando...</p>}
        {posts && posts.length === 0 && (
          <div className={styles.no_content}>
            <p>Não foi encontrada nenhuma publicação</p>
            <Link to="/posts/create" className="btn">
              Criar uma publicação
            </Link>
          </div>
        )}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
      </div>
    </div>
  )
}



 