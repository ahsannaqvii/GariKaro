import React , {useContext} from 'react'
import classes from './Modal.module.css';
import ReactDOM from "react-dom";

const BackDrop = (props) => {
    //for portal
    // {
    //   /* onclick ka function ka matlab jab backdrop ya button pai
    //       click huga tou onCOnfirm ka function chaljaega */
    // }
    // onClick={props.onClick} 
    return <div className={classes.backdrop}/>;
};
const ModalOverlay=props=>{
    return(
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
};
const portalElement=document.getElementById("overlays")

function Modal2(props) {  

  // const contextData = useContext(AuthContext);

    return (
        <div>
          {/* onClick={contextData.cartHidden} */}
        {ReactDOM.createPortal(
          <BackDrop />,
          portalElement,
        
        )}
        {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
      </div>
    )
}

export default Modal2
