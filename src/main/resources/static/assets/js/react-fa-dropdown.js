class DropdownGroup extends React.Component {
    render() {
      return (
        <ul className="list-group">
          <Dropdown title="BRAIN">
            P.O. Box 5801 Bethesda, MD 20824
            <br />
            Telephone: <a href="8003529424">+1 (800) 352-9424</a>
            <br />
            Website:{" "}
            <a href="https://www.braininitiative.nih.gov/" target="_blank">
              https://www.braininitiative.nih.gov/
            </a>
          </Dropdown>
          <Dropdown title="Friedreich Ataxia Research Alliance">
            P.O. Box 1537 Springfield, VA 22151
            <br />
            Email: <a href="mailto:fara@curefa.org">fara@curefa.org</a>
            <br />
            Telephone: <a href="tel:7034261576">+1 (703) 426-1576</a>
            <br />
            Fax: +1 (703) 425-0643
            <br />
            Website:{" "}
            <a href="https://www.curefa.org/index.php" target="_blank">
              https://www.curefa.org/index.php
            </a>
          </Dropdown>
          <Dropdown title="Genetic Alliance">
            4301 Connecticut Avenue, N.W. Suite 404 Washington, DC 20008-2369
            <br />
            Email:{" "}
            <a href="mailto:info@geneticalliance.org">
              info@geneticalliance.org
            </a>
            <br />
            Telephone: <a href="tel:2029665557">+1 (202) 966-5557</a>
            <br />
            Fax: +1 (202) 966-8553
            <br /> Website:{" "}
            <a href="https://www.geneticalliance.org/" target="_blank">
              https://www.geneticalliance.org/
            </a>
          </Dropdown>
          <Dropdown title="National Organization for Rare Disorders">
            55 Kenosia Avenue Danbury, CT 06810
            <br />
            Email:{" "}
            <a href="mailto:orphan@rarediseases.org">orphan@rarediseases.org</a>
            <br />
            Telephone: <a href="tel:2037440100">+1 (203) 744-0100</a>
            <br />
            Fax: +1 (203) 798-2291
            <br />
            Website:{" "}
            <a href="https://rarediseases.org/" target="_blank">
              https://rarediseases.org/
            </a>
          </Dropdown>
          <Dropdown title="U.S. National Library of Medicine">
            National Institutes of Health, DHHS 8600 Rockville Pike Bethesda, MD
            20892
            <br />
            Telephone: <a href="tel:8883463656">+1 (888) 346-3656</a>
            <br />
            Website:{" "}
            <a href="https://www.nlm.nih.gov/" target="_blank">
              https://www.nlm.nih.gov/
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
