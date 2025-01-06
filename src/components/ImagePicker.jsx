export default function ImagePicker({ images, selectedImage, onSelect }) {
  function handleKeyDown(e, image) {
    if (e.key === 'Enter') { onSelect(image.path); }
  }
  return (
    <div id="image-picker">
      <p>Select an image</p>
      <ul>
        {images.map(image => (
          <li
            key={image.path}
            onClick={() => onSelect(image.path)}
            tabIndex={0}
            onKeyDown={e => handleKeyDown(e, image)}
            className={selectedImage === image.path ? 'selected' : undefined}
          >
            <img
              src={`http://localhost:3010/${image.path}`}
              alt={image.caption}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
