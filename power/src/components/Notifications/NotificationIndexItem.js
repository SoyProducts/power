import React from 'react';

const NotificationIndexItem = props => (
  <div className="notification-index-item">
    <p>{props.notification.created_at}</p>
    <p>{props.notification.song_title}</p>
    <p>{props.notification.channel_name}</p>
  </div>
);

export default NotificationIndexItem;
