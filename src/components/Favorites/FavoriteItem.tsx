import React from 'react';

import './FavoriteItem.css';

function FavoriteItem(props: any) {
  return (
    <UICard style={{ marginBottom: '1rem' }}>
      <div className="favorite-item">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </UICard>
  );
}

export { FavoriteItem };
