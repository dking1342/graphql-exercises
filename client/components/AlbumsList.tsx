import Link from "next/link";
import styles from "../styles/Home.module.css";

interface AlbumListProps {
  id: number;
  userId: number;
  title: string;
}

const AlbumsList = ({
  data,
  list,
}: {
  data: AlbumListProps[];
  list: boolean;
}) => {
  return (
    <section className={styles.grid}>
      {data.map((album) => (
        <div className={styles.card} key={album.id}>
          <div>
            <p className={styles.description}>{album.title}</p>
            <sub>User: {album.userId}</sub>
          </div>
          <div>
            {list ? (
              <Link href={`/albums/${album.id}`}>See More</Link>
            ) : (
              <Link href={`/albums/`}>Go Back</Link>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default AlbumsList;
