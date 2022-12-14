import * as React from "react";

function reducer(state, action) {
  switch (action.type) {
    case "changeName":
      return { ...state, name: action.value };
    case "changeAge":
      return { ...state, age: action.value };
    default:
      throw new Error(`${action.type} is not a valid action`);
  }
}

function App() {
  const [{ name, age }, dispatch] = React.useReducer(reducer, {
    name: "",
    age: ""
  });

  return (
    <>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) =>
          dispatch({ type: "changeName", value: e.target.value })
        }
      />
      <p>Name: {name}</p>

      <input
        placeholder="Age"
        type="number"
        value={age}
        onChange={(e) => dispatch({ type: "changeAge", value: e.target.value })}
      />
      <p>Age: {age}</p>
      <p>A direct edit from GitHub</p>
      <p>A edit from CodeSandbox</p>
      <p>Another direct edit from GitHub</p>
      <p>Another edit from CodeSandbox</p>
      <hr />
      <p>
        Okay, I think I have the process down to open sandbox and then link to
        GitHub
      </p>
      <ul>
        <li>
          From https://github.com/eyewhysee/ch04-using-reducer-actions: Hit Open
          Sandbox button
        </li>
        <li>
          From CodeSandbox... it shows GitHub status: This sandbox is in sync
          with main on GitHub. You have to fork to make changes --> Fork
        </li>
        <li>
          From CodeSandbox with GitHub logo in left column: Click GitHub logo
          --> Link to GitHub repository: If you wish to contribute back to
          eyewhysee/ch04-using-reducer-actions, you can link this sandbox to the
          GitHub repository. This will allow you to create commits and open pull
          requests with this sandbox. --> Link Sandbox
        </li>
        <li>Make a change, save it, and then commit it back</li>
        <li>Let's make a pull request</li>
        <li>Make edits from a fork</li>
        <li>Make another edit from fork</li>
        <li>Third edit from the draft/lingering-dust fork</li>
        <li>Fourth edit from the draft/lingering-dust fork</li>
        <li>Fifth edit from draft/lingering-dust branch: after manual pull request and then reload in CodeSandbox</li>
        <li>6th edit from draft/lingering-dust branch: Fifth edit had CodeSandbox auto link to PR</li>
        <li>7th edit from draft/lingering-dust branch</li>
        <li>8th edit from draft/lingering-dust branch</li>
        <li>9th edit from draft/lingering-dust branch</li>
        <li>10th edit from draft/lingering-dust branch: I believe the process is to commit and push the change in left column, and then Create PR button in top right</li>
        <li>11th edit from draft/lingering-dust branch: let's try the proces again</li>
        <li>12th edit from draft/lingering-dust branch: sync and refresh page as need to get Open Pull Request buttons</li>
        <li>13th edit from draft/lingering-dust branch: sync and refresh page as need to get Open Pull Request buttons</li>
        <li>1st of 3 edits to form a pull request from draft/lingering-dust branch</li>
        <li>2nd of 3 edits to form a pull request from draft/lingering-dust branch</li>
        <li>3rd of 3 edits to form a pull request from draft/lingering-dust branch</li>
      </ul>
      <hr />
    </>
  );
}

export default App;
