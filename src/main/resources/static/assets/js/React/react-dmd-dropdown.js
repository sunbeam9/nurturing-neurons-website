class DropdownGroup extends React.Component {
    render() {
      return (
        <ul className="list-group">
          <Dropdown title="CureDuchenne">
            1400 Quail Street, Suite 110 Newport Beach, CA 92660 USA
            <br />
            Telephone: <a href="tel:9498722552">+1 (949) 872-2552</a>
            <br />
            Email:{" "}
            <a href="mailto:info@cureduchenne.org">info@cureduchenne.org</a>
            <br />
            Website:{" "}
            <a href="http://www.cureduchenne.org" target="_blank">
              http://www.cureduchenne.org
            </a>
          </Dropdown>
          <Dropdown title="Muscular Dystrophy Association">
            161 N. Clark Suite 3550 Chicago, IL 60601 USA
            <br />
            Telephone: <a href="tel:5205292000">+1 (520) 529-2000</a>
            <br />
            Email:{" "}
            <a href="mailto:resourcecenter@mdausa.org">
              resourcecenter@mdausa.org
            </a>
            <br />
            Website:{" "}
            <a href="http://www.mda.org/" target="_blank">
              http://www.mda.org/
            </a>
          </Dropdown>
          <Dropdown title="DuchenneConnect">
            Emory University, Department of Human Genetics 2165 N. Decatur Road
            Atlanta, GA 30033
            <br />
            Telephone: <a href="tel:4047780553">+1 (404) 778-0553</a>
            <br />
            Email:{" "}
            <a href="mailto:coordinator@duchenneconnect.org">
              coordinator@duchenneconnect.org
            </a>
            <br />
            Website:{" "}
            <a href="http://www.duchenneconnect.org" target="_blank">
              http://www.duchenneconnect.org
            </a>
          </Dropdown>
          <Dropdown title="Muscular Dystrophy Campaign">
            61 Southwark Street London, SE1 0HL United Kingdom
            <br />
            Telephone: <a href="tel:2078034800">+1 (207) 803-4800</a>
            <br />
            Email:{" "}
            <a href="mailto:info@musculardystrophyuk.org">
              info@musculardystrophyuk.org
            </a>
            <br />
            Website:{" "}
            <a href="http://www.muscular-dystrophy.org" target="_blank">
              http://www.muscular-dystrophy.org
            </a>
          </Dropdown>
          <Dropdown title="Parent Project Muscular Dystrophy">
            401 Hackensack Avenue, 9th Floor Hackensack, NJ 07601 USA
            <br />
            Telephone: <a href="tel:2019449985">+1 (201) 944-9985</a>
            <br />
            Email:{" "}
            <a href="mailto:info@parentprojectmd.org">
              info@parentprojectmd.org
            </a>
            <br />
            Website:{" "}
            <a href="http://www.parentprojectmd.org" target="_blank">
              http://www.parentprojectmd.org
            </a>
          </Dropdown>
        </ul>
      );
    }
  }

  class Dropdown extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        active: true,
        height: null,
      };

      this.pRef = React.createRef();
    }

    setActive() {
      this.setState({ active: true });
      this.pRef.current.classList.add("list-group-active");
    }

    setInactive() {
      this.setState({ active: false });
      this.pRef.current.classList.remove("list-group-active");
    }

    componentDidMount() {
      this.setState({ height: this.pRef.current.clientHeight + 25 });
      this.setInactive();
    }

    render() {
      return (
        <li
          className="list-group-item"
          style={{
            background: "var(--lightBlue)",
            padding: "0px",
            borderStyle: "solid",
            borderWidth: "0px 0px 0.5px 0px",
          }}
        >
          <span
            className="d-xl-flex list-group-item-text"
            onClick={() =>
              this.state.active ? this.setInactive() : this.setActive()
            }
          >
            <i
              className="fas fa-angle-down list-group-icon"
              style={{
                transform: this.state.active
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
              }}
            ></i>
            {this.props.title}
          </span>
          <p
            ref={this.pRef}
            style={{ maxHeight: this.state.active ? this.state.height : "0px" }}
            className="text list-group-text"
          >
            {this.props.children}
          </p>
        </li>
      );
    }
  }

  ReactDOM.render(<DropdownGroup />, document.getElementById("resources"));
