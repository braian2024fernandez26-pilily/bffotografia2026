import { Link } from "react-router-dom";

function PostCard(props) {
  const { sord } = props;

  return (
    <article>
      <div key={sord.id}>
        <h1>{sord.name}</h1>
        <img src={sord.img} width={200} className="galeria" />
        <Link to={`/blog/${sord.id}/${sord.name}/`}>
          <p>{sord.title}</p>
        </Link>
      </div>
    </article>
  );
}

export default PostCard;
