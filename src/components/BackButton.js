import { ArrowLeft } from "phosphor-react";

const BackButton = ({value, onClick, className}) => {
  return (
    <button
    onClick={() => onClick()}
    className={'backButton'}
    ><ArrowLeft size={20} />
       &nbsp; {value}
    </button>
  )
}

export default BackButton