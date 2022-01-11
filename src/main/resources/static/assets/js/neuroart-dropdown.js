class DropdownGroup extends React.Component {
    render() {
      return (
        <ul className="list-group">
          <Dropdown title="Eligibility and Registration">
            <u>
              <strong>Eligibility:</strong>
            </u>
            <br />
            Students residing and studying in the U.S. in grades 3-12 are
            eligible to enter the NeuroART Contest.
            <br />
            <br />
            <u>
              <strong>Registration:</strong>
            </u>
            <br />
            Online registration can be completed{" "}
            <a href="https://nurturingneurons.org/neuroart-registration">
              here
            </a>
            .<br />
            All entries must be received by 11:59PM PST on March 14th, 2021.
            Students are encouraged to complete and upload their submission well
            in advance.
            <br />
            Only one entry per student is permitted.
            <br />
            Entries must be submitted within one of the two categories:
            <br />
            <ol>
              <li>Elementary School (Grades 3-5)</li>
              <li>Middle School (Grades 6-8)</li>
              <li>High School (Grades 9-12)</li>
            </ol>
          </Dropdown>
          <Dropdown title="Submission Guidelines">
            The theme of the contest is neuroscience and the nervous system. All
            artwork should relate to this theme.
            <br />
            All work must fit within the boundaries of an 8.5" x 11" page.
            <br />
            Submissions may be created using the visual art medium of choice
            (e.g., drawings, paintings, photography), provided the submission
            can be scanned/photographed and uploaded via the submission portal.
            <br />
            Artwork should not contain any personal information about the
            participant. Students should not include their name, age, or grade
            on the artwork. Any work that contains personal information as part
            of the submission is subject to disqualification.
            <br />
            All submissions should be titled and may be accompanied by an
            artistic statement by the student (100 words max) that describes how
            their work relates to neuroscience.
            <br />
            In 50-100 words, students should describe their work and how it
            relates to neuroscience or the nervous system.
          </Dropdown>
          <Dropdown title="Judging and Awards">
            Submissions will be judged based on scientific accuracy and artistic
            creativity by a panel of Nurturing Neurons' volunteers and experts
            in the field. All decisions are final.
            <br />
            The top three winners will be selected in each category. Results
            will be announced via email and published on the Nurturing Neurons
            website.
            <br />
            Winners agree to allow Nurturing Neurons and its affiliates to
            publish their name and artwork in any media, including online.
            <br />
            <br />
            <u>
              <strong>Prizes:</strong>
            </u>
            <br />
            <ol>
              <li>
                <u>
                  <strong>High School Category:</strong>
                </u>
                <ul type="circle">
                  <li>There are currently no prizes for this category.</li>
                </ul>
              </li>
              <li>
                <u>
                  <strong>Middle School Category:</strong>
                </u>
                <ul type="circle">
                  <li>There are currently no prizes for this category.</li>
                </ul>
              </li>
              <li>
                <u>
                  <strong>Elementary School Category:</strong>
                </u>
                <ul type="circle">
                  <li>There are currently no prizes for this category.</li>
                </ul>
              </li>
            </ol>
            Other specific prizes are to be determined and will be announced at
            a later date. Prizes cannot be substituted or redeemed for cash.
            <br />
            All prizes are subject to change without notice.
          </Dropdown>
          <Dropdown title="Entry Fees">
            There is NO registration or entry fee to participate in the NeuroART
            Visual Art Contest. This contest is open and offered at no cost to
            all eligible students. The NeuroART Visual Art Contest is an
            educational and fundraising initiative by the Nurturing Neurons
            Guild to support the Neuromuscular Program at Seattle Children's
            Hospital.
            <br />
            <strong>
              Participants, family, and friends are invited to make a donation
              to Nurturing Neurons{" "}
              <a
                href="https://give.seattlechildrens.org/nurturingneurons"
                target="_blank"
              >
                here
              </a>
              .
            </strong>
            <br />
            Donations have no bearing on participation, judging, or the outcome
            of the contest.
          </Dropdown>
          <Dropdown title="Copyright and Plagiarism">
            All work submitted must be the original work of the student.
            <br />
            By submitting work to the NeuroART contest, students agree that the
            work created was their original work based on their own ideas, and
            was not copied from any other person, business, school, or
            organization.
            <br />
            Any work that infringes intellectual property rights will be
            disqualified.
          </Dropdown>
          <Dropdown title="License and Permissions">
            By participating in the NeuroART contest and submitting an entry,
            participants and their parents or legal guardians grant Nurturing
            Neurons and its affiliates a license to use, copy, change, display,
            reproduce, publish, publicly perform, distribute, exhibit, or add to
            submitted work in any media, including online.
            <br />
            All participants and their parents or legal guardians grant
            Nurturing Neurons and its affiliates the permission to collect and
            publish participant's artwork, name, grade, and other requested
            information in any media including online media.
            <br />
            This license is perpetual, irrevocable, worldwide, royalty-free,
            transferable, and non-exclusive (with the right to sublicense).
            <br />A parent or guardian must review the official rules and sign
            the registration and entry form.
            <br />
            Signature of the student and parent and submission of an entry into
            the NeuroART Virtual Art Contest constitutes acceptance of all
            rules, guidelines, and conditions.
            <br />
            Nurturing Neurons reserves the right to disqualify any submission
            for any reason.
          </Dropdown>
          <Dropdown title="Liability">
            Nurturing Neurons and its affiliates, any sponsors of the program
            and awards, or any of their respective employees, agents or
            representatives shall not have any obligation or liability
            whatsoever related to participation in the NeuroART Visual Arts
            Contest whether the cause is a mistake or is a result of such
            person's or entity's willful or reckless misconduct.
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

  ReactDOM.render(<DropdownGroup />, document.getElementById("list-group"));