const { useState } = React; // Importer les hooks de React
const { ReactDom } = React; // Importer les hooks de React
// const { name } = "/window.colors.js";

// const { name } = "./window.colors.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: { backgroundImage: window.COLORS?.gradientTwo?.image },
    };
  }

  render() {
    return (
      <>
        <div
          style={{
            ...this.state.theme,
            height: "100dvh",
          }}
        >
          <div className="container py-3">
            {/*---------------- Header ----------------*/}
            <header className="bg-white d-flex justify-content-between align-items-center rounded p-3">
              <h1 className="fs-5 fw-normal">NoteHack</h1>
              <div className="d-flex gap-2">
                <span
                  onClick={() => {
                    theme: {
                      backgroundImage: window.COLORS?.gradientOne?.image;
                    }
                  }}
                  style={{
                    cursor: "pointer",
                    display: "inline-block",
                    width: 25,
                    height: 25,
                    borderRadius: "100%",
                    backgroundColor: window.COLORS.gradientOne.image,
                    backgroundImage: window.COLORS.gradientOne.image,
                  }}
                ></span>
                <span
                  onClick={() => {
                    theme: {
                      backgroundImage: window.COLORS?.gradientTwo?.image;
                    }
                  }}
                  style={{
                    cursor: "pointer",
                    display: "inline-block",
                    width: 25,
                    height: 25,
                    borderRadius: "100%",
                    backgroundColor: window.COLORS.gradientTwo.image,
                    backgroundImage: window.COLORS.gradientTwo.image,
                  }}
                ></span>
                <span
                  onClick={() => {
                    theme: {
                      backgroundImage: window.COLORS?.gradientThree?.image;
                    }
                  }}
                  style={{
                    cursor: "pointer",
                    display: "inline-block",
                    width: 25,
                    height: 25,
                    borderRadius: "100%",
                    backgroundColor: window.COLORS.gradientThree.image,
                    backgroundImage: window.COLORS.gradientThree.image,
                  }}
                ></span>
                <span
                  onClick={() => {
                    theme: {
                      backgroundImage: window.COLORS?.gradientFour?.image;
                    }
                  }}
                  style={{
                    cursor: "pointer",
                    display: "inline-block",
                    width: 25,
                    height: 25,
                    borderRadius: "100%",
                    backgroundColor: window.COLORS.gradientFour.image,
                    backgroundImage: window.COLORS.gradientFour.image,
                  }}
                ></span>
                <span
                  onClick={() => {
                    theme: {
                      backgroundImage: window.COLORS?.gradientFive?.image;
                    }
                    console.log("clicked ");
                  }}
                  style={{
                    cursor: "pointer",
                    display: "inline-block",
                    width: 25,
                    height: 25,
                    borderRadius: "100%",
                    backgroundColor: window.COLORS.gradientFive.image,
                    backgroundImage: window.COLORS.gradientFive.image,
                  }}
                ></span>
                <span
                  onClick={() => {
                    theme: {
                      backgroundImage: window.COLORS?.gradientsix?.image;
                    }
                  }}
                  style={{
                    cursor: "pointer",
                    display: "inline-block",
                    width: 25,
                    height: 25,
                    borderRadius: "100%",
                    backgroundColor: window.COLORS.gradientSix.image,
                    backgroundImage: window.COLORS.gradientSix.image,
                  }}
                ></span>
              </div>
            </header>

            <div style={{ marginTop: "100px" }}>
              {/*------------- NoteForm -------------*/}
              <form className="py-4 px-3 bg-white rounded">
                <div className="d-flex gap-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Add note"
                    aria-label="note"
                  />
                  <button className="btn btn-success px-4" type="submit">
                    Add
                  </button>
                </div>
              </form>

              {/*----------- NoteContainer -----------*/}
              <footer
                className="bg-white rounded mt-3 p-3"
                style={{ minHeight: "300px" }}
              >
                <div className="d-flex gap-3 justify-content-between align-items-center border-bottom py-3">
                  <div className="d-flex align-items-center gap-2">
                    <span className="fw-bold fs-5">Notes</span>
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
                  <button className="btn btn-primary">clear All</button>
                </div>

                {/*=================== Noteslist ===================*/}
                <div className="mt-3 d-flex flex-wrap gap-2">
                  <div
                    className="d-flex p-3 rounded border-5 border-start border-primary"
                    style={{
                      height: 100,
                      minWidth: 300,
                      backgroundColor: "#dfdfdf",
                    }}
                  >
                    <div>
                      <p className="fw-normal m-0">Note title</p>
                      <span className="fw-light" style={{ fontSize: 12 }}>
                        10/23/2024 10:29
                      </span>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </>
    );
  }
}

// Affichage du composant dans un élément HTML avec l'id "root"
ReactDOM.render(<App />, document.getElementById("root"));
