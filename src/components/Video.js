import './styles/Video.css';

const Video = (props) => {
    const { showVideo, closeVideo, linkVideo } = props;

    return (

        <div className='video'
            style={showVideo === true ? { display: 'flex' } : { display: 'none' }}
            onClick={closeVideo}
        >
            <iframe
                width="80%"
                height="80%"
                src={linkVideo}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
};

export default Video;