const TextSection = ({ title, description, list, hashId = "", listTitle }) => (
  <div className="space-y-5 scroll-m-20" id={hashId}>
    {title && <h4 className="my-2 font-bold text-xl">{title}</h4>}
    {description && <p className="font-medium text-lg">{description}</p>}
    {listTitle && <h4 className="my-2 font-bold text-xl">{listTitle}</h4>}
    {list && (
      <ul className="pl-5 font-medium text-lg list-disc">
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    )}
  </div>
);

export default TextSection;
