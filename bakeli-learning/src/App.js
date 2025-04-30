import React, { useState } from "react";
import { MdModeEditOutline } from "react-icons/md";

import { COLORS } from "./components/colors";

function App() {
  const [theme, setTheme] = useState({
    backgroundColor: COLORS.gradientOne.color,
    backgroundImage: COLORS.gradientOne.image,
  });

  const [notes, setNotes] = useState([
    { title: "note 1", date: Date.now() },
    { title: "note 2", date: Date.now() },
  ]);
  const [noteInput, setNoteInput] = useState("");

  const addNote = (e) => {
    e.preventDefault();

    let newNote = { title: noteInput, date: Date.now() };
    setNotes([newNote, ...notes]);
    setNoteInput("");
  };

  return (
    <div style={{ ...theme, height: "100dvh" }}>
      <div className="container py-3">
        {/*============== Header ==============*/}
        <header className="bg-white d-flex justify-content-between align-items-center rounded p-3">
          <h1 className="fs-5 fw-normal">NoteHack</h1>
          <div className="d-flex gap-2">
            <span
              onClick={() => {
                setTheme({
                  backgroundColor: COLORS.gradientOne.color,
                  backgroundImage: COLORS.gradientOne.image,
                });
              }}
              style={{
                display: "inline-block",
                width: 25,
                height: 25,
                borderRadius: "100%",
                backgroundColor: COLORS.gradientOne.color,
                backgroundImage: COLORS.gradientOne.image,
                cursor: "pointer",
              }}
            ></span>
            <span
              onClick={() => {
                setTheme({
                  backgroundColor: COLORS.gradientTwo.color,
                  backgroundImage: COLORS.gradientTwo.image,
                });
              }}
              style={{
                display: "inline-block",
                width: 25,
                height: 25,
                borderRadius: "100%",
                backgroundColor: COLORS.gradientTwo.color,
                backgroundImage: COLORS.gradientTwo.image,
                cursor: "pointer",
              }}
            ></span>
            <span
              onClick={() => {
                setTheme({
                  backgroundColor: COLORS.gradientThree.color,
                  backgroundImage: COLORS.gradientThree.image,
                });
              }}
              style={{
                display: "inline-block",
                width: 25,
                height: 25,
                borderRadius: "100%",
                backgroundColor: COLORS.gradientThree.color,
                backgroundImage: COLORS.gradientThree.image,
                cursor: "pointer",
              }}
            ></span>
            <span
              onClick={() => {
                setTheme({
                  backgroundColor: COLORS.gradientFour.color,
                  backgroundImage: COLORS.gradientFour.image,
                });
              }}
              style={{
                display: "inline-block",
                width: 25,
                height: 25,
                borderRadius: "100%",
                backgroundColor: COLORS.gradientFour.color,
                backgroundImage: COLORS.gradientFour.image,
                cursor: "pointer",
              }}
            ></span>
            <span
              onClick={() => {
                setTheme({
                  backgroundColor: COLORS.gradientFive.color,
                  backgroundImage: COLORS.gradientFive.image,
                });
              }}
              style={{
                display: "inline-block",
                width: 25,
                height: 25,
                borderRadius: "100%",
                backgroundColor: COLORS.gradientFive.color,
                backgroundImage: COLORS.gradientFive.image,
                cursor: "pointer",
              }}
            ></span>
            <span
              onClick={() => {
                setTheme({
                  backgroundColor: COLORS.gradientSix.color,
                  backgroundImage: COLORS.gradientSix.image,
                });
              }}
              style={{
                display: "inline-block",
                width: 25,
                height: 25,
                borderRadius: "100%",
                backgroundColor: COLORS.gradientSix.color,
                backgroundImage: COLORS.gradientSix.image,
                cursor: "pointer",
              }}
            ></span>
          </div>
        </header>

        <div style={{ marginTop: "100px" }}>
          {/*============ Noteform ============*/}
          <form className="py-4 px-3 bg-white rounded">
            <div className="d-flex gap-3">
              <input
                type="text"
                className="form-control"
                placeholder="Add note"
                aria-label="note"
              />
              <button className="btn btn-success px-4">Add</button>
            </div>
          </form>

          {/*========== notesContainer ==========*/}
          <footer
            className="bg-white rounded mt-3 p-3"
            style={{ minHeight: "300px" }}
          >
            {/*============= Header =============*/}
            <div className="d-flex justify-content-between align-items-center border-bottom py-3">
              <div className="d-flex align-items-center gap-2">
                <span className="fw-bold fs-6">Notes</span>
                <span
                  style={{
                    display: "inline-block",
                    width: 25,
                    height: 25,
                    borderRadius: "100%",
                    backgroundColor: "#dfdfdf",
                    textAlign: "center",
                  }}
                >
                  3
                </span>
              </div>
              <button className="btn btn-primary"> Clear All</button>
            </div>
            {/*============ NotesList ============*/}
            <div className="mt-3 d-flex flex-wrap gap-2">
              {notes.map((note, index) => {
                return (
                  <div
                    key={index}
                    className="d-flex p-3 rounded border-5 border-start border-primary"
                    style={{
                      height: 100,
                      minWidth: 300,
                      backgroundColor: "#dfdfdf",
                    }}
                  >
                    <div className="d-flex justify-content-end">
                      <MdModeEditOutline
                        onClick={() => {
                          setNoteInput(note.title);
                        }}
                        style={{
                          cursor: "pointer",
                        }}
                      />
                    </div>
                    <p className="fw-normal m-0">{note.title}</p>
                    <span className="fw-light" style={{ fontSize: 12 }}>
                      10/23/2025 10:30
                    </span>
                  </div>
                );
              })}
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
