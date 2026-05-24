type PhotographProps = {
  src?: string;
  alt?: string;
  caption?: string;
  initials?: string;
};

export default function Photograph({
  src,
  alt = '',
  caption,
  initials = 'MM',
}: PhotographProps) {
  return (
    <figure className="photograph">
      <div className="photograph-frame">
        {src ? (
          <img src={src} alt={alt} />
        ) : (
          <div className="photograph-placeholder" aria-hidden="true">
            <span>{initials}</span>
          </div>
        )}
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
