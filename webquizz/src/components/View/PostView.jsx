import styles from '../View/PostView.module.css'
import { useFetchDocument } from "../../hooks/useFetchDocument"
import { useParams } from "react-router-dom"
export const PostView = () => {

const { id } = useParams();
const { document: post } = useFetchDocument("posts", id);

  return (
    <div className={styles.post_view}>
      {post && (
        <>
          <h1>{post.title}</h1>
          <img src={post.image} alt={post.title} />
          <p>{post.body}</p>
          <h3>Este post trata sobre:</h3>
          <div className={styles.tags}>
            {post.tags.map((tag) => (
              <p key={tag}>
                <span>#</span>
                {tag}
              </p>
            ))}
          </div>
        </>
      )}
    </div>
  )
}