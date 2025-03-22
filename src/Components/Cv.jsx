import classes from "./Cv.module.css";

const Cv = () => {
  return (
    <>
      <body>
        <h1>Flexbox Playground</h1>
        <div className={classes["container"]}>
          <div className={classes["box1"]}>box1</div>
          <div className={classes["box2"]}>box2</div>
          <div className={classes["box3"]}>box3</div>
          <div className={classes["box4"]}>box4</div>
          <div className={classes["box5"]}>box5</div>
        </div>
      </body>
    </>
  );
};
export default Cv;
