import { ProgressBar } from 'react-loader-spinner'


const Loader = () => {
    return (
<ProgressBar
  height="80"
  width="80"
  ariaLabel="progress-bar-loading"
  wrapperStyle={{}}
  wrapperClass="progress-bar-wrapper"
  borderColor = '#CBDED3'
  barColor = '#9FBAAE'
/>
    );
};

export default Loader;