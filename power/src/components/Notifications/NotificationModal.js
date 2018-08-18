import React from 'react';

const NotificationModal = props => {
  if (props.currentStationId === 0) {
    return (<div></div>)
  }
    return (
      <div className={props.modalShow}>
        <div className="modal-navigation-bs">
          <div className="x">
            <p className="dmx" onClick={props.modalToggle}>&times;</p>
          </div>
        </div>
        <p>{props.stationcache[props.currentStationId].name}</p>
      </div>
    )

}

export default NotificationModal;
