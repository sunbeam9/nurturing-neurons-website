class DropdownGroup extends React.Component {
    render() {
      return (
        <ul className="list-group">
          <Dropdown title="Charcot-Marie-Tooth Association">
            PO Box 105 Glenolden, PA 19036
            <br />
            Toll-free: <a href="tel:8006062682">+1 (800) 606-2682</a>
            <br />
            Telephone: <a href="tel:6104999264">+1 (610) 499-9264</a>
            <br />
            Fax: +1 (610) 499-9267
            <br />
            E-mail: <a href="mailto:info@cmtusa.org">info@cmtusa.org</a>
            <br />
            Website:{" "}
            <a href="https://www.cmtausa.org/" target="_blank">
              https://www.cmtausa.org/
            </a>
          </Dropdown>
          <Dropdown title="CMT Research Foundation">
            4062 Peachtree Road Suite A209 Atlanta, GA 30319
            <br />
            Telephone: <a href="tel:4048067180">+1 (404) 806-7180</a>
            <br />
            E-mail: <a href="mailto:info@cmtrf.org">info@cmtrf.org</a>
            <br />
            Website:{" "}
            <a href="https://cmtrf.org/" target="_blank">
              https://cmtrf.org/
            </a>
          </Dropdown>
          <Dropdown title="Hereditary Neuropath Foundation Inc.">
            401 Park Avenue, 10th Floor New York, NY 10016
            <br />
            Toll-free: <a href="tel:8554357268">+1 (855) 435-7268</a>
            <br />
            Telephone: <a href="tel:2127228396">+1 (212) 722-8396</a>
            <br />
            Fax: +1 (917) 591-2758
            <br />
            E-mail: <a href="mailto:info@hnf-cure.org">info@hnf-cure.org</a>
            <br />
            Website:{" "}
            <a href="https://www.hnf-cure.org/" target="_blank">
              https://www.hnf-cure.org/
            </a>
          </Dropdown>
          <Dropdown title="Muscular Dystrophy Association (MDA)">
            222 S Riverside Plaza Suite 1500 Chicago, IL 6060
            <br />
            Toll-free: <a href="tel:8332756321">+1 (833) 275-6321</a> (Helpline)
            <br />
            E-mail:{" "}
            <a href="mailto:resourcecenter@mdausa.org">
              resourcecenter@mdausa.org
            </a>
            <br />
            Website:{" "}
            <a href="https://www.mda.org" target="_blank">
              https://www.mda.org
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