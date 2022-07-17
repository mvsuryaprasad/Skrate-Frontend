import "./navbar.css";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="logo">
        <div className="logo-on">
          <i class="far fa-comment"></i>
        </div>
        <div>
          <i class="fa fa-hand-stop-o"></i>
        </div>
        <div>
          <i class="fa fa-telegram"></i>
        </div>
        <div></div>
      </div>
      <div className="main-nav">
        <center>
          <h2>Skrate Calibre Frontend Feature Building</h2>
        </center>
      </div>
    </div>
  );
}
