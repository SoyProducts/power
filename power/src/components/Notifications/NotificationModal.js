import React from 'react';

const NotificationModal = props => {
  if (props.currentStationId === 0) {
    return (<div></div>)
  }
    return (
      <div className={props.modalShow}>
      {props.stationcache[props.currentStationId].name}
      </div>
    )
}

export default NotificationModal;
