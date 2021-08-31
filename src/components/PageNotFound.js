import './styles/PageNotFound.css';


const PageNotFound = (props) => {
    const { lottieClick, pageNotFound } = props;
    return (
        <div className='page-not-found'
            onClick={lottieClick}
            style={pageNotFound === true ? { display: 'block' } : { display: 'none' }}
        >
        </div>
    )
};

export default PageNotFound;