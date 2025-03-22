import classes from "./Home.module.css";

import setuLogo from "../assets/profile-image1.jpeg";

const Home = () => {
  return (
    <>
      <div className={classes["wrapper"]}>
        <div className={classes["container"]}>
          <img src={setuLogo}></img>
          <div className={classes["main-body"]}>
            <div className={classes["input-section"]}>
              <div className={classes["heading-section"]}>
                <p>Welcome to SETU Qverse!</p>
                <p className={classes["main-body-heading"]}>
                  Let's unlock your true potential.<br/>Your journy to growth start
                  from here!
                </p>
              </div>

              <input
                type="email"
                id="email"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email"
                className={classes["input-email"]}
              />
            </div>

            <div className={classes["continue-section"]}>
              <p>
                By continuing, you agree to our{" "}
                <a href="www.google.com">User Agreement</a> and {" "}
                  <a href="www.google.com">Privacy Policy</a>
              </p>
              

              <button className={classes["continue-button"]}>continue</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
