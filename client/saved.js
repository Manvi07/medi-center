<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">
    MediCenter
  </a>
  <ul className="navbar-nav ml-auto">
    <Link to="/doctors">
      <li className="nav-item active">
        <a className="nav-link" href="#">
          Available Doctors <span className="sr-only">(current)</span>
        </a>
      </li>
    </Link>
    <Link to="/appointment-form">
      <li class="nav-item">
        <a class="nav-link" href="#">
          Appointment Form
        </a>
      </li>
    </Link>
    <Link to="/history">
      <li class="nav-item">
        <a class="nav-link" href="#">
          History
        </a>
      </li>
    </Link>

    <li>
      <button type="button" class="btn btn-dark">
        Sign up
      </button>
    </li>
  </ul>
</nav>;
