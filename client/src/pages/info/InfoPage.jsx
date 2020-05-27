import React, { useState, useEffect } from "react";
import { infoContent } from "./InfoContent";
import { Link } from "react-router-dom";
import "./InfoPage.scss";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  const display = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(body);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  }

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const onChangeBody = (e) => {
    setBody(e.target.value);
  }

  return (
    <form className="contact">
      <input
        placeholder="Name"
        className="contact__input"
        onChange={onChangeName}
        value={name}
        type="text"
        id="name"
        name="name">
      </input>
      <input
        placeholder="Email"
        className="contact__input"
        onChange={onChangeEmail}
        value={email}
        type="text"
        id="email"
        name="email">
      </input>
      <textarea
        placeholder="Message"
        className="contact__body"
        onChange={onChangeBody}
        value={body}
        id="text"
        name="text">
      </textarea>
      <button
        className="contact__submit"
        onClick={display}
        disabled={body === ""}>
        Submit
      </button>
    </form>
  );
};

const Arrow = ({ down }) => {
  return <span className={"arrow" + (down ? " -down" : "")}>^</span>;
};

const Section = ({ id, title, body, loc }) => {
  const [expanded, setExpanded] = useState(loc === id);

  const toggleExpand = () => {
    setExpanded((p) => !p);
  };

  return (
    <div>
      <h3 id={id} className="section__header" onClick={toggleExpand}>
        <Arrow down={expanded} />
        {title}
      </h3>
      <div className={"section__body" + (expanded ? " -expanded" : "")}>
        {id === "contact" ? <Contact /> : body}
      </div>
    </div>
  );
};

export default function InfoPage() {
  const locArr = window.location.href.split("#");
  let loc = "";
  if (locArr.length > 1) {
    loc = locArr[1];
  } else {
    window.scrollTo(0, 0);
  }

  return (
    <div className="info">
      <div className="info__content">
        {infoContent.map((i) => (
          <Section loc={loc} id={i.id} title={i.title} body={i.body} />
        ))}
      </div>
      <Link className="info__back" to="/">
        {"<BACK"}
      </Link>
    </div>
  );
}
