import React from 'react';

function AvatarImage() {
  return (
    <div className="d-flex w-100 position-relative" style={{ paddingBottom: '100%' }}>
      <picture className="d-flex position-absolute top-0 bottom-0 w-100">
        <img
          src="https://picsum.photos/seed/pic/200/300"
          alt=""
          className="rounded-circle"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            verticalAlign: 'bottom',
            width: '100%',
            height: '100%',
          }}
        />
      </picture>
    </div>
  );
}

export default AvatarImage;
