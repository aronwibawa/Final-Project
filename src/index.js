import "./styles.css";

if (document.getElementById("carouselControls")) {
  document.getElementById("carouselControls").innerHTML = `
      
      <div class="carousel-inner">
          <div class="carousel-item active">
            <img id="carousel-image" src="https://i.pinimg.com/originals/e8/c7/c4/e8c7c4d4e14a9e3b21faf3d7b37c5b03.jpg" class="d-block w-100">
          </div>
          <div class="carousel-item">
            <img id="carousel-image" src="https://www.goldentour.vn/uploads/HALONGBAY/halongbay.jpeg" class="d-block w-100">
          </div>
          <div class="carousel-item">
            <img id="carousel-image" src="https://i.ytimg.com/vi/j29YL8QETws/maxresdefault.jpg" class="d-block w-100" >
          </div>
          <div class="carousel-item">
            <img id="carousel-image" src="https://i.ytimg.com/vi/MRPe2ixch7g/maxresdefault.jpg" class="d-block w-100" >
          </div>
          <div class="carousel-item">
            <img id="carousel-image" src="http://travelhdwallpapers.com/wp-content/uploads/2014/04/Maligne-Lake-3.jpg?w=640" class="d-block w-100" >
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
`;
}

document.getElementById("navbar-head").innerHTML = `
<a class="navbar-brand" href="/">My Blog</a>
<ul class="nav">
  <li class="nav-item">
  <div class="dropdown">
    <button
      class="btn btn-primary dropdown-toggle"
      type="button"
      id="dropdownMenuButton"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      Home
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a class="nav-link" href="/#header">Header</a>
      <a class="nav-link" href="/#boutMe">About Me</a>
      <a class="nav-link" href="/#contactMe">Contact Me</a>
    </div>
  </div>
  </li>
  <li class="nav-item">
  <a class="nav-link" href="gallery.html">My Galery</a>
  </li>
  <li class="nav-item">
  <a class="nav-link" href="animation.html">Miscellaneous</a>
  </li>
</ul>
  
  
`;
