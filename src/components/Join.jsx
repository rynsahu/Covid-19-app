import React from "react";

const Join = (props) => {
    // Handle user form
    const onSubmit = (e) => {
        e.preventDefault();

        const name = e.target.username.value;
        props.history.push(`/chat?username=${name}`);
    };

  return (
      <React.Fragment>
          <form onSubmit={(e) => onSubmit(e)}>
              <input type="text" name="username" placeholder="Enter your name"/>
              <button>Submit</button>
          </form>
      </React.Fragment>
  )
};

export default Join;