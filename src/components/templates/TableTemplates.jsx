export function TagPill({ value }) {
  return (
    <span className="flex w-auto flex-wrap">
      {value.slice(0, 2).map((skill) => (
        <span
          key={skill}
          className="w-auto px-2 py-1 m-1 uppercase leading-wide font-semibold text-xs rounded-md  bg-primary text-white"
        >
          {skill}
        </span>
      ))}
      {value.length > 2 ? (
        <span
          key={value}
          className="w-auto px-2 py-1 m-1 uppercase leading-wide font-semibold text-xs rounded-md  bg-primary text-white"
        >
          + {value.length - 2}
        </span>
      ) : (
        ""
      )}
    </span>
  );
}

export function FullName({ value }) {
  return <p className="font-semibold">{value}</p>;
}
export function dontShow({ value }) {
  return <div className="hidden">{value}</div>;
}
