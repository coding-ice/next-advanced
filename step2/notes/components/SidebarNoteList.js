import dayjs from "dayjs";

export default ({ notes }) => {
  const pair = Object.entries(notes);
  if (!pair.length) {
    return <div className="notes-empty">{"No notes created yet!"}</div>;
  }

  return (
    <ul>
      {pair.map(([key, n]) => {
        const { title, updateTime } = JSON.parse(n);

        return (
          <li key={key}>
            <header className="sidebar-note-header">
              <strong>{title}</strong>
              <small>{dayjs(updateTime).format("YYYY-MM-DD HH:mm:ss")}</small>
            </header>
          </li>
        );
      })}
    </ul>
  );
};
