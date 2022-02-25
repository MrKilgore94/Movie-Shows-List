import "./App.css";

import { useState } from "react";

const TitleList = (props) => {
  const [titles, setTitles] = useState(props.initialTitles || []);
  const [title, setTitle] = useState("");
  // const [isEditing, setIsEditing] = useState(false);

  const renderTitles = () => {
    return titles.map((x) => {
      return (
        <div
          key={x.id}
          style={{ borderRadius: '15px',
          width: '100px',
          margin: '10px',
            backgroundColor: "white",
            cursor: "crosshair",
            textDecoration: x.watched ? "line-through" : "",
           
          }}
        >
          <p onClick={() => toggleTitle(x.id)}>{x.title}</p>
          <button id="deleteButton" onClick={() => deleteTitle(x.id)}>
            delete
          </button>
        </div>
      );
    });
  };
  const toggleTitle = (idOfTitleClicked) => {
    const updatesTitles = titles.map((title) => {
      if (title.id === idOfTitleClicked) {
        return { ...title, watched: !title.watched };
      }
      return title;
    });
    setTitles(updatesTitles);
  };

  const deleteTitle = (id) => {
    let filterTitles = titles.filter((x) => {
      return x.id !== id;
    });
    setTitles(filterTitles);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newTitles = [
      ...titles,
      { id: Math.random(), title: title, watched: false },
    ];
    setTitles(newTitles);
    setTitle("");
  };

  return (
    <div>
      <h1>{props.name}</h1>
      <form onSubmit={handleSubmit}>
        <input
          id="textField"
          placeholder="Enter movie..."
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button id="addButton" type="submit">
          add
        </button>
      </form>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10px",
        margin: '10px',
       
      }}>{renderTitles()}</div>
    </div>
  );
};

export default TitleList;


