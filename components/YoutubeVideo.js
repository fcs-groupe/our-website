import styles from "@/styles/components/DescribedItem.module.scss";
function YoutubeVideo(props) {
  return (
    <div className={styles.container}>
      <iframe
        width="100%"
        height="450"
        src="https://www.youtube.com/embed/fsTmYaqEqQM?si=U7ZiOS-5PhczctRM"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default YoutubeVideo;
